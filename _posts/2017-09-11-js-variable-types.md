---
title: 자바스크립트의 타입들
date: 2017-09-11
category: javascript
tags: 
  - javascript
---

## Javascript Variable Types


자바스크립트의 변수는 모든 데이터 타입을 수용할 수 있도록 되어있다.

`typeof` 라는 특정 변수의 데이터 타입을 확인하여 문자열로 반환하는 연산자가 있다.



- **값은 타입을 가진다 / 변수에는 따로 타입이란 없다**
  변수는 언제라도 어떤 형태의 값이라도 가질 수 있다.
  `var a = '123'`
  변수 a는 string 타입이다 (X)
  변수 a의 값으 string 타입이다 (O) //정확한 표현

  ​

### Standard defines seven data types

1. Six data types that are primitives
  1. Boolean
  2. Null
  3. Undefinend
  4. Number
  5. String
  6. Symbol
2. and Object




… symbol 은 ES6부터 출현한 타입

… object를 제외한 나머지 타입을 원시 타입(primitives)이라 한다



### typeof results


| Type             | 'typeof' Result |
| ---------------- | --------------- |
| number           | number          |
| string           | string          |
| boolean          | boolean         |
| undefined        | undefined       |
| null             | **object**      |
| symbol           | symbol          |
| function object  | function        |
| any other object | object          |



- **typeof null === 'object' //… true ??**

자바스크립트에서는 null 이 기본형으로 구분되어있다.
하지만 typeof null의 결과로는 null이 반환되지 않고 object가 반환되는 이유는 자바스크립트 개발 당시 다른 언어들과 같이 null이 0값을 가지고 있는 객체로 취급하여 object를 반환하도록 개발되었기 때문이다.
null값이 기본형이므로 반환값을 null로 바꾸자는 의견도 많으나 이미 object 반환 방식으로 구현된 웹들이 많아 쉽게 바꾸지 못하고 있다.

null을 확인하기 위한 방법으로는 (var a = null)
`!a && typeof a === 'object'`

- **typeof function a(){} // function**

typeof가 반환하는 값 중 7가지 타입이 아닌 것이 하나 있는데 그것이 function이다.  function은 object의 하위 타입으로 함수가 객체라서 유용한 점으로는 property를 들 수 있다, a.length로 property의 갯수를 알 수 있다.

- **배열…?**

typeof [1,2,3] // 'object' 이다.
배열도 객체이기 때문이다, 숫자 인덱스를 가지고 length 프로퍼티가 자동으로 관리되는 등 추가 특성을 가진 객체의 하위 타입이라 할 수 있다.
toString.call([1,2,3]) 을 사용하면 [object Array]의 반환값을 얻어 구체적으로 타입을 알 수 있어 배열인지 알 수 있게 된다.



### undefined

```javascript
var a;
console.log(a); //undefined
var b = 1;
console.log(b); //1
var c;
console.log(c); //undefined
b = c;
console.log(b); //undefined
console.log(d); //ReferenceError: d is not defined
```

위의 코드를 보면

undefined (값이 없는), undefined(선언되지 않은) 은 자바스크립트에서는 전혀 다르다는 것을 알 수 있게 된다.



```javascript
var a;
var b = 1;
console.log(typeof a); //undefined
console.log(typeof b); //undefined
console.log(typeof c); //undefined
```

위의 코드를 보면 typeof는 값이 없는, 선언되지 않은 것 모두가 undefined 으로 표시된다.

typeof로는 둘을 구분 할 수 없지만 이렇게 에러가 발생하지 않는 특성(안전가드라고 한다)을 이용하여 유용하게 사용하는 방법도 있다.