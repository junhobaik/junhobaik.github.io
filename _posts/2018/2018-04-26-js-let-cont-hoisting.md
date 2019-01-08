---
title: ES6, Hoisting으로 다시 보는 let, const
date: 2018-04-26 23:11 +0900
tags:
  - ES6
  - javascript
---

Javascript Hoisting에 대해 다시 살펴보던 도중, 예전에 공부할땐 var를 대상으로 공부했으니 깨닫지 못했는데 이번에 let, const를 가지고 해보니...  
호이스팅이 되지 않았다. (정확히 말하면 호이스팅이 되지 않는 것은 아니다.)

그래서 이제 어떻게 된건지 알아보자. (Hoisting의 개념과 Block-Scope 개념을 기본적으로 알고 있어야 이해가 가능하다.)

## 기존의 Hoisting

```javascript
console.log(a);
var a = 10;
```

호이스팅 후 =>

```javascript
var a;
console.log(a); // undefinded
a = 10;
```

호이스팅이 적용된 코드는 위와 같고 따라서 undefinded가 출력된다.

## let, const의 Hoisting

```javascript
console.log(a);
let a = 10;
```

이렇게 let으로 바꾼다면 결과는

```shell
Uncaught ReferenceError: a is not defined
```

위와 같은 a가 정의되지 않았다는 레퍼런스 에러가 발생한다,  
결국 a 변수 선언이 위로 호이스팅되지 않았다는 이야기가 된다.

하지만 그렇지 않다.
아래 예제를 보면 호이스팅이 안되는게 아니라는 것을 알 수 있다.

```javascript
let a = 10;

{
  console.log(a);
}
```

위 예제는 당연하게도 `10`이 출력된다.
이제 아래 예제를 보자

```javascript
let a = 10;
{
  console.log(a);
  let a = 20;
}
```

호이스팅이 되지 않는다면 위 코드 그대로 실행되어 10이 출력되는 것이 정상일 것이다.  
그러나 여기서는 아래와 같이 에러가 출력된다.

```shell
Uncaught ReferenceError: a is not defined
```

결국 let, const와 같이 ES6 선언도 호이스팅의 대상이기 때문에 위에서는 두번째 let의 블록 스코프안에서 호이스팅이 이뤄서 console.log에서 에러가 발생하게 된 것이다.

그렇다면 이러한 에러가 발생하는 이유는 무엇일까,

우선 var 키워드의 경우를 살펴보자,  
```javascript
var a = 10;
```
var로 선언된 변수는  
[선언 - 초기화 - 할당] 의 단계 중  
[선언 - 초기화]가 한번에 이루어지고 다음에 [할당]이 되게 된다.

1. [선언 - 초기화]
2. [할당]

그에 반해 let/const 키워드는 다르게 실행된다.  
선언, 초기화, 할당이 따로 이루어지고 **TDZ(Temporal Dead Zone)**라는 것이 개입한다.

과정은 아래와 같다.

1. [선언]
2. [TDZ]
3. [초기화]
4. [할당]

초기화(변수가 메모리에 할당되며 undefined로 초기화되는 과정)가 되기 전에 변수에 접근하려 한다면 **TDZ**에 의해서 에러가 발생하게 된다.

```javascript
var a;
console.log(a);
a = 10;
```
```javascript
let a;
console.log(a);
a = 10;
```

위처럼 호이스팅 된 코드를 보면 변수에 접근하는 데 있어  
기존 var 키워드는 선언과 초기화가 함께 되었으므로 접근하여도 정상적으로 undefined가 출력된다.  
하지만 let/const 키워드는 선언만 호이스팅 되고 그것은 초기화 이전이므로 접근하려 한다면 TDZ에 의해서 에러가 발생하는 것이라고 볼 수 있다.

여기까지 let/const의 관점에서의 Hoisting에 대해 포스팅해보았다.  
let/const를 사용하면서 조금 더 엄격한 자바스크립트를 작성할 수 있게 되었고 그로 인해 예기치 않은 오류를 작성하는 상황을 줄일 수 있게 된 것 같다.

---

## References

- [let, const와 블록 레벨 스코프](http://poiemaweb.com/es6-block-scope)
- [let과 const는 호이스팅 될까?](https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365)
