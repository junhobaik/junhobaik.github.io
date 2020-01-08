---
title: AJAX, XMLHttpRequest와 Fetch 살펴보기
date: 2019-05-14
tags: 
  - javascript
  - ajax
  - ES6
keywords:
  - ajax
  - xhr
  - xmlhttprequest
---

AJAX(**A**synchronous**J**avaScript**A**nd**X**ML)는 비동기 자바스크립트를 뜻하는 것으로, 이제는 비동기적 자바스크립트 동작을 하는 기술들을 통들어서도 AJAX라고 부릅니다.

최초로 Microsoft의 Internet Explorer가 탑재하기 시작했고, AJAX가 주족받고 웹 기술에서 빠지지 않는 주요 기술로 부상한 것은 Google의 Gmail과 Map으로 부터라고 할 수 있습니다.

**이 포스트는 AJAX의 대표적인 API인  XMLHttpRequest와 Fetch의 기본적인 사용법과 속성들을 살펴봅니다.**

AJAX하면 예전에는 XMLHttpRequest API를 이용하는 것이 일반적이었으며,
그리고 불편함을 느낀 사람들이 jQuery를 통해 AJAX를 구현하기 시작했고 그 이후로 Fetch API가 ES2015 표준으로 등장하면서 이제는 일반적으로 Fetch API를 통해 구현하는 것이 일반적이 되었습니다. 이 포스트에서는 jQuery는 살펴보지 않겠습니다.

## XMLHttpRequest
 [MDN - XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)

우선 XMLHttpRequest로 AJAX를 구현하는 예를 보겠습니다.
`/src/data.json`를 불러와보는 코드입니다.
`/src/data.json`의 내용은 `{ "name": "Jhon", "age": 29 }` 입니다.


```js
(function() {
  // XHR 인스턴스 생성
  const httpRequest = new XMLHttpRequest();

  // httpRequest의 내장 함수 onreadystatechange를 이용해
  // 서버 상태의 변화에 따라 코드를 작성 할 수 있습니다.
  httpRequest.onreadystatechange = event => {
    console.log(
      `state : ${httpRequest.readyState} / status : ${httpRequest.status} / ${responseReady()}`
    );
  };

  // 서버로부터 응답을 받았는지와 정상적으로 처리된 응답인지를 검사하는 함수
  const responseReady = () => {
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
			// 응답을 정상적으로 받음
          return httpRequest.responseText;
        } else {
          return Error('request에 문제가 있습니다.');
        }
      } else {
        return Error('request의 상태가 complete(4)가 아닙니다.');
      }
    }
    catch( e ) {
      return Error('Caught Exception: ' + e.description);
    }
  }

  httpRequest.open("GET", "/src/data.json");
  httpRequest.send();
})();
```

코드를 살펴보겠습니다.

`const httpRequest = new XMLHttpRequest();` 
생성자를 이용해 XHR 객체 인스턴스를 생성합니다

`httpRequest.onreadystatechange` 
onreadystatechange 내장 함수를 이용하여 서버의 상태에 따른 코드를 작성합니다. 내부의 코드 console.log를 살펴보면 아래와 같습니다.

```js
console.log(
      `state : ${httpRequest.readyState} / status : ${httpRequest.status} / ${responseReady()}`
    );
```

여기서 readyState는 서버의 응답 상태를 나타내며 아래 목록의 값을 가질 수 있습니다.
- 0 (uninitialized) -(**request가 초기화되지 않음**)
- 1 (loading) -(**서버와의 연결이 성사됨**)
- 2 (loaded) -(**서버가 request를 받음**)
- 3 (interactive) -(**request(요청)을 처리하는 중**)
- 4 (complete) -(**request에 대한 처리가 끝났으며응답할 준비가 완료됨**)

status code에 대한 설명은 생략합니다.

그리고 responseReady() 함수의 반환값이 마지막으로 위치합니다.

여기까지가 요청에 따른 응답을 처리하는 코드를 작성한 부분이고

```js
  httpRequest.open("GET", "/src/data.json");
  httpRequest.send();
```

이 open, send 부분이 요청을 하는 부분입니다. 이 코드로 인해 지금까지 설명한 코드들이 실행되게됩니다.

open을 하면 위에서 설명한 state가 1번까지 실행되며
send를 하면 4번까지 작동하며 응답을 받을 수 있게 됩니다.

