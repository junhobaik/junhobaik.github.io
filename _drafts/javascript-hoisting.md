# Javascript Hoisting

Hoist는 "끌어올리다"라는 뜻을 가지고 있다.

자바스크립트 엔진은 코드를 실행하기 전에 코드 전체를 살펴본다.
이 과정에서 선언된 내용이 있는지 '선언'을 살펴본다.
그리고 그 '선언'된 내용들을 모두 호이스팅. 즉, 끌어올리게 된다.

아래 코드를 보자.


```javascript
console.log(a());
console.log(b);
console.log(c());
function a() {
  return 'a';
}
var b = 'b';
var c = function(){
  return 'c';
}
```

일반적인 생각으로 코드가 라인 순서대로 실행된다면, 
1번 라인에서부터 함수 a가 선언되기 전이므로 a가 없어 오류가 발생해야한다.
하지만 위에서 설명한 호이스팅에 따라서 결론적으로 실행되는 코드는 아래와 같게 된다.

```javascript
function a() {
  return 'a';
}
var b;
var c;
console.log(a());
console.log(b);
console.log(c());
b = 'b';
c = function(){
  return 'c';
}
```

**함수 선언문 a는 통째로 끌어올려졌다.**
기본 값이 담긴 변수 b와 함수 표현식 c는 선언만 끌어올려졌다.
할당은 호이스팅의 해당 사항이 아니다.
b와 c는 선언과 할당이 동시에 이루어진 것으로 분리되어 선언만 호이스팅 된 것이다.

따라서 위의 코드에서는 에러가 하나 발생하게 된다.

```javascript
a
undefined
Uncaught TypeError: c is not a function
```

`console.log(a())`는 정상적으로 출력되어 'a'가 출력되었고,
`console.log(b)`는 `var b`의 선언만이 호이스팅 되었으므로 undefined가 출력,
`console.log(c())`는 `var c`의 선언만이 있고 함수 호출을 하였으므로 함수가 아니라는 오류가 발생하게 된다.