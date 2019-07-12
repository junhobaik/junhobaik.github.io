---
title: JavaScript 함수형 프로그래밍, go / pipe
date: 2019-07-12
tags:
  - javascript
keywords:
  - go pipe
  - 함수형 프로그래밍
  - 자바스크립트 함수형 프로그래밍
  - 자바스크립트 go
  - 자바스크립트 pipe
  - 자바스크립트 go pipe
  - javascript go
  - javascript pipe
  - javascript go pipe
---

a, b, c.. 라는 함수가 있다고 가정하자.
```js
a(b,c(d,e()));
```
위와 같이 함수가 중첩되고 연속된다면 가독성도 좋지않고 작성하는데도 어려움이 있다.
함수들을 연속적으로 사용하는 함수, 함수들을 함축하는 함수인 go/pipe에 대해 알아보자

## go

go 함수는 인자를 받아 결과를 바로 산출해내는 함수이다.
첫번째 인자는 시작이 되는 **값**을 받고, 나머지는 **함수**를 받아 첫번째 인자가 두번째 함수로 가 결과를 만들고 그 결과가 또 세번째 함수로가 그 결과가 만들어지는 과정이 마지막까지 계속된다.

```js
go(
  0,
  a + 1,
  a * 10,
  console.log
)
```

위와 같이 함수를 실행했을 때 기대값은 10이며 마지막 함수(console.log)가 실행되면서 10이 출력되는 것을 기대할 수 있다.

```js
const go = (...func) =>
  func.reduce((previousFunc, curretFunc) => {
    return curretFunc(previousFunc);
  });
```

간단히 나타내면 위와 같다.

## pipe

pipe 함수는 **함수를 리턴하는 함수**로 인자로 함수들을 받아 그 함수들을 합성해 하나의 함수를 리턴한다. go와는 반환하는 것이 다르다.

```js
let pipe = () => () => {}; // 함수를 리턴하는 함수

const p = pipe(
  a => a + 1,
  a => a * 10
);

console.log(p(0));
```

위와 같은 코드 구성이 될 것이며 `p`에는 합성된 함수가, 그리고 그 `p`를 실행한 `p(0)`의 출력은 10이 나올 것으로 기대할 수 있다.
```js
pipe = (...funcs) => argument => funcs.reduce((acc, func) => func(acc), argument);

const p = pipe(
  a => a + 1,
  a => a * 10
);

console.log(p(0));
```

pipe 함수를 작성하는 과정을 쪼개보면 아래와 같다
```js
pipe = (...funcs) => {};
// pipe 함수는 인자로 함수들을 받는다.

pipe = (...funcs) => () => {};
// 함수를 리턴하게 될 것이다.
// pipe = (...fns) => arg => reduce((acc, fn) => fn(acc), arg, fns);

pipe = (...funcs) => argument => {};
// 여기서 argument는 pipe 함수가 실행되어 함축된 함수, 그 함수의 매개 변수이다.

pipe = (...funcs) => argument => funcs.reduce(() => {}, argument);
// 함수들을 함축해야 하므로 pipe의 인자로 들어온 함수들에 reduce를 사용한다.
// reduce의 시작으로 함축된 함수의 매개변수인 argument를 전달해준다. (argument: 값)

pipe = (...funcs) => argument => funcs.reduce((acc, func) => func(acc), argument);
// 이제 위와 같이 reduce의 첫번째 인자를 채워준다.
// 처음 reduce가 실행될 때는 acc가 pipe 함수의 실행 결과인 함수의 인자 **값**이 들어간다.
// 다음부터는 그 함수의 실행 결과 값이 acc가 되어 누산되는 과정이 된다.
```

작성한 pipe 코드에서 마지막 reduce의 동작은 go와 거의 같기 때문에 아래와 같이 작성해도 같은 코드라 할 수 있다.
```js
pipe = (...funcs) => (argument) => go(argument, ...funcs);
```

go의 경우에도 pipe 코드를 활용하여 작성 할 수 있다.
결국 pipe를 실행해 함축된 함수를 실행하면 go를 한 동작과 거의 동일하기 때문이다.
물론 위의 pipe에 go를 활용한 코드와 함께 사용은 불가하다.
```js
go = (...fns) => {
  const [argument, ...funcs] = fns;
  return pipe(...funcs)(argument);
  // 또는 return pipe.apply(null, funcs)(argument);
}
```


---

References
- [inflearn | 함수형 프로그래밍과 JavaScript ES6+](https://www.inflearn.com/course/functional-es6)
