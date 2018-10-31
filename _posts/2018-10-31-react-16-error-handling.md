---
title: react 16, Error handling with HOC
date: 2018-10-31 23:51:00
tags:
  - react
keywords: 
  - react 에러
  - react error boundries
  - react error handling
  - react hoc
  - Higher Order Components
---



리액트 16 에서는 LifeCycle에 많은 변화가 있었고 17에서는 더 많은 변화가 있을 것이라고 예고했다.

이번에 새로 등장한 `componentDidCatch(error, info)` 라이프사이클 메소드를 이용해 에러를 관리하는 방법을 살펴보자.



## 기본적인 사용법

```javascript
class BoundaryError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <h1>ERROR!</h1>;
    else return this.props.children;
  }
}
```

```javascript
<BoundaryError>
    <Component1 />
</BoundaryError>
```

위의 코드를 살펴보면 `componentDidCatch`에서 에러를 잡아 `setState`로 `hasError`값을 바꿔 에러 상태값을 관리하고  
그 상태값에 따라 리턴을 달리해 에러시에는 에러 문구로 에러가 난 컴포넌트를 대신하게 된다.

이렇게 하면 에러가 발생함에 따라 리액트 페이지 전체가 먹통이 되는 현상을 방지 할 수 있다.



## HOC와 함께 사용하기

HOC는 Higher-Order Components로 간단히 설명하면 컴포넌트를 감싸는 컴포넌트라고 할 수 있다.

HOC에 대한 자세한 설명은 생략하고 Error Handling을 하는데 어떻게 사용하는지를 살펴보겠다.

```javascript
const withErrorBoundary = WrappedComponent =>
  class extends Component {
    state = {
      hasError: false
    };
    componentDidCatch(error) {
      this.setState({ hasError: true });
    }
    render() {
      if (this.state.hasError) return "Sorry...";
      else return <WrappedComponent />;
    }
  };
```

위와 같이 클래스를 만드는 함수로 `withErrorBoundary`를 작성했다.

```javascript
const Component1WithErrorBoundary = withErrorBoundary(Component1);
const Component2WithErrorBoundary = withErrorBoundary(Component2);
const Component3WithErrorBoundary = withErrorBoundary(Component3);
```

```javascript
render(){
    return (
    	<>
        	<Component1WithErrorBoundary />
    	    <Component2WithErrorBoundary />
	        <Component3WithErrorBoundary />
        </>
    )
}
```

이제 위와 같이 사용할 수 있는데 이렇게 되면 에러가 난 컴포넌트만 해당 컴포넌트가 아닌 'Sorry…' 문구가 출력되게 될 것이며, 에러로 인해 리액트 페이지 전체가 먹통이 되는 현상을 방지 할 수 있다.

---

## Reference

- [React Documents](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)
- [Nomad Coders](academy.nomadcoders.co) - React 16 마스터하기
