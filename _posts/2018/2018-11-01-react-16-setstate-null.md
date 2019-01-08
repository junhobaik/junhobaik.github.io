---
title: React 16, Returning null from setState
date: 2018-11-01
tags:
  - react
keywords:
  - react 16
  - setstate null
---



어떠한 이유로 컴포넌트의 업데이트를 하고 싶지 않을 때 사용 할 수 있다.

이전에는 `setState(null)`을 하더라도 컴포넌트가 업데이트 되었으나 React 16 부터는 업데이트가 되지 않는다.



간단한 코드를 살펴보자



```javascript
const MAX_CNT = 5;

const cntInrease = (state, props) => {
  const { cnt } = state;
  if (cnt < MAX_CNT) {
    return {
      cnt: cnt + 1
    };
  } else {
    return null;
  }
};
```

위의 코드는 state를 변경해가며 카운트가 하나씩 증가하는 코드이고, `MAX_CNT`에 해당하는 값까지만 증가하도록 해놓았다.  
`MAX_CNT` 이상은 `null`을 리턴한다.

```javascript
class App extends Component {
  state = {
    cnt: 0
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState(cntInrease)}>{this.state.cnt}</button>
      </div>
    );
  }
}

export default App;
```

위의 코드를 살펴보면,  
`componentDidUpdate` 라이프사이클 메소드를 이용하여 업데이트가 되는지를 확인하도록 콘솔로그를 작성했고,  
버튼의 onClick 이벤트에 `setState`의 인자로 위에서 작성한 `cntIncreate` 함수를 넣었다.

이제 작동을 확인해보면 `MAX_CNT` 값까지는 state가 변경되며 컴포넌트 또한 업데이트 되는 로그를 확인 할 수 있다.  
`MAX_CNT`에 도달하면 이제 null이 리턴되면서 더 이상 업데이트가 되지 않는다.

여기서 중요한 점은 setState(null)로 인해서 업데이트가 되지 않는 다는 점,  
컴포넌트의 업데이트를 제어할 방법이 하나 추가되었다는 점이다.

---

## Reference

- [React Blog](https://reactjs.org/blog/2017/09/26/react-v16.0.html#breaking-changes)
- [Nomad Coders](academy.nomadcoders.co) - React 16 마스터하기