open 메소드의 파라미터
- 첫번째로 HTTP 요청 메소드(GET,  POST, HEAD)가 위치하게 됩니다.
- 두번째 파라미터는 요청 URL로 주소 또는 경로가 될 수 있습니다.
- 세번째 파라미터는 생략가능하며 요청이 비동기적으로 실행될지 여부를 결정합니다. 
	- default: true
	- false로 설정된 경우 동기적으로 작동합니다. (send()함수에서 서버로부터 응답이 올 때까지 기다림)

아래는 지금까지 코드의 콘솔 출력입니다.

```bash
< state : 1 / status : 0 / Error: request의 상태가 complete(4)가 아닙니다. 

< state : 2 / status : 200 / Error: request의 상태가 complete(4)가 아닙니다. 

< state : 3 / status : 200 / Error: request의 상태가 complete(4)가 아닙니다. 

< state : 4 / status : 200 / { "name": "Jhon", "age": 29 }
```

state가 4로 즉 `XMLHttpRequest.DONE`이며 complete 상태일때 응답을 받을 수 있는 상태가 되었고 응답을 받은 것을 확인 할 수 있습니다.

## Fetch
기존의 XHR 객체를 이용한 AJAX는 복잡하기도 하며 가독성이 떨어졌었습니다. 그래서 등장한 것이 Fetch API로 ES6(ES2015)에서 표준이 되었습니다.
Fetch는 반환값으로 Promise를 가집니다. 이 또한 ES6에 등장한 것으로 여기서는 이에 대해 자세히 설명하지 않고 기본적인 사용법을 기술합니다.

```js
fetch( resource, init )
  .then( callback )
  .catch( callback )
```

기본적으로 fetch는 이러한 구조를 가집니다.

fetch의 파라미터
- resource : 요청 주소, URL, 경로
- init (optional) : 설정 객체

아래는 설정 객체의 예
```js
const init = {
  method: "POST",
	body: JSON.stringify(data),
	headers: {
    "Content-Type": "application/json"
  },
	credentials : "same-origin"
}
```
설정 객체의 요소들은 아래 링크에서 확인할 수 있습니다.
[fetch() #parameters | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)

이제 간단한 예제를 살펴보겠습니다.

```js
// data.json : {name: "Jhon", age: 29}

fetch('/src/data.json')
  .then(response => {
    // 첫번째 then
    if(response.status === 200){
      return response.json()
    } else {
      console.log(response.statusText);
    }
  })
  .then(jsonData => {
    // 두번째 then
    console.log(jsonData); // Object {name: "Jhon", age: 29}
  })
  .catch(err => {
    console.log(err)
  })
```

fetch에 요청할 경로를 적고 필요의 경우 설정 객체 또한 전달합니다.
그 결과로 Response 인스턴스가 반환됩니다. 첫번째 then에서 response가 그것입니다. Response 객체의 속성들을 살펴보면 상태를 나타내는 status(정수), statusText(문자)가 있고 요청에 대한 헤더 정보를 담고 있는 header, 그리고 응답 내용을 담고 있는 body가 있습니다.

위의 코드를 살펴보면 fetch 요청 후,
첫번째 then에서 상태 코드가 200일 경우 response.json()을 리턴하며, 상태 코드가 다를 경우에는 상태 문자를 출력합니다.
두번째 then으로 넘겨지게 되면 이제 첫번째 then에서 넘겨받은 값을 출력하게 됩니다.

조금 더 자세히 살펴보면
첫번째 then에서 response.json()을 바로 출력하지 않고 다음 then으로 리턴하여 넘겨준 것은 response.json()은 기대하는 실제 값이 아닌 Promise를 가지고 있기 때문입니다. 이 과정을 살펴보면 아래와 같습니다.

Response 객체의 body 값을 추출해내기 위해서는 타입에 따라 아래와 같은 메소드를 사용해야 합니다.
- arrayBuffer()
- blob()
- json()
- text()
- formData()

위 메소드들은 모두 Promise를 반환합니다. 그리고 이 Promise가 resolve되어 다음 then에서는 실제 값을 다룰 수 있게 됩니다.

여기까지가 기본적인 내용이며 실제 사용 할 때는 필요에 따라 심화로 init object, Header, Request에 대해서 알아보고 사용하는 것이 좋습니다.
---- 
References
- [Ajax 시작하기 - 웹 개발자 안내서 | MDN](https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started)
- [MDN - XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 
- [WindowOrWorkerGlobalScope.fetch() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
- [정말 멋진 Fetch API! | Mozilla 웹 기술 블로그](http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/)
