# ES6 Proxy



Proxy : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy



```javascript
const myInfo = {
  name: 'baik'
};

const proxy = new Proxy(myInfo, {});
// Proxy(object, handler);

console.log(toString.call(proxy)); // object


console.log(proxy.name); // baik
proxy.name = 'junho';
console.log(proxy.name); // junho
console.log(myInfo.name); // junho


console.log(proxy === myInfo); // false
console.log(proxy.name === myInfo.name); // true
```



```javascript
const myInfo = {
  name: 'baik',
  change: 0
};

const proxy1 = new Proxy(myInfo, {});

const proxy2 = new Proxy(myInfo, {
  get: function(target, property, receiver){
    console.log("get");
    return target[property];
  },
  set: function(target, property, value){
    console.log("set");
    target['change']++;
    target[property] = value;
  }
  // target => myInfo
  // receiver => proxy2
});


console.log(proxy1.name); // "baik"
console.log(proxy2.name); // "get" "baik"
console.log(proxy2.change); // "get" 0
proxy2.name = 'junho'; // "set"
console.log(proxy2.name); // "get" "junho"
console.log(proxy2.change); // "get" 1
console.log(myInfo.name); // "junho"

//porxy의 getter setter를 통해서 값을 가로채서 값을 변화시킨다거나,
//변경사항 로그를 남기는 등의 용도록 활용할 수 있다.
```



권장되는 패턴

```javascript
const proxy = new Proxy(myInfo, {
  get: function(target, property, receiver){
    //...
    return Reflect.get(target, property);
    // Reflect 활용
  },
```







---

## reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)