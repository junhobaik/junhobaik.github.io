---
title: React 16, Fragments
date: 2018-10-31 23:29:00
tags:
  - react
keywords:
  - react 16
  - react fragment
  - react fragments
---



React 16 이전에서는 return 시 하나의 컴포넌트 또는 null만 가능했다.  
그래서 wrapper를 쓰는 방식으로 div로 감싸던가 아니면 span을 이용하던지, 그것도 아니면 array를 쓰는 등 여러 불편한 방법을 사용했었다.

하지만 16 부터는 fragment를 활용하여 여러 엘리먼트를 return 할 수 있다.

```react
class ReturnStringType extends Component {
    render(){
        return 'Hello World'
    }
}

class Index extends Component {
    render(){
        return (
			<React.Fragment>
            	<Comp1 />
				<ReturnStringType />
            </React.Fragment>
        )
    }
}
```

위처럼 Fragment로 컴포넌트 엘리먼트와 String 타입 엘리먼트를 감싸보았다.

이것을 브라우저 상에서 확인하면 Fragment는 확인이 되지 않고 두개의 엘리먼트만이 보이게 된다.

Short Syntax로 `<> </>`와 같이 사용할 수도 있지만,  
key, attribute를 사용할 수 없고 호환성 이슈로 리액트 문서에서는 아직 권장하지는 않는다.

---

## Reference

- [React Documents](https://reactjs.org/docs/fragments.html)
- [Nomad Coders](academy.nomadcoders.co) - React 16 마스터하기
