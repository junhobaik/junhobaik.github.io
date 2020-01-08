---
title: "React Hooks: useState, useEffect 알아보기"
date: 2020-01-08
tags:
  - react
keywords:
  - react hooks
  - react hook
  - usestate
  - useeffect
  - useeffect cleanup
---

뒤늦은 Hooks 포스팅입니다. Hooks 기본을 정리해보고, 사용해오면서 알게 된 점도 정리해봅니다.  
간단히 useState에 대해 설명하고, useEffect에 대해서는 조금 더 자세하게 알아봅니다.

---

Hooks는 React 16.8부터 등장한 새로운 기능입니다.  
Class Component가 아니더라도 Functional Component에서 state 및 기타 기능을 사용할 수 있게 합니다.

아래는 리액트 공식 문서의 Hooks 설명 일부입니다.

> Hook는 알고 있는 React 컨셉을 대체하지 않습니다. 대신에, Hook는 props, state, context, refs, 그리고 lifecycle와 같은 React 개념에 좀 더 직관적인 API를 제공합니다. 또한 Hook는 이 개념들을 엮기 위해 새로운 강력한 방법을 제공합니다.

일반적으로 Functional Component를 사용하게 되면 state를 사용할 수 없고 React LifeCycle을 사용할 수 없다는 한계에 부딪치게 되는데 Hooks의 등장으로 새로운 방법이 제공됩니다. (Effect Hooks 부분에서 자세히 알아봅니다)

## useState()

기존의 Class Component에서 사용하던 것을 보면 아래와 같습니다.

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```

위와 같이 state를 선언하고 `this.setState({ count: 1 })`와 같이 setState 함수를 통해 state 값을 변경할 것입니다.

기존의 state를 다루는 방법은 useState Hooks를 이용하게 됩니다.  
아래의 코드는 useState를 사용한 예제입니다.

```js
import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

useState는 아래와 같이 사용합니다.

```js
const [count, setCount] = useState(0);
```

`useState()`가 `count`, `setCount`로 [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment '구조 분해 할당')되어있습니다.  
useState는 state 변수와 해당 변수를 변경할 수 있는 함수(즉, setState 함수)를 반환합니다.  
따라서 아래와 같은 방법으로도 사용할 수 있습니다. 이렇게 사용할 일은 없겠지만 말입니다.

```js
const countVariables = useState(0);

countVariables[1](20); // == setCount
console.log(countVariables[0]); // 20, == count
```

Class Component 방식에서 사용하던 setState를 통해서는 기존의 state와 새로운 state를 합치는 방법으로 state 값이 변경되었으나, useState를 사용한 setState인 예제에서 setCount를 통해서는 state를 합치는 방식이 아닌 count state만을 변경하게 됩니다.

### 요약

#### 선언

```js
import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  //...
```

#### 갱신

```js
<button onClick={() => setCount(count + 1)}>
// or
<button onClick={() => setCount(prevCount => prevCount + 1)}>
  // 기존의 setState 함수와 유사하게 prevState를 사용할 수 있습니다.
```

#### state 사용, 가져오기

```js
<p>You clicked {count} times</p>
```

## useEffect()

useState는 간단하고 사용하기 쉽습니다.  
useEffect는 간단한 사용은 쉬울지 모르나, 제대로 동작을 이해하려면 깊게 공부가 필요해보입니다. 따라서 여기서는 사용함에 있어 햇갈리지 않고 오류를 범하지 않으면서 기본적인 동작을 이해하는 수준에서 기술하겠습니다. 기존 Class Component의 Life Cycle을 이해하고 있다는 전제하에 진행합니다.

아래 코드를 보겠습니다.

```js
import React, { useEffect, useState } from 'react';

export const FuncComp = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        FuncComp>count1 + (current: {count1})
      </button>

      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        FuncComp>count2 + (current: {count2})
      </button>
    </div>
  );
};
```

해당 코드는 count1, count2의 state를 가지고 있습니다.  
그리고 각각의 state를 변경(증가)하는 버튼이 위치합니다.

useEffect가 위치한 곳을 봐주세요.  
여기서 useEffect의 안에 함수가 실행되는 시점.  
즉, console.log가 작동하는 시점을 기존 Class Component의 LifeCycle의 관점에서 보면 아래와 같습니다.

- componentDidMount
- componentDidUpdate

마운트와 업데이트 시점에서 “useEffect” 문구가 출력되게 됩니다.  
위의 예에서는 첫 로드시, `count1` `count2`가 업데이트 될 때 출력됩니다.

간단히 보자면 위 useEffect안의 함수는 “매 렌더링마다 실행된다”라고 생각하면 쉽습니다.
props, state가 변경될때마다 렌더링이 실행될테니말입니다.

### 의존성 추가

이제 아래 코드를 살펴보겠습니다.

```js
useEffect(() => {
  console.log('useEffect');
}, [count1]);
```

