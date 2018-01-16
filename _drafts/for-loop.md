# Javascript 'For Loop'



자바스크립트에서 사용하는 for 반복문의 유형에 대해 알아보자.



1. for
   1. `for ([initialization]; [condition]; [final-expression])`

2. for in
   1. `for (variable in [object | array])`

3. for of (ES6)

   1. `for (variable of object)`




---



#### - for

`for ([initialization]; [condition]; [final-expression])`



#### - for in

`for (variable in [object | array])`

- variable
 1. object 일때 variable = object의 다음 속성 이름
 2. array 일때 variable = array의 다음 요소 인덱스




#### - for of (ES6)

`for (variable of object)`

- variable
 1. object의 임의 속성 **값**일 수 있는 변수입니다.




```javascript
const arr = [1,"",undefined,NaN,null];

/**************************************/

for(let index = 0; index < arr.length; index++){
  console.log(arr[index]);
}
// 1
// ""
// undefined
// NaN
// null


/**************************************/


for(let index in arr){
  console.log("index:" + index + " / arr[index]:" + arr[index]);
}
// index:0 / arr[index]:1
// index:1 / arr[index]:""
// index:2 / arr[index]:undefined
// index:3 / arr[index]:NaN
// index:4 / arr[index]:null


/**************************************/


for(let value of arr){
  console.log(value);
}
// 1
// ""
// undefined
// NaN
// null
```



### for of / for in 의 차이점

배열일 경우 배열 전체를 순회하는 반복문인 것은 같지만 차이점이 있다.

여기서 ES6에서 새로 나온 for of 의 장점을 발견 할 수 있다.



아래 코드를 살펴보면 Array의 prototype에 foo라는 새로운 메소드를 정의해놓았다.
그런데 arr를 for in문을 통해서 콘솔 출력한 결과 foo라는 메소드까지 같이 출력되는 것을 볼 수 있다.
하지만 for of는 그렇지 않다, 온전히 자신의 것만 출력할 수 있다.

```javascript
const arr = [1,"",undefined,NaN,null];
Array.prototype.foo = function(){};

for(let index in arr){
  console.log("index:" + index + " / arr[index]:" + arr[index]);
}
// index:0 / arr[index]:1
// index:1 / arr[index]:""
// index:2 / arr[index]:undefined
// index:3 / arr[index]:NaN
// index:4 / arr[index]:null
// index:foo / arr[index]:function () {}

for(let value of arr){
  console.log(value);
}
// 1
// ""
// undefined
// NaN
// null
```

