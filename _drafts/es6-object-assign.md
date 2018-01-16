# ES6 Object assign

아래 코드는 Object create를 사용한 코드이다.

```javascript
const infoObj = {
  showName : function(){
    console.log("My name is " + this.name);
  }
}

//아래와 같은 방법으로 프로토타입을 사용한 것 보다 간결하게 나타낼 수 있다.
const myInfo = Object.create(infoObj);

myInfo.name = "Junho";
myInfo.age = 27;

console.log(myInfo);
/*
{name: "Junho", age: 27}
  age:27
  name:"Junho"
  __proto__: 
    showName: ƒ showName()
    __proto__:Object
*/
console.log(myInfo.showName()); //"My name is Junho"
```



아래 코드는 위의 코드에 Object assign을 사용한 코드이다.

`myInfo.name = "Junho";` 와 같이 계속해서 추가해야하는 수고를 덜어줄 수 있다.

```javascript
const infoObj = {
  showName : function(){
    console.log("My name is " + this.name);
  }
}

const myInfo = Object.assign(Object.create(infoObj), {
  name : "Junho",
  age : 27
});


console.log(myInfo);
console.log(myInfo.showName());
```





## Object assign 으로 Immutable 객체 만들기

```javascript
const previousObj = {
  name : "Junho",
  age : 27
};

const myInfo = Object.assign({}, previousObj, {
  name : "Baik",
  msg : "Hi"
});

const myInfo2 = Object.assign({}, previousObj, {});


console.log(previousObj); //{name: "Junho", age: 27}

console.log(myInfo); //{name: "Junho", age: 27}
console.log(previousObj === myInfo); //false

console.log(myInfo2); //{name: "Junho", age: 27}
console.log(previousObj === myInfo2); 
//false
//내용은 같으나 사실상 다른 객체이다, immutable object
```



---

## reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)