`useEffect(fn)`형태에서 `useEffect(fn, [])`가 되어 인자로 배열이 추가되었습니다.

여기서 배열은 **의존성**을 담은 배열로,  
위와 같이 `count1`을 담는다면 이제 마운트시에 호출되고, 그 후로는 `count1`이 변경될때만 호출되어 “useEffect”문구가 출력될 것입니다.

위의 예제에서 `count1`을 증가시키는 버튼을 누르면 “useEffect”문구가 출력될것이고, `count2`에서는 출력되지 않습니다.

여기서 의존성 배열을 비운다면 어떻게 될까요

```js
useEffect(() => {
  console.log('useEffect');
}, []);
```

위의 코드는 간단하게 말하면 componentDidMount의 역활을 대체할 수 있습니다.  
의존성 배열 자체를 인자로 넘기지 않으면 모든 state(+props)가 변경될 때 호출되게 되지만 넘긴다면 해당 의존성이 변경될때 호출되게 되고 비어있다면 마운트시에만 호출되게 되는 것입니다.  
따라서 componentDidMount를 구현하고 싶다면 해당 코드와 같이 작성하면 됩니다.

### CleanUp

아래 코드를 살펴봅시다. 의존성으로 `count1`을 가진 이펙트입니다.

```js
useEffect(() => {
  console.log('count1', count);

  return () => {
    console.log('count1 CleanUp', count);
  };
}, [count]);
```

위의 코드를 보면 return 라인이 추가되어 함수를 반환합니다.

마운트 시, 그리고 `count1`에 변동이 있을 때 “count1” 문구가 출력될 것을 예상할 수 있습니다.
“count1 CleanUp”은 언제 출력될까요?

일단 마운트가 되면 “count1”이 출력됩니다.
그 후 count1을 증가시키게되면 아래와 같은 과정을 거치게됩니다.  
증가시키기 전인 count 값은 0입니다.  
(이해를 위한 과정 설명으로 실제 작동은 이와 다를 수 있습니다)

1. count = 0인 해당 이펙트(위의 코드) 클린업 과정 실행
2. count = 1에 해당하는 렌더링
3. count = 1에 해당하는 이펙트 실행
   이를 통해 업데이트 이전에 클린업이 실행된다는 사실을 알고있으면 됩니다.

또한 클린업은 언마운트시에도 작동하게 됩니다.
따라서 만약 해당 컴포넌트가 언마운트되면 위 코드의 클린업도 실행되게 됩니다.

아래 코드를 살펴보겠습니다.

```js
useEffect(() => {
  console.log('mount');

  return () => {
    console.log('unmount');
  };
}, []);

useEffect(() => {
  console.log('update count1');

  return () => {
    console.log('update count1 or unmount');
  };
}, [count]);
```

코드의 첫번째 이펙트는 componentDidMount의 기능을 한다고 설명했던 코드입니다.  
두번째 이펙트는 바로 위에서 살펴본 코드와 같습니다.

아래의 동작을 하면 어떤 순서로 출력문이 나올지 보겠습니다.

1. 페이지 로드 (컴포넌트 마운트)
2. count1 증가 버튼 클릭
3. 해당 컴포넌트 사라지게함 (언마운트)

```shell
< "mount"
< "update count1"
< "update count1 or unmount"
< "update count1"
< "update count1 or unmount"
< "unmount"
```

1~2라인은 마운트에 해당하는 출력입니다.  
3~4라인은 `count1`값을 업데이트하면서 클린업-\>이펙트의 과정을 거친 출력입니다.  
5~6라인은 컴포넌트가 언마운트되면서 이펙트들의 클린업이 실행된 출력입니다.

6라인을 보아 해당 이펙트(빈 의존성 배열)의 클린업은 componentWillUnmount의 기능을 하는 것을 알 수 있습니다.

클린업은 DOM에 추가한 이벤트 리스너를 컴포넌트가 언마운트될때 제거할 경우 등의 경우에서 사용되게 될겁니다.

### 요약

**Mount (componentDidMount)**

```js
useEffect(() => console.log('mount'), []);
```
<br/>

**Unmount (componentWillUnmount)**

```js
useEffect(() => () => console.log('unmount'), []);
```
<br/>

**Update Any**

```js
useEffect(() => console.log('will update any'));
```
<br/>

**Update Any or Unmount**

```js
useEffect(() => () => console.log('will update any or unmount'));
```
<br/>

**Update `Count`**

```js
useEffect(() => console.log('will update count'), [count]);
```
<br/>

**Update `Count` or Unmount**

```js
useEffect(() => () => console.log('will update count or unmount'), [count]);
```
<br/>
<br/>

---
<br/>

**References**

- [React Document | Hooks](https://reactjs.org/docs/hooks-intro.html 'React Document | Hooks')
- [stackoverflow | react hooks useEffect() cleanup for only componentWillUnmount?](https://stackoverflow.com/a/55041347)
