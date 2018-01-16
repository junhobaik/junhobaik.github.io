---
title: Javascript 함수선언문과 함수표현식
date: 2018-01-02
tags: javascript
category: javascript
---

자바스크립트에서 함수선언문과 함수표현식의 차이점을 인식해두는 것은 중요한 점이다.
큰 차이점이라 하면 호이스팅(Hoisting)이라고 할 수 있다.

우선 함수선언문과 같은 경우를 살펴보자.

```javascript
functionDeclaration();
function functionDeclaration(){
  return 'functionDeclaration';
}
```

```javascript
'functionDeclaration'
```

함수 선언문의 경우에는 호이스팅에 의해 함수 전체가 호이스팅의 대상이 된다.
따라서 작성한 코드에서 함수 선언문 보다 위에 함수 호출이 있더라도 정상적으로 호출이 된다.

다음으로 함수표현식의 경우를 살펴보자

```javascript
unnamedFunctionExpression();
var unnamedFunctionExpression = function(){
  return 'unnamedFunctionExpression';
}
```

```
Uncaught TypeError: unnamedFunctionExpression is not a function
```

결과는 unnamedFunctionExpression 변수가 함수가 아니라는 오류가 뜨게 된다.
변수 선언 자체는 호이스팅되었지만 할당은 호이스팅의 대상이 아니므로 할당된 값이 없는 변수를 함수라 여기고 함수 호출을 한 샘이니 이러한 오류가 발생한 것이다.

즉, 함수 선언문과 함수 표현식의 차이는 호이스팅 여부를 가름짓는 **할당**에 있다고 할 수 있다.

함수선언문을 사용해서 나타날 수 있는 문제점을 아래 코드에 나타냈다.

```javascript
function a(){
  return 'a';
}
a();
function a(){
  return 'A';
}
a();
```

위의 코드는 a A 를 원하지만 A A가 나오게 된 문제가 생긴 코드 라인이 방대한 프로젝트의 경우 위와같은 커뮤니케이션 오류에 따라 원하는 함수의 결과를 얻지 못할 수 있다.

이러한 점들을 종합해 함수선언문의 사용보다는 함수표현식의 사용이 권장된다.  
유명한 더글라스 크락포드 그리고 Airbnb의 Code Convension에서도 함수표현식을 권장하고 있다.

## Reference

- [KENDRICK'S BLOG](http://blog.sonim1.com/142)
- [CAPTAIN PANGYO](https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/#%ED%95%A8%EC%88%98-%EC%84%A0%EC%96%B8%EC%8B%9D---function-declarations)