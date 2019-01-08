---
title: Vue.JS 및 Vue 개발 도구 설치하기
date: 2018-02-21 23:59 +0900
tags:
  - vue
  - javascript
---

## Vue.JS 설치



### CDN으로 설치하기

```html
<script src="https://unpkg.com/vue"></script>
```

간단히 index.html 내에 위 코드를 추가하는 것만으로 vue를 간단하게 사용할 수 있다.  
다만 CDN을 기반으로 Vue를 개발하려면 .vue 확장자를 이용하는 개발은 할 수 없어 싱글 파일 컴포넌트 개발이 불가능하고 개발에 제약이 따른다.  
제대로 된 vue 개발을 위해서는 아래의 방법을 시도하자.

### NPM으로 설치하기

```shell
# 최신 stable 버전
$ npm install vue
```

프로젝트 내에 vue를 설치하여 사용할 수 있다. Webpack 등 각종 번들러와도 잘 작동한다.  
허나 더 편리하게 초기 세팅을 하고 싶다면 아래의 Vue CLI를 사용하는 방법이 최선일 것이다.


## 개발 도구 설치


### Vue CLI

```shell
# vue-cli 설치
$ npm install --global vue-cli

# vue init <template-name> <project-name>
# "webpack" 템플릿을 이용해서 새 프로젝트 생성
$ vue init webpack my-project

$ cd my-project
# 의존성 설치
$ npm install
# 개발 서버 실행
$ npm run dev
```

이렇게 하면 react의 create-react-app과 같이 webpack 환경의 프로젝트 구조가 자동 생성되며 이제 이것을 기본으로 개발을 시작하면 된다.


### Vue DevTools

React와 유사하게 크롬 개발 도구에서 사용할 수 있는 개발툴을 지원한다.

[크롬 확장 프로그램 설치](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

---

## References
- https://kr.vuejs.org
