---
title: 자바스크립트 ES6 const, let 
date: 2017-06-28
category: javascript
tags: 
  - javascript
  - ES6
---

ES6 (ES2015) 에서는 새로운 선언 방법이 생겼는데,  
그것이 const와 let이다.  
기존에 다른 프로그래밍 언어를 사용하고 왔다면 처음 var 를 접할때 당황스러운 점을 느껴본 적이 있을 것이다. var의 관대함 때문이다. 그런 것을 비교하며 살펴보겠다.

```javascript
//case 1
console.log(a);
var a;

//case 2
console.log(a);
let a;

//case 3
console.log(a);
const a;
```

해당 변수를 선언하기 전에 호출하는 모습이다.

- case 1 : `undefined`
- case 2 & 3 : `error`



```javascript
//case 1
var a = 'a';
var a = 'A';

//case 2
let b = 'b';
let b = 'B';

//case 3
const c = 'c';
const c = 'C';
```

위의 세 경우를 보자 같은 이름의 변수를 다시금 선언하고 있는 모습이다.

- case 1 : `a=1`
- case 2 & 3 : `error`



**위의 두가지 경우를 통해서 let, const는 기존의 var의 관대함 없이 엄격해진 것을 볼 수 있다**



### scope

다음으로 스코프, 즉 유효 범위에 따른 차이점이다.

```javascript
//case 1
var a = 'a';
function print(){
  var a = 'A';
  console.log(a);
}
print(); // 'A'
console.log(a); // 'A'

//case 2
let a = 'a';
function print(){
  let a = 'A';
  console.log(a);
}
print(); // 'A'
console.log(a); // 'a'
```

- case 1
  - 함수 밖에서 a 선언, 그리고 함수 안에서 재선언되었다.
  - 함수 안 a 출력은 함수 안에서 선언한 'A'가 출력
  - 함수 밖 a 출력은 함수 안에서 재선언한 'A'가 출력
  - 즉, 동일한 유효범위 안에 있다.
- case 2
  - 함수 밖에서 a 선언, 그리고 함수 안에서 선언.
  - 함수 안 a 출력은 함수 안에서 선언한 'A'가 출력
  - 함수 밖 a 출력은 함수 밖에서 선언한 'a'가 출력
  - 즉, 서로 다른 유효범위를 가지고 있다.
  - let, const는 블록 유효범위(Block scope)를 가지고 있어,
    해당 블록 범위 안에서만 유효하다.




### let, const 의 차이점

var 와 let, const의 차이점을 알아보았고, 그렇다면 let, const의 차이점은 무엇일까?

- const 
  - 상수
  - 초기값 필요 / 값 재할당 불가
  - Array, Object, function의 경우 멤버값 조작 가능
- let
  - 초기값 불필요 / 값 재할당 가능




### let, const 의 사용

그렇다면 언제 let을 사용하고 const를 사용해야 할까?

- const
  - 값이 수정되지 않는 상수값 선언시 사용
  - array, object, function 활용시 사용
- let
  - 값을 재할당할 필요가 있는 변수에 사용




---

### etc.

#### immutable array 만들기 (불변의 어레이 만들기)

```javascript
const list = [1,2,3];

const list2 = list;
list2.push(4);

// 원하는 결과
// list = [1,2,3]
// list2 = [1,2,3,4]
// 'list === list2' 가 false

console.log('1, '+list);
console.log('2, '+list2);
console.log(list === list2);

// 실제 결과
// list = [1,2,3,4]
// list2 = [1,2,3,4]
// 'list === list2' 가 true

// 원하는 결과를 얻기 위한 방법
const newlist = [1,2,3]
const newlist2 = [].concat(newlist);
newlist2.push(4);

console.log('1, '+newlist);
console.log('2, '+newlist2);
console.log(newlist === newlist2);

// newlist = [1,2,3]
// newlist2 = [1,2,3,4]
// 'newlist === newlist2' false
```





---

## References
- http://blog.nekoromancer.kr/2016/01/26/es6-var-let-%EA%B7%B8%EB%A6%AC%EA%B3%A0-const/