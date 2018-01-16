# ES6 Class

자바스크립트에도 이번 ES6에서 Class라는 키워드가 생겼다.



아래는 기존 자바스크립트의 코드이다.

```javascript
function myInfo(name) {
    this.name = name;
}

myInfo.prototype.showName = function(){
    console.log("My name is "+ this.name);
}

const baik = new myInfo("Junho");
baik.showName(); // "My name is Junho"
```



아래는 Class를 활용한 코드이다.

```javascript
class myInfo {
  constructor(name){
    this.name = name;
  }
  
  showName() {
    console.log("My name is "+ this.name);
  }
}

const baik = new myInfo("Junho");
baik.showName(); //"My name is Junho"
```

위와 같이 클래스로 똑같은 코드를 구현할 수 있다. 하지만 그렇다고 클래스라는 것이 완전히 새로 생긴 것이 아니고 위와 같이 했더라도 내부적으로는 함수, 프로토타입을 통해 작동하는 것이다.

```javascript
console.log(toString.call(myInfo)); //[object Function]
```

이번에 ES6에서 편의와 가독성을 위해 class라는 키워드가 생긴 것이라고 볼 수 있다.


---

## reference

- [모던 자바스크립트(javascript) 개발을 위한 ES6 강좌](https://www.inflearn.com/course/es6-%ea%b0%95%ec%a2%8c-%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8/)