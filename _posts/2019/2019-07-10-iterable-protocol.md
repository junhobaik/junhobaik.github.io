---
title: 이터러블 프로토콜, 이터러블/이터레이터
date: 2019-07-10
tags:
  - ES6
  - javascript
keywords:
  - iterable
  - iterator
  - iterable protocol
  - 이터러블
  - 이터레이터
  - 이터러블 프로토콜
  - 이터러블 이터레이터
---



이터러블 프로토콜은 ES6에서 도입된 것으로 간단히 말하면 
**이터러블 프로토콜은 순회(반복) 가능한 객체를 나타내는 프로토콜**이라 할 수 있다.

`for...of` 반복문, `...` 전개 연산자(Spread Operator), 구조 분해 등과 함께 동작 할 수 있도록 한 프로토콜이다. 이 말은 이터러블이여야만 이러한 동작이 가능하다는 것을 뜻하기도 한다.

## iterable/iterator

- 이터러블: 이터레이터를 반환하는 `Symbol.iterator`라는 키값의 메소드를 가진 객체
- 이터레이터: `{ value, done }` 객체를 반환하는 `next()` 메소드를 가진 객체

이제 예제를 통해 살펴보자.

```js
const arr = [1, 2, 3];

for(const n of arr) {
  console.log(n);
}
// 1 2 3

console.log(...arr);
// 1 2 3

const [first, ...remain] = arr;
console.log(first, remain); // 1, [2, 3]
```

위는 일반적인 배열의 값들을 for...of 반복문으로 출력한 것이다.
(예를 든 Array 외에도 이터러블이 가능한 반복가능한 객체로는 Map, Set, String, TypedArray, arguments 객체 등이 있다)
앞서 말했듯 for...of 순회가 가능한 이유는 이터러블이기 때문인데 그것을 아래에서 확인해보자

```js
console.dir(arr);

/*
> Array(3)
  > __proto__ : Array(0)
     ...
     > Symbol(Symbol.iterator): ƒ values()
     ...
*/
```

우선 Array의 내부(프로토타입 체인 내)에서 `Symbol(Symbol.iterator): ƒ values()`를 확인 할 수 있다.
Array에는 `Symbol(Symbol.iterator)`라는 key를 가진 함수가 존재한다는 것을 알 수 있고 앞서 설명한 **이터레이터를 반환하는 `Symbol.iterator`라는 키값의 메소드를 가진 객체**에 부합하는 것을 볼 수 있다.

만약 위의 코드를 아래와 같이 하면 어떻게 될까

```js
const arr = [1, 2, 3];

arr[Symbol.iterator] = null;

for(const n of arr) { // Uncaught TypeError: arr is not iterable
  console.log(n);
}
console.log(...arr);
```

`arr[Symbol.iterator] = null;`을 통해 이제 더이상 배열 arr은 이터러블이 아니게 되었다.
그래서 for...of에서 arr은 이터러블이 아니라는 오류를 만나게 된다. 전개 연산자도 마찬가지다.

여기까지 이터러블의 모습까지 확인해보았고 다음으로는 이터레이터를 확인해보자.

`arr[Symbol.iterator]`는 함수이다. 그렇다면 `arr[Symbol.iterator]()`를 한다면 반환되는 것은 이터레이터가 될 것이다.

```js
const arrIter = arr[Symbol.iterator]();

console.log(arrIter); // Array Iterator {}
```

위 코드를 통해 반환된 것이 이터레이터 객체인 것을 확인했다.

이터레이터는 **`{ value, done }` 객체를 반환하는 `next()` 메소드를 가진 객체**라고 했었는데 `next()` 메소드를 확인해보자.

```js
console.log(arrIter.next()); // {value: 1, done: false}
console.log(arrIter.next()); // {value: 2, done: false}
console.log(arrIter.next()); // {value: 3, done: false}
console.log(arrIter.next()); // {value: undefined, done: true}
console.log(arrIter.next()); // {value: undefined, done: true}
```

보는 것과 같이 `{ value, done }` 객체가 반환 된 것을 볼 수 있다.
value값이 있을 때는 done이 false를 가지고, 이제 순회할 것이 없는 상황에는 done이 true를 가진다.

또 다른 예제를 살펴보자.

```js
const arrIter2 = arr[iterator]();

arrIter2.next();

for(const v of arrIter2){
	console.log(v);
}
// 2 3
```

반복문 전에 `next()`를 한번 해서 첫번째 값은 출력이 안된 모습을 확인 할 수 있다.

## 사용자 정의 iterable protocol

이터러블 프로토콜을 따라서 또한 순회 동작을 사용자 정의할 수 있다는 점이 이터러블을 활용하는데 있어 중요한 의의를 가진다.

```js
const reverseIterable = a => {
  return {
    [Symbol.iterator]() {
      let i = a.length;

      return {
        next() {
          return i === 0 ? { value: undefined, done: true } : { value: i--, done: false };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    }
  };
};

const reverseArr = reverseIterable(arr);
for (const v of reverseArr) console.log(v); // 3 2 1

const reverseArrIter = reverseArr[Symbol.iterator]();
console.log(reverseArrIter.next()); // {value: 3, done: false}
for (const v of reverseArrIter) console.log(v); // 2 1
```

위 코드는 일반적인 이터러블 순회를 반대 순서로 순회가 되도록 바꿔 본 커스텀 이터러블이다.

부분적으로 자세히 살펴보자.

