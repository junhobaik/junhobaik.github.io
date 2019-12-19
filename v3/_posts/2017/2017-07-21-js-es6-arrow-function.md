---
title: 자바스크립트 ES6 Arrow Function
date: 2017-07-21
category: javascript
tags: 
  - javascript
  - ES6
---

ES6 에 출현한 새로운 형태의 함수 표현 방법

```javascript
const fn = function(){};
const arrowFn = () => {};

(v) => (v+1) //{}없이 사용, v+1이 리턴값
(v) => v+1 //()생략 가능
```



### Arrow Function, this context

```javascript
const obj = {
  runTimeout() {
    setTimeout(function(){
      console.log(toString.call(this)); //[object Window]
    }, 1000);
  },
  
  sayHi(){
    console.log("hi");
    console.log(toString.call(this));
  }
}

obj.runTimeout(); //[object Window]
obj.sayHi(); // hi [object Object]
```

위의 코드는 아무런 문제 없이 작동하는 코드이다, runTimeout은 settimeout때문에 이벤트큐에 등록 된뒤 실행되는 것이라 this가 해당 오브젝트가 아닌 윈도우이다. 우선 위에서 this가 가리키는 것이 무엇인지 잘 봐두고, 문제가 될 수 있는 상황을 아래서 살펴보자

```javascript
const obj = {
  runTimeout() {
    setTimeout(function(){
      console.log(toString.call(this));
      this.sayHi(); //<========
      //typeError: this.sayHi is not a function
    }, 1000);
  },
  
  sayHi(){
    console.log("hi");
    console.log(toString.call(this));
  }
}

obj.runTimeout();
```

runTimeout 에서 sayHi를 실행하려면 this가 가리키는 것이 서로 다르기 때문에 오류가 난다.

```javascript
const obj = {
  runTimeout() {
    setTimeout(function(){
      console.log(toString.call(this)); //[obejct Object]
      this.sayHi();
    }.bind(this), 1000); //<========
  },
  
  sayHi(){
    console.log("hi");
    console.log(toString.call(this)); //[obejct Object]
  }
}

obj.runTimeout(); // [obejct Object] hi [obejct Object]
```

위와 같이 .bind(this) 를 사용하여 해결하는 방법이 있다.

```javascript
const obj = {
  runTimeout() {
    setTimeout(()=>{ //<========
      console.log(toString.call(this));
      this.sayHi();
    }, 1000);
  },
  
  sayHi(){
    console.log("hi");
    console.log(toString.call(this));
  }
}

obj.runTimeout();
```

또 다른 방법으로 Arrow function을 이용하여 해결할 수 있다.

Arrow function은 항상 this context를 실행되는 해당 context를 유지하는 특성이 있다.



---

## reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)