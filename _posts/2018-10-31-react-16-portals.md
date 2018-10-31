---
title: react 16, Portals
date: 2018-10-31 23:40:00
tags:
  - react
keywords:
  - react 16
  - react protals
  - react protal
---

Portals은 루트 리액트 컴포넌트가 아닌 외부의 DOM에 접근하여 변경할 수 있게 해준다.

쉽게 말하면 react는 기본적으로 아래와 같이 `index.html`에 하나의 엘리먼트를 대상으로 마운트되어 그 곳에서만 변경이 가능하다. 그 외부의 엘리먼트를 대상으로 변경할 수 있게 해주는 것이 Portals이다.

## Portals 기본 사용법

```html
<!-- index.html -->

<div id="root"/>
```

```javascript
// index.js

ReactDOM.render(<App />, document.getElementById("root"))
```

여기서 portals를 이용하면 `index.html`의 `div#root`이외에 접근하여 변경 할 수 있다.

```html
<!-- index.html -->
<h1 id="title"></h1>
<div id="root"/>
```

React Scope안에 위치하지 않는 `h1#title` 엘리먼트를 만들어두고

아래와 같이 리액트 코드를 작성한다.

```javascript
// App.js

import { createPortal } from 'react-dom'

class Portals extends Component {
    render(){
        return createPortal(
            'Hello World!',
            document.querySelector('h1.title')
        );
    }
}

class App extends Component {
    render(){
        return (
			<>
				<Portals />
            </>
        )
    }
}
```

위를 보면 `react-dom`의 `createPortal` 메소드를 사용했다.

```javascript react
ReactDOM.createPortal(child, container)
```

첫번째 인자는 렌더링 가능한 리액트 하위 요소가 되고,  
두번째 인자는 타겟이 될 DOM 엘리먼트이다.

그리고 해당 portals 컴포넌트를 App 컴포넌트 리턴에 포함시켜 주었다.

Protals는 Modal 구현같은 곳에 유용하게 쓰일 수 있을 것 같다.

---

## Reference

- [React Documents](https://reactjs.org/docs/portals.html)
- [Nomad Coders](academy.nomadcoders.co) - React 16 마스터하기
