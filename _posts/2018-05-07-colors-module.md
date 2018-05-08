---
title: 콘솔에 색상을 입혀주는 'Colors' 모듈 사용해보기
date: 2018-05-07 00:00:00 +0900
---

colors 모듈은 우리가 흔히 사용하는 `console.log`의 출력문에 색상을 입힐 수 있다.

## 설치

```shell
npm install --save colors
```

## 사용하기

```javascript
const colors = require("colors");
```

기본적인 사용.

```javascript
console.log("hello world".red); // 빨간색 글씨
console.log("hello world".underline); // 밑줄
console.log("hello world".underline.blue); // 밑줄있는 파란색 글씨
console.log("hello world".inverse.yellow); // 배경이 노란색인 검정 글씨
console.log("hello world".rainbow); // 무지개색 글씨
console.log("hello world".trap); // 알아보기 힘든 모양의 글씨 (ƕɘĹĹʘ ШǾ®Ĺԁ)
```

아래와 같은 사용도 가능하다.

```javascript
console.log(colors.green("hello world")); // 초록색 글씨
```

아래와 같은 방식으로 커스텀 테마를 지정해 사용할 수도 있다.

```javascript
colors.setTheme({
  error: 'red',
  warn: 'yellow',
});

console.log('ERROR!'.error); // 빨간색 글씨
console.log('Warning.'.warn); // 노랜색 글씨
```

```javascript
colors.setTheme({
  test: ['blue', 'inverse']
});

console.log('testing'.test); // 파란색 배경의 검정 글씨
```
