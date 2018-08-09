---
title: 웹팩 대신 파셀(Parcel) 사용해보기 \[with React, Babel, SASS\]
date: 2018-03-23 22:31 +0900
tags:
  - parcel
  - react
  - sass
  - babel
---

주로 CRA(create-react-app)을 이용한 리액트 개발을 주로 해왔고 그로 인해 웹팩(Webpack) 번들러를 통해 간단한 설정 변경 등을 해왔는데 이번에 새로운 번들러인 파셀(Parcel)을 알게되었다.

공식 홈페이지의 헤드라인부터 **불꽃 튀게 빠르고 설정이 필요 없는 웹 애플리케이션 번들러**이다.  
사용해보고나니 비교적 무거운 웹팩보다는 빠르다는게 느껴졌고 복잡했던 설정법보다는 쉽게 설정이 가능한 번들러였다. minify, hot module replacement와 같이 기본적으로 필요한 기능은 거의 포함되어있고 가벼우니 개인 소규모 프로젝트에는 좋을 것 같다는 생각이 들었다.



## Parcel 시작하기

[공식 홈페이지](https://parceljs.org/)

일단 파셀을 사용하기 위해 글로벌 설치해보자
```shell
$ npm install -g parcel-bundler
```

다음으로 우선 git과 npm을 init하자
```shell
$ git init
$ npm init
```

`index.html`, `index.js` 파일을 준비하고
```html
<!-- index.html -->
<body>
  <div id="root"></div>
  <script src="./index.js"></script>
</body>
```
위와 같이 js파일을 연결해준다.  
div#root는 후에 React를 사용하기 위한 것이다.

그리고 파셀 명령어로 개발 서버를 켜주면 파셀을 사용할 준비가 된 것이다.

```shell
$ parcel index.html

Server running at http://localhost:1234
Built in 9ms.
```

NPM Script에도 추가해두면 편리하게 사용이 가능하다.
```json
// package.json
  "scripts": {
    "start": "parcel index.html"
  }
```



## React 사용하기

React 사용은 Parcel이라고 다르지 않으므로 간단히 다루겠다.

```
$ npm install --save react react-dom
```

이제 리액트 컴포넌트와 css파일을 만들고 index.js를 수정해보자

`./src/App.js`
```javascript
import React from 'react';
import './style.css';

class App extends React.Component {
  render(){
    return(
      <div id="App">
        Hello World
      </div>
    )
  }
}

export default App;
```

`./src/style.css`
```css
body {
  color: red;
}
```

`./index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js';

ReactDOM.render(<App />, document.getElementById('root'));
```

여기까지 리액트를 사용하기 위한 되었다.  
허나 아직은 에러와 함께 작동하지 않을 것인데, 여기서 Babel이 필요하다.



## Babel 사용하기

Babel env, react preset을 설치한다.

```shell
$ npm install --save-dev babel-preset-env babel-preset-react
```

`./.babelrc` 파일을 생성, 설정을 등록한다.
```json
{
  "presets": ["env", "react"]
}
```

여기까지 했다면 작성했던 코드가 정상적으로 출력되는 것을 볼 수 있다.



## SASS(SCSS) 사용하기

정상적인 설치 방법은 우선 node-sass 모듈을 설치하는 과정을 거쳐야 하나 parcel을 사용하면 더 간편하게 사용할 수 있다.

현재 css 파일을 scss 확장자로 바꾸고
css 파일을 import 했던 부분을 scss로 바꿔주면

Parcel이 자동으로 node-sass를 설치하며 적용된다.



## Build

[공식 문서 - production](https://parceljs.org/production.html)

바로 npm script를 추가해 빌드를 해보자
```json
"build": "parcel build index.html -d build --public-url ./"
```

`-d build`는 `./build`폴더에 빌드한다는 뜻이며,  

여기서 하나 알아두면 좋은 것은 `--public-url ./` 부분이다.  
`--public-url ./` 옵션을 주게 되면 빌드 후 아래와 같은 결과가 나온다.

```html
<link rel="stylesheet" type="text/css" href="1a2b3c4d.css">
or
<script src="e5f6g7h8.js"></script>
```

Github Page와 같은 정적 페이지 서비스를 사용할 경우에는 아래와 같이 할 수 있다.
```shell
$ parcel build index.html -d build --public-url https://username.github.io
```

그러면 결과가 아래와 같이 된다.
```html
<link rel="stylesheet" type="text/css" href="https://username.github.io/1a2b3c4d.css">
or
<script src="https://username.github.io/e5f6g7h8.js"></script>
```

이렇게 빌드를 하고나면 minify된 빌드 결과물을 얻을 수 있다.


---

여기까지 정말 간단하게만 Parcel로 작은 리액트 프로젝트를 사용하기 위한 준비를 해보았다. 

CRA(Create-react-app)과 프로젝트를 시작하는 단계에서 비교해보면 babel 설정과 같은 부분은 Parcel이 설정해줘야하는 것이 하나 더 있다는 점이 있지만 SASS 사용 등 복잡한 Webpack config를 뒤지고 수정하는 면에서는 Parcel이 더 간편하게 사용할 수 있는 것 같다.  

---

- References
  - [Parcel documents](https://parceljs.org/getting_started.html)
