# this

```js
var user1 = {
  name: 'user1',
  say: function(){ console.log(this.name, "-", this) }
}
user1.say(); //user1 - Object {name: "user1", say: function}
/* user1의 this는 해당 user1 object를 가리킨다 */

var user = user1.say;
user(); //undefined - Window {...}
/* user의 this는 window를 가리킨다, window.user()로 window에서 호출했기 때문 */

var user2 = {
  name: 'user2',
  say: user1.say
}
user2.say(); //user2 - Object {name: "user2", say: function}
/* user2의 say가 user1의 say의 내용이지만 this는 호출된 해당 user2 object이다 */

user2.say.call(user1); //user1 - Object {name: "user1", say: function}
/* call과 apply 함수는 this를 자동적으로 만들어진 this가 아닌 지정한 this를 가리키도록 지정하는 것 */
```



**call(), apply()**

두 함수는 function 객체의 기본 내장 함수이다.
일반적으로 함수가 호출될 때는 내부적으로 call() 함수로 변형되어서 처리된다.
call과 apply 함수는 this를 자동적으로 만들어진 this가 아닌 지정한 this를 가리키도록 지정하는 것으로 첫번째 인자로 this를 지정하고 두번째 인자로는 함수의 인자를 지정한다.
call은 함수의 인자를 ','로 여러개를 넘기고 apply는 배열 한개로 넘긴다.



---



#### this의 이해

일반적인 객체지향 언어와 달리 자바스크립트에서의 this는 조금 다르게 동작하는 경우가 많다.

일반적인 상황에서 this가 어떻게 결정되는지 알려면 먼저 함수를 호출하는 방법에 대해 살펴봐야한다.



자바스크립트에서 함수가 호출되는 방법은 다음 네가지가 주요하다.

1. 일반 함수로의 호출
   - ```js
     function hello(name){
       alert('hello', name);
     }
     hello('jhon');
     ```

2. 멤버함수로의 호출

   - ```js
     var hello = {
       say : function(){
         alert('hello');
       }
     }
     hello.say();
     ```

3. call() 함수를 통한 호출

   - ```js
     function hello(name){
       alert('hello', name);
     }
     hello.call(undefined, "jhon");
     ```

4. apply() 함수를 통한 호출

   -  ```js
      function hello(name){
        alert('hello', name);
      }
      hello.apply(undefined, ["jhon"]);
      ```




```js
function whatsThis(){
  return this.toString();
}
var user = {
  what: whatsThis,
  toString: function(){
    return "[objcet user]"
  }
}

whatsThis(); 
//일반함수 "[object Window]"
//글로벌 객체 window가 this로 설정되어있다.
//일반적으로 함수가 호출될때는 내부적으로 call()함수로 변형되어 처리된다.
//이때 call의 첫번째 인자는 undefined로 넘겨주어 this의 기본값으로 window가 되게 된다.

user.what(); 
//멤버함수 "[objcet user]"
//이것또한 내부적으로 call함수로 변형되어 처리된다.
//이때 call함수의 첫번째 인자로는 멤버함수를 보유한 객체(user)가 된다.
//따라서 this는 user가 된다. 
//같은 함수라도 멤버함수가 호출되는 방법에 따라 this또한 변경되는 것이다.

whatsThis.call(); 
//call이용, 인자 없음 "[object Window]"

whatsThis.apply(user); 
//apply이용, 첫번째 인자 user"[objcet user]"

user.what.call(undefined) 
//멤버함수, call이용, 첫번째 인자 undefined "[object Window]"

user.what.call(user); 
//멤버함수, call이용, 첫번째 인자 user "[objcet user]"
```



**this는 함수나 스코프를 기반으로 결정되는 것이 나닌, 호출 방법에 따라 변경된다.**

**콜백함수를 인자로 넘기는 등의 비동기적 방식의 호출이 많은 자바스크립트에서는 중요하게 생각해야한다.**