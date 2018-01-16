# ES6 Object setPrototypeOf

setPrototypeOf 로 프로토타입 객체를 추가 할 수 있다.



`Object.setPrototypeOf(obj, prototype)`

object에 prototype을 추가한다.



```javascript
const infoObj = {
  sayHi : function(){
    console.log("Hi " + this.name)
  },
  setName : function(name){
      this.name = name;
  }
};

const myInfo = {
  name : "Baik",
  msg : "Hi"
};

Object.setPrototypeOf(myInfo, infoObj);

console.log(myInfo.sayHi());
//Hi Baik

myInfo.setName("Baek");

console.log(myInfo.sayHi());
```





### setPrototypeOf 로 개체간 prototype Chain 만들기



```javascript
const infoObj = {
  sayHi : function(){
    console.log("Hi " + this.name)
  },
  setName : function(name){
      this.name = name;
  }
};

const infoChildObj = {
  getAge : function(){
    return this.age;
  }
}

const myInfo = Object.setPrototypeOf({
  age : 22
}, infoChildObj);
// Chain = infoChildObj - myInfo

console.log(myInfo);
// age, getAge

Object.setPrototypeOf(infoChildObj, infoObj);
// Chain = infoObj - infoChildObj - myInfo

console.log(myInfo);
// age, getAge, sayHi, setName

infoObj.sayAge = function(){
  console.log("Age is " + this.age)
}
// infoObj에 sayAge를 추가함으로 myInfo에 까지 영향을 미치게된다.

console.log(myInfo);
//age, getAge, sayAge, sayHi, setName


```



---

## reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)