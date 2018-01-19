---
title: 리액트 생명주기 (React LifeCycle)
date: 2017-06-20
tags:
  - javascript
  - react
---

![출처 : https://velopert.com/1130](https://velopert.com/wp-content/uploads/2016/03/Screenshot-from-2016-12-10-00-21-26-1.png)


## - Mount

컴포넌트가 실행 될 때, 'Mount 된다' 라고 표현.

컴포넌트가 시작되면 제일 초기의 작업은

1. context, defaultProps, state 저장
2. componentWillMount 메소드 호출
3. render, 컴포넌트를 DOM에 그린다.
4. componentDidMount 호출

---

## - 기본적인 컴포넌트 생성 과정

### constructor

```javascript
constructor(props){
	super(props);
}
```

컴포넌트가 처음 만들어 질 때 **가장 먼저** 실행되는 메소드


### componentWillMount

```javascript
componentWillMount(){
}
```

컴포넌트가 DOM 위에 만들어지기 전에 실행된다,

- componentWillMount 중 주의할 점
  - 현재 Mount 진행 중이므로(DidMount 전이다), props나 state를 변경해서는 안된다.
  - 또한 render 단계에 진입하지 않았으므로 DOM에 접근 할 수 없다.


### componentDidMount

```javascript
componentDidMount(){
}
```

컴포넌트가 만들어지고 난 후 render를 거치고 실행되는 메소드.

여기서 javascript framework 연동, setTimeout, setInterval 및 AJAX 처리를 한다.

- componentDidMount 에서 주의할 점
  - render가 되었으므로 DOM에 접근 할 수 있지만,
    state를 바꾸면 안된다. setState메소드를 사용하면 render 메소드가 다시 실행되기 때문이다.
    방금 render를 마친 단계인데, 다시금 render가 실행되면 사용자에게 표시될때 깜박임 등을 유발 할 수 있게 된다.

---



## - Props Update 에 따른 cycle

props가 업데이트 될 때의 사이클,

업데이트 되기 전, 업데이트를 감지 우선 **componentWillRecieveProps** 메소드 호출.

다음으로 **shouldComponentUpdate, componentWillUpdate**가 차례로 호출.

업데이트(render)가 완료되면 componentDidUpdate가 실행된다.

여기서 componentDidUpdate는 이미 업데이트 된 상태이다, 따라서 바뀌지 이전의 props에 대한 정보를 가지고 있다.

메소드들의 첫번째 인자로 props에 대한 정보를 가지고 있다.



1. componentWillRecieveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render
5. componentDidUpdate



###  componentWillRecieveProps

```javascript
componentWillRecieveProps(nextProps){
  
}
```

컴포넌트가 props를 새로 받았을 때 실행.

prop에 따라 state 를 업데이트 해야 할 때 사용하면 유용하다.

- componentWillRecieveProps 단계에서 주의 할 점
  - setState를 할 때 추가적으로 렌더링 하지 않는다

### shouldComponentUpdate

```javascript
shouldComponentUpdate(nextProps, nextState){
  var foo = nextProps !== this.props;
  return foo;
}
```

prop 또는 state가 변경되었을때, 다시 render를 할지 결정하는 메소드.

return 값 boolean으로 결정된다.



###  componentWillUpdate

```javascript
componentWillUpdate(nextProps, nextState){
    
}
```

컴포넌트가 업데이트 되기 전에 실행.

- 주의사항
  - setState 사용 시 무한 루프 발생



### componentDidUpdate

```javascript
componentDidUpdate(prevProps, prevState){
    
}
```

render를 마친 후 실행된다.

변경되고 난 후 이므로 변경 전의 prop, state를 가지고 있다.



---



## - State Update 에 따른 cycle

setState를 통해서 state가 업데이트 될 때의 과정.

props update와 과정은 동일하나 componentWillRecieveProps 메소드는 호출되지 않는다.

메소드들의 두번째 인자로 state에 대한 정보를 가지고 있다.



1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate


---



## - Unmount

Unmount, 컴포넌트가 제거되는 것.



1. componentWillUnmount

### componentWillUnmount

```javascript
componentWillUnmount(){
  
}
```

컴포넌트가 DOM 에서 사라진 후 실행되는 메소드,

연결해두었던 이벤트 리스너를 제거하는 등의 수행을 하게 된다.







---

## References

- https://velopert.com/1130
- https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955
