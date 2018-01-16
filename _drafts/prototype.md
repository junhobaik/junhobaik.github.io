# Prototype

자바스크립트에서 모든 객체는 자신의 부모 객체와 연결 되어있다.
이것을 이용하여 객체지향에서 자식이 부모 객체의 요소를 가져다 쓸 수 있는 상속 개념을 사용할 수 있다.

모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모 객체로 설정하는 [[Prototype]] 프로퍼티로 연결한다. `[[Prototype]] Link`

생성된 객체의 실제 부모 역활을 하는 건 생성자 자신이 아닌 생성자의 prototype 프로퍼티가 가리키는 프로토타입 객체이다.

```js
function Person(name){
    this.name = name;
}
var foo = new Person('foo');
```
Person() 생성자는 prototype 프로퍼티로 자신과 링크된 프로토타입 객체(Person.prototype)를 가리킨다.  

Person() 생성자로 생성된 객체 foo는,  
Person() 함수의 프로토타입 객체를 [[Prototype]]Link로 연결한다.  


### 프로토타입 체이닝
특정 객체의 프로퍼티나 메서드에 접근하려 할 때, 해당 객체에 접근하려고 하는 프로퍼티나 메서드가 없다면 [[Prototype]]Link를 따라 자신의 부모 방향으로 프로토타입 객체의 프로퍼티를 차례대로 검사하는 것을 말한다.  
즉, 프로토타입 체이닝을 통해 자신이 아닌 부모의 프로토타입 객체 프로퍼티에도 접근이 가능.  

객체 리터럴로 생성한 객체는 Object()라는 내장 생성자 함수로 생성된 것으로,  
Object가 갖고 있는 prototype 프로퍼티가 가리키는 프로토타입 객체인 Object.prototype 객체를 자신의 프로토타입 객체로 연결한다.


```js
//...위의 예제 코드...
console.log(foo.hasOwnProperty('name'));
```
위의 예제 아래 이런 코드를 넣는다면 프로토타입 체이닝에 따라서 hasOwnProperty 메서드를 찾게 된다.  
`foo > Person.prototype > Object.prototype.hasOwnProperty`


프로토타입 또한 자바스크립트 객체이다. 함수가 생성될 때 자신의 prototype 프로퍼티에 연결되는 프로토타입 객체는 기본적으로 constructor 프로퍼티만을 가진 객체이다.  
따라서 일반 객체처럼 동적으로 프로퍼티를 추가/삭제하는 것이 가능하다. 또한 변경된 프로퍼티는 프로토타입 체이닝에 항시 반영된다.

```js
function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

var func = function() {console.log('hello');}

Person.prototype.sayHello = func;
foo.sayHello(); // Hello
```
---

Prototype을 이용한 간단한 Todo list 예제

```js
var toDoObj = { //이것을 변경하면 변경사항이 항시 반영되어 나타난다.
  show: function () {
    var listLength = this.toDoList.length;
    for (var i = 0; i < listLength; i++) {
      console.log('- ', this.toDoList[i]);
    }
  }
  , add: function (task) {
    this.toDoList.push(task);
  }
  , del: function (index) {
    this.toDoList.splice(index, 1);
  }
}

function toDo() {
  this.toDoList = [];
}

toDo.prototype = toDoObj; 
//todo 함수 객체의 프로토타입에 toDoObj를 추가해 
//show,add,del을 프로퍼티를 사용할 수 있게 된다.
//class toDo extends toDoObj {...}

var allTask = new toDo();
//Object.setPrototypeOf(allTask,toDoObj);
//toDo.prototype을 통해 todo() 생성자를 이용해 allTask라는 객체를 만들기 전에
//todo.prototype = toDoObj를 하여 프로토타입을 추가하는 방법 대신에
//object.setPrototypeOf를 사용하여 
//allTask 객체에 toDoObj를 추가하는 방법 또한 있다.

console.log("task 1~5 추가");
allTask.add("task 1");
allTask.add("task 2");
allTask.add("task 3");
allTask.add("task 4");
allTask.add("task 5");
allTask.show();
console.log("\n2,3 제거");
allTask.del(1);
allTask.del(2);
allTask.show();
```


---
### reference
- https://github.com/jsonko/dailyJavaScript/blob/171161c67ddcfb8dad369bb826e73cb5f4f93588/PrototypeChaining.md
- https://github.com/KyusungDev/JSStudy/blob/5167fba10310d2b177aa26be43fb0d3b2b831f8b/docs/books/inside_javascript/02.md
- https://github.com/Lutece/sundayJavascript/blob/85d633268926261307ec18a3d4dad8c644e0c60f/inside_javascript/ch03/chapter03-04.md