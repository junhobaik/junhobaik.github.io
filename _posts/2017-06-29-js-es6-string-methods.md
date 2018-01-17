---
title: 자바스크립트 ES6 String Methods
date: 2017-06-29
category: javascript
tags: 
  - javascript
  - ES6
---

- [String.prototype.startsWith()][https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith]
  - 문자열이 특정 문자로 시작하는지 확인, 결과를 true, false로 반환.
- [String.prototype.endsWith()][https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith]
  - 문자열이 특정 문자로 끝나는지 확인, 결과를 true, false로 반환.
- [String.prototype.includes()][https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes]
  - 문자열에 특정 문자열이 포함되는지 확인, 결과를 true, false로 반환.

```javascript
let str = 'javascript es6 string methods';

console.log(str.startsWith('javascript')); //true
console.log(str.endsWith('methods')); //true
console.log(str.includes('es6')); //true
```



- [String.prototype.repeat()][https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat]
  - 문자열을 인자만큼 반복하는 문자열을 반환

```javascript
let str = 'es6';

console.log(str.repeat(3)); //es6es6es6
```





---

## Reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)