---
title: 리액트 라우터 V4 사용하기 (React-Router v4)
date: 2017-06-06
tags:
  - react
---


SPA(Single page application) 에서는 새로운 페이지 전체를 렌더링하지 않고, 부분적인 UI를 새로 렌더링한다.
따라서 브라우저는 이 정보에 대한 이력을 남기지 않는다.
결국 ''뒤로가기/앞으로가기''를 사용할 수 없다는 이야기이며,
이는 사용자에게 당연시 되는 기능이므로 안된다면 많은 불편을 야기할 수 있다.
그를 해결하기 위한 방법으로 React-router 라이브러리를 사용하게 된다.



## install

`npm install --save-dev react-router-dom`

기존 v3 에서는 react-router 만 설치해서 사용하면 됐었다.
v4에서는 브라우저와 react에서 사용되는 라우터가 분리되어 사용하도록 되어있다.
React-router-dom을 설치하면 react-router도 같이 설치된다.



## Use

### Basic 

상단의 헤더, 그 아래 컨텐츠가 나타나는 기본 구조.

- src/App.js

```javascript
//..
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './routes/Main';
import User from './routes/User';
import Header from './components/Header';
import Posts from './routes/Posts';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Main}/>
          <Route path="/user" component={User}/>
          <Route path="/posts" component={Posts}
          {/* exact 키워드가 없으면 /user 경로에서 /도 있는 것으로 인식, 
          Main과 User가 동시 출력 된다.*/}
        </div>
      </Router>
    );
  }
}
```



- src/components/Header.js

```javascript
//..
  return (
    <div>
    	<Link to="/">Home</Link>
      	<Link to="/User">User</Link>
    </div>
  );
```



---



### URL Parameter

- src/App.js

```javascript
//..
<Route path="/user/:username" component={User}/>
//..
```



- src/routes/User.js

```javascript
//..
const User = ({match}) => {
  return (
  	<div> UserName is {match.params.username} </div>
  );
}
```

`…/user/baik` URL로 접속하면 UserName is baik 라는 것을 확인 할 수 있다.



---



### Route in Component

- src/routes/Posts.js

```javascript
//..

import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
  return (
	<div>
    	<h2>{match.params.title}</h2>
    </div>
  );
}

const Posts = () => {
  return (
  	<div>
    	<h1>Post</h1>
      	<Link to="/posts/react">React</Link>
      	<Link to="/posts/redux">Redux</Link>
      	<Route
          	path="/posts/:title"
          	component={Post}
          />
    </div>
  );
}

exports default Posts;
```



---



### NavLink

- src/components/Header.css

```css
.item.active {
  
}
```

- src/components/Header.js

```javascript
// <Link to ...></Link> => <NavLink to...></NavLink>

<NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>

{/* exact를 줘야 효과가 지난후에도 남아있지 않고 정확히 일치할때만 효과 적용 가능*/}
```



---



### Redirect

```javascript
import { Redirect } from 'react-router-dom';

const isLogin = false

//..
return (
  <div>	
	{!isLogin && <Redirect to="/login"/>}
    MyPage
  </div>
);
```



```javascript
const Main = ({history}) => {
  return (
  	<div>
    	<button onClick={()=>{history.push('/posts')}}>포스트로 이동</button>
    </div>
  );
}
```



---



### Query Parameter

```javascript
//..
const Main = ({location}) => {
  return (
      <div>
          {new URLSearchParams(location.search).get('keyword')} 검색
      </div>
  );
}
```



---



### Make NotFound Page

- src/App.js

```javascript
//..
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//..
import notFound from './routes/notFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          	<div>
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/user" component={User}/>
                <Route path="/posts" component={Posts}/>
                <Route component={notFound}/>
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}
```

Switch를 추가한다.

기존 Switch가 없고, exact 조차 없을때는 Route 전체를 하나하나 비교해서 출력하나

Switch가 있으면 일치하는 것이 있으면 비교를 그만둔다, 끝까지 일치하는 것이 없으면 notFound 컴포넌트를 보여주게 된다.



---

## Reference

- CodeSquad
- https://velopert.com/3275
