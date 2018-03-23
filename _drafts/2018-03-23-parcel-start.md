---
title: 파셀(Parcel) 사용해보기 \[with React, SASS\]
date: 2018-03-23 22:31 +0900
---

주로 CRA(create-react-app)을 이용한 리액트 개발을 주로 해왔고 그로 인해 웹팩(Webpack) 번들러를 통해 간단한 설정 변경 등을 해왔는데 이번에 새로운 번들러인 파셀(Parcel)을 알게되었다.

공식 홈페이지의 헤드라인부터 **불꽃 튀게 빠르고 설정이 필요 없는 웹 애플리케이션 번들러**이다.  
사용해보고나니 비교적 무거운 웹팩보다는 빠르다는게 느껴졌고 복잡했던 설정법보다는 쉽게 설정이 가능한 번들러였다. minify, hot module replacement와 같이 기본적으로 필요한 기능은 거의 포함되어있고 가벼우니 개인 소규모 프로젝트에는 정말 좋을 것 같다는 생각이 들었다.

## Parcel 시작하기

[공식 홈페이지](https://parceljs.org/)

일단 파셀을 사용하기 위해 글로벌 설치해보자
```shell
$ npm install -g parcel-bundler
```
