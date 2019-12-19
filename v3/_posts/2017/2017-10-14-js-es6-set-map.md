---
title: 자바스크립트 ES6 Set, WeakSet / Map, WeakMap
date: 2017-10-14
category: javascript
tags: 
  - javascript
  - ES6
---

## Set

중복없이 유일한 값을 저장하기 위한 타입, 이미 존재하는지 체크할때 유용하다

```javascript
let mySet = new Set();
console.log(toString.call(mySet)); // [object Set]

function print(set){
  set.forEach(function(value){
    console.log(value); 
  });
}

mySet.add('a');
mySet.add('b');
mySet.add('a'); //저장 안됨

print(mySet); // "a" "b"

console.log(mySet.has('b')); // true

mySet.delete('a');

print(mySet); // "b"
```



## WeakSet

참조를 가지고 있는 객체만 저장이 가능하다.

참조를 가지고 있던 객체가 참조를 잃게 되면 (null 이 되거나…) 가비지컬렉션의 대상이 된다.

객체를 중복없이 저장하고 활용하려할때 유용하게 쓰일 수 있다.

```javascript
let ws = new WeakSet();
console.log(toString.call(ws)); // [object WeakSet]

let arr = [1,2,3,4,5];
let obj = { arr };
let number = 100;
function foo(){}

//ws.add(100);
ws.add(arr);
ws.add([1,2,3,4,5]);
ws.add(obj);
//ws.add(100);
//ws.add(number);
//ws.add('string')
ws.add(foo);
ws.add(function a(){});
// 위 주석처리는 모두 에러 발생한 것들
// TypeError: Invalid value used in weak set


arr = null;
console.log(ws.has(arr)); //false
```





### map / WeakMap

map과 set의 차이는 다루는 타입과, 구조가 다르다.

map => object , key/value
set => array

이러한 차이점 이외에는 사용법은 거의 동일하다, 
Weak와 같은 경우에도 참조가 사라지면 가비지컬렉션의 대상이 되는 것도 동일하다.

map을 활용하여 따로 부가적인 정보를 저장하는 key/value를 활용할 수 있는 것 정도의 차이점이 있다.

### 

#### WeakMap 활용

프라이빗한 변수 만들기.

```javascript
const wm = new WeakMap();

function MyInfo(name, age){
  wm.set(this, {name, age});
}

MyInfo.prototype.getInfo = function(){
  const {name, age} = wm.get(this);
  return 'name:'+name+"/age:"+age;
}

let myInfo = new MyInfo('baik', 27);

console.log(myInfo.getInfo());
//"name:baik/age:27"

console.log(wm.has(myInfo)); //true
myInfo = null;
console.log(wm.has(myInfo)); //false

//myInfo를 통해서는 name, age 값을 뽑아낼 수 없다, (private)
```



---

## Reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)
