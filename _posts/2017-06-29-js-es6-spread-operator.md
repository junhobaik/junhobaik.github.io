---
title: 자바스크립트 ES6 Spread operator, 펼침 연산자
date: 2017-06-29
tags: javascript
category: javascript
---



쉽게 말해 배열을 펼쳐주는 역할이다. ''[ ]''를 떼어낸다고 생각하면 쉽다.  
배열을 바꾸지 않고 새로운 값을 복사, 배열을 합치거나 배열을 펼쳐진 상태로 파라메터로 전달 등의 활용이 가능하다.



```javascript
let a = [1,"",undefined,NaN,null];
let b = [...a];

console.log(a); //[1, "", undefined, NaN, null]
console.log(b); //[1, "", undefined, NaN, null]

console.log(a === b); //false
// 새로운 배열로 메모리에 들어간 복사를 한 형태, 
// concat을 이용한 것과 같은 결과이다.
// 배열을 바꾸지 않고 새로운 값을 복사할 수 있는 방법.
```



```javascript
let c = [...a, 'add'];
console.log(c); //[1, "", undefined, NaN, null, "add"]
// 기존에 복잡한 과정을 거쳐했던 것을 간단하게 
// 이러한 방식으로 배열 앞뒤에 새로운 것을 추가할 수 있다.
```



```javascript
function sum(a,b,c){
  return a+b+c;
}

let s = [1,2,3];

console.log(sum.apply(null,s)); 
// 기존 방식

console.log(sum(...s)); 
// spread operator를 이용한 새로운 방식
```

