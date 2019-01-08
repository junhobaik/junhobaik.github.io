---
title: HTML 데이터 속성 사용하기 (data-, dataset)
date: 2018-02-10 20:58:00 +0900
tags:
    - html
    - javascript
    - css
---

HTML 태그안에 데이터 속성(**data-**)을 두어 그 데이터를 JS나 CSS에서 불러 쓸 수 있다.



## HTML

```html
<tag id="a" data-test-keyword="ABC"></tag>
```

`data-` 뒤에 데이터 속성의 이름을 입력한다.

`-`, `.`, `:`, `_` 와 영문 소문자가 입력 가능하다. (대문자는 불가능)

위의 예제에서는 **test-keyword**이다.



## JavaScript

```javascript
const el = document.querySelector('#a');

console.log(el.dataset.testKeyword); // "ABC"
```

JavaScript에서의 접근법으로는 `dataset` 을 이용하여 불러올 수 있다.

데이터 속성 이름에서`data-`를 뺀 뒤 camelCase로 변환되어있다.

따라서 위에서 지정한 `data-test-keyword`가 `testKeyword`가 되었다.



## CSS

```css
#a[data-test-keyword="ABC"] {
    display: none;
}
```

CSS에서는 HTML의 데이터 속성 이름 그대로를 사용해 접근 할 수 있다.



---

### References
[https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/dataset)
