---
title: 자바스크립트에서 세미콜론(;)을 안써도 될까?
date: 2017-10-17
tags: javascript
category: javascript
---



타 언어를 사용하다가(파이썬 제외...) 자바스크립트를 처음 접한 사람에게는 
세미콜론을 쓰지 않고도 오류가 나지 않는 것을 보고 꽤나 놀랐을 것이다.



"자바스크립트에서는 세미콜론을 쓰지 않아도 오류가 나지 않는데 
그렇다면 세미콜론을 쓰지 않고 짧게 작성하는게 좋지" 라는 사람도 있다.

어느쪽이 바람직 한 것일까...?



우선 자바스크립트에서 세미콜론(;)을 쓰지 않아도 오류가 나지 않는 이유는
**ASI (Automatic Semicolon Insertion)**라는 것 때문이다.

이것을 통해 엔진이 자동으로 ; 을 삽입해 주는 것이다.



중요한 점은 개행, 즉 **새 줄(Line Break)에만 적용**된다는 점이다.



아래 경우를 보자

```javascript
var i = 0;
do {
    console.log(i);
} while(i===10)
i;
```

do-while의 경우 while끝에 ;을 붙여야 문법적으로 맞는데 깜박하더라도 ASI가 ;을 삽입해준다.

```javascript
function foo(){
    if(true) return
    console.log("foo");
}
```

위의 경우도 return 뒤에 ;을 붙여줄 것이다. 
이 경우에는 console.log가 실행되게 할지 말지 의도한게 어떤 것인지에 따라 
유용하게 된 경우 또는 실수에서 이어진 문제점으로 해석 될 수도 있다.



세미콜론(;)을 쓰지 않더라도 유용한 ASI가 존재함에 따라 대부분은 문제가 없을 것이다.
그러나 초보 개발자의 실수라던가 또는 의도하지 않은 ;의 삽입으로 곤혹을 겪을 가능성이 어찌되었건 존재한다.



```
  "ASI(Automatic Semicolon Insertion) is an error correction procedure. 
  If you start to code as if it were a universal significant-newline rule, 
  you will get into trouble." —Brendan Eich
```

위는 자바스크립트의 창시자인 브렌던 아이크가 한 말이다.
여기서 ASI를 에러 정정 프로시저라고 말하며 이것을 보편적인 것처럼 코딩한다면 문제에 당도할 것이라고 말하고 있다.



자바스크립트에서 세미콜론을 쓰는가 마는가는,
공백은 탭인가 스패이스인가와 같은 논쟁거리가 아니라고 생각한다.
ASI는 에러 정정을 목적으로 만들어졌고, 아무리 적은 가능성이라도 오류가 날 가능성이 있다면,
글쓴이 본인은 ; 을 쓰는 것이 맞다고 생각한다.