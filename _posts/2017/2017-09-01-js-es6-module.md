---
title: 자바스크립트 ES6 module(export&import)
date: 2017-09-01
category: javascript
tags: 
  - javascript
  - ES6
---

ES6에서 출현한 module 기능은 브라우저 호환성이 아직은 완전하지 않다.  
devOps로 webpack, babel 등을 활용해 사용해 서비스 코드를 만드는 것이 좋다.



### 기본 사용법

app.js

```javascript
import foo from './foo';

// ...

print('Hello World'); // Hello World
```

foo.js

```javascript
export function print(value){
    console.log(value);
}
```





### 심화, 서비스 코드 구현

app.js

```javascript
import sayHi, { print, getTime, myInfo } from './foo';
//default로 지정한 것은 {}바깥, 그렇지 않은 것들은 {}안에 위치한다.

// ...

print('Hello World'); // Hello World
getTime(); // 

const me = new myInfo();
print(`My Name is ${getFullName()}`);
// My Name is Junho Baik
```

foo.js

```javascript
export function print(value){
    console.log(value);
}

export const getTime = () => {
    return Date.now();
}

export class myInfo {
    constructor(props){
        this.name = ["Junho", "Baik"];
    }
  
    getFullName(){
        return this.name[0] + " " + this.name[1];
    }
}

const sayHi = () => {
    console.log("Hi!");
}
export default sayHi;
// export defalut const sayHi... 이와 같이는 쓸 수 없다.
```




```javascript
export const _ = {
    print(value){
        if(window.console) console.log(value);
    }
  	
  	// ...
}

// 위와 같은 방식으로 사용하여
_.print("ABC"); // 이와같이 사용하는 방법 또한 있다.
```



---

## reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)