# Closuer

- 함수, 함수가 선언될 때의 environment로 구성
- 함수가 정의 될 때의 environment가 함께 closure로 결합되면서, 다양한 활용이 가능

```js
function makeCounterFunction(initVal){
    var count = initVal;
    function Increase(){
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);
```
- counter1의 closure
    - 함수 : function Increase(){}
    - 환경 : var count = 0;
- counter2의 closure
    - 함수 : function Increase(){}
    - 환경 : var count = 10;
여기서 counter1, counter2 함수가지고는 count 변수의 값을 직접 제어할 수 없다, count 변수는 makecounterfunction 안에 있고 여기선 increse함수밖에 없기때문이다. 이 원리를 이용해 private한 변수를 활용할 수 있다 아래서 확인해보자.

---

간단하게 클로저의 두가지 개념을 이해하도록 하자.  

1) 외부 함수가 소멸된 뒤에도 내부 함수는 외부 함수의 지역 변수에 접근 할 수 있다.  
2) 클로저를 이용하여 private한 변수를 만들 수 있다.  

1번의 예
```js
function sum() {
    var num = 0;
    console.log(num);
    function addsum() {
        console.log(num);
        num++;
        return num;
    }
    return addsum;
}
var a = sum(); 
// function addsum(){...}
// 여기서 sum 함수는 수명이 끝남.

a();
// 여기서 addsum()을 하게 되는 꼴인데,
// num을 증가시키는 부분에서 num은 클로저에 담긴 num이다.
// Closure(sum) num: 0

a();
// Closure(sum) num: 1

a();
// Closure(sum) num: 2
```

2번의 예
```js
function people(name) {
    return {
        get_name: function () {
            console.log(name);
            return name;
        },
        set_name: function (_name) {
            console.log(name);
            name = _name;
        }
    }
}
var junho = people("junhobaik"); 
//여기서 외부 함수의 인자로 값을 넘긴다.
//함수에서는 전달 받은 값을 직접 조작할 수 없게 되고
//get,set_name을 통해서만 접근 할 수 있게 된다.
//이렇게 사용하는 방법으로 private한 변수를 만들 수 있다.

junho.get_name(); 
//이때 실행되는 get_name의 console.log에서 name값은 closure(people) name:'junhobaik' 이다.
```

---

### 추가 내용

```html
<button id="btn0">버튼 1</button>
<button id="btn1">버튼 2</button>
<button id="btn2">버튼 3</button>
<script> 
    for (var i = 0; i < 3; i++) {
        document.getElementById('btn' + i).addEventListener("click", function () {
            console.log("Click btn", i+1);
        });
    }
</script>
```
기대하는 결과는 Click btn1,2,3 하지만 실제 결과는 Click btn3,3,3  
그 이유는 아래와 같다.  
1. for문을 돌며 버튼 1,2,3에 이벤트가 등록되며 콜백함수또한 등록된다. (여기서 위에서 살펴본 설명으로 이벤트는 외부함수, 콜백함수는 내부함수라고 할 수 있다)
2. 이벤트가 등록되면서 이벤트 함수는 스택에서 떠난다 (소멸되었다)
3. 따라서 콜백함수는 클로저 i값에 접근하게 되는데 클로저 i값은 콜백함수 모두가 공유하게 되는 값이다.
4. for문을 통해 증가가 완료된 값이 클로저에 남아있고, 그 클로저 값이 계속해서 노출되는 것이다.

해결 방법  
1. let을 이용한 block scope 생성을 통한 해결
2. 이벤트 함수(외부함수)를 또 함수로 묶어 새로운 scope를 만들어낸다.