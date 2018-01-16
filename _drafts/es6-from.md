# ES6 from



Javascript에서는 배열로 보이지만 정작 배열이 아닌 형태의 것들이 존재한다.

예로 메소드로 전달되는 인자들을 활용하는 arguments 객체같은 경우에도 배열같아보이지만 실제 배열은 아니다.
따라서, map과 같은 배열을 다루는 메소드를 활용할 수 없는데 이러한 가짜 배열을 진짜배열로 바꿔주는 것을 from 이 해주게 된다.



```javascript
function toArray(array){
  const len = array.length;
  const temp = [];
  
  for(let i=0; i<len; i++){
    temp.push(array[i]);
  }
  
  return temp;
}

function toArray2(array){
  return array.map(function(value){
    return value;
  })
}


function foo() {
  
  console.log(toString.call(arguments)); 
  // [object Arguments]
  
  console.log(toArray(arguments));
  // [1, 2, 3, 4, 5]
  
  //console.log(toArray2(arguments));
  // map 사용시 배열이 아니기 떄문에 오류 발생
  
  /*************************************/
  
  let newArray = Array.from(arguments);
  
  console.log(toString.call(newArray));
  // [object Array]
  
  console.log(toArray(newArray));
  // [1, 2, 3, 4, 5]
  
  console.log(toArray2(newArray));
  // [1, 2, 3, 4, 5]
}

foo(1,2,3,4,5);
```



위 코드에서 toArray2 메소드는 map을 활용하여 배열을 반환한다.

하지만 arguments를 인자로 전달했을때는 에러가 발생하는 것을 볼 수 있다.