이터러블은 **이터레이터를 반환 `Symbol.iterator`의 키값의 메소드를 가진 객체**라 했었으니
아래와 같이 `return { [Symbol.iterator](){...} }` 와 같이 시작할 것이다.

```
const reverseIterable = (a) => {
  return {
    [Symbol.iterator]() {
      // ... 
    }
  };
};
```

또한 이터레이터는 **`{ value, done }` 객체를 반환하는 `next()` 메소드를 가진 객체**라 했었으니 아래와 같은 구조여야한다.

```js
const reverseIterable = (a) => {
  return {
    [Symbol.iterator]() {
      next() {
            return { value: ..., done: ... }
      }
    }
  }
};

```

이렇게 여기까지 작성한 코드는 아래와 같다.

```js
const reverseIterable = (a) => {
  return {
    [Symbol.iterator]() {
      let i = a.length;

      return {
        next() {
          return i === 0 ? { value: undefined, done: true } : { value: i--, done: false };
        }
      };
    }
  };
};
```

이터러블/이터레이터 프로토콜의 조건을 모두 갖춘 것 같다.
맨 위의 완성된 코드가 아닌 바로 위의 코드로 한번 아래 코드를 실행해보자

```js
const reverseArr = reverseIterable(arr);

for(const v of reverseArr) console.log(v); // 3 2 1
```

정상적으로 원하는 동작이 된 것 같다.
하지만 아래의 방법으로 실행해보면 에러가 발생한다

```js
const reverseArrIter = reverseArr[Symbol.iterator]();

console.log(reverseArrIter.next()); // {value: 3, done: false}

for(const v of reverseArrIter) console.log(v);
// Uncaught TypeError: reverseArrIter is not iterable
```

그 이유는 `reverseArr`의 경우에는 사용자가 정의한  `[Symbol.iterator]()`를 가지고 있어 이터러블하지만 `reverseArr[Symbol.iterator]()`를 통해 만든 이터레이터`reverseArrIter`는 이터레이터의 조건인 **`{ value, done }` 객체를 반환하는 `next()` 메소드를 가진 객체**는 만족하지만 내부(프로토타입 체인)에 `[Symbol.iterator]()`를 가지고 있지 않아 이터러블 하지 않기 때문이다.

console.dir을 이용해 위에서 사용한 `arrIter`를 살펴보면 내부에 `[Symbol.iterator]()`를 가지고 있고 `reverseArrIter`는 그렇지 않은 것을 확인 할 수 있다.

따라서 코드에서 `next()`와 함께 `[Symbol.iterator]() { return this }`를 리턴해 이터러블하게 해준 것이라 할 수 있다.

이러하게 이터러블 프로토콜을 사용자 정의해서 사용할 수 있다면 순회 동작에 사용자가 원하는 동작을 넣을 수도 있고 더 나아가 원래 이터러블하지 않는 것조차 순회가 가능하게 이터러블하게 만들어 순회할 수 있게 될 수 있다.

### 제너레이터

```js
function* gen() {
  yield 1;
  if(false) yield 2;
  yield 3;
  return 4;
}

const gIter = gen();

console.log(gIter.next()); 
// {value: 1, done: false}

console.log(gIter[Symbol.iterator]);
// ƒ [Symbol.iterator]() { [native code] }

for(const v of gIter) console.log(v);
```

제너레이터의 실행 결과인 제너레이터 객체는 이터레이터 객체이다.
위 코드에서 `gIter.next()`가 가능한 것을 보면 알 수 있다.
또한 `[Symbol.iterator]()`를 가지는 이터러블이기도 하다.

제너레이터 객체는 이터레이터이자 이터러블이기 때문에 역시 순회가 가능하다.
또한 제너레이터에는 마지막에 리턴 값을 만들 수 있다. 하지만 `done` 또한 `ture`가 되기 때문에 **순회의 대상이 되진 않는다.**

이러한 제너레이터를 이용하면 위에서 사용자 정의 이터러블을 해본 것을 더 간단하게 바꿀 수 있다.

```js
function* gen2(a) {
  let i = a.length;

  while (i--) {
    yield a[i];
  }
}

const g2Iter = gen2([1, 2, 3]);
console.log(g2Iter.next()); // {value: 3, done: false} 
console.log(g2Iter.next()); // {value: 2, done: false}
console.log(g2Iter.next()); // {value: 1, done: false}
```

## 정리

- 이터러블 프로토콜: 순회(반복) 가능한 객체를 나타내는 프로토콜, 이터러블이면 순회가 가능하다.
- 이터러블: 이터레이터를 반환하는 `Symbol.iterator`라는 키값의 메소드를 가진 객체
- 이터레이터: `{ value, done }` 객체를 반환하는 `next()` 메소드를 가진 객체

- 이터러블 프로토콜을 사용자 정의 할 수 있음에 따라 원하는 객체를 지정한 동작에 따라 순회할 수 있게 되어 원하는 값을 추출해내고 다양한 객체에 이를 적용해 결과를 얻을 수 있게 되었다.

- 기본적으로 반복이 가능한 것으로는 (iterable이 내장되어있다) String, Array, TypedArray, Map, Set가 있다.

---

References
- [MDN | The iterable protocol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable "MDN | The iterable protocol")
- [https://ahnheejong.gitbook.io/ts-for-jsdev/02-ecmascript/element-enumeration/iterable-protocol](https://ahnheejong.gitbook.io/ts-for-jsdev/02-ecmascript/element-enumeration/iterable-protocol)
