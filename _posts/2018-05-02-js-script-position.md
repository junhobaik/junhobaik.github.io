---
title: HTML에서 script태그는 어디에 위치해야 할까?
date: 2018-05-03 00:15:00 +0900
tags:
  - javascript
  - html
keywords:
  - html script 위치
---

처음 html, javascript를 공부 할 때는 script 태그는 head 태그에 위치하게끔 하는 코드나,  
또는 body 태그의 어디에 위치하건 그 위치에 대해 별 의미를 두지 않는 코드들이 많았다.

하지만 지금은 항상 스크립트는 body태그의 최하단에 넣는 것이 습관화되었고 그 이유도 알고 있다.  
그런데 이제와서 이 글을 쓰는 이유는 **script 태그의 async / defer**를 공부하게 되면서 새로 정리해보고자 쓰게 되었다.

## 브라우저의 동작과 script 위치의 2가지 이유

HTML에서 script 태그가 body 태그 안의 최하단에 위치해야 하는 이유는 브라우저의 동작 방식과 연관이 있다.

1. HTML을 읽기 시작한다.
2. HTML을 파싱한다 (parsing: 컴퓨터가 읽을 수 있는 코드로 바꾸는 작업)
3. DOM 트리 생성.
4. Render 트리가 생성 (DOM tree + CSS의 CSSOM 트리 결합)
5. Display(브라우저)에 표시된다.

여기서 중요하게 봐야할 구간은 1~2의 과정이다.

HTML을 읽어 내려가는 과정에서 script 요소를 만나면 파싱을 중단,  
중단 된 상태에서 자바스크립트 코드(파일)을 로드 후 자바스크립트 코드를 파싱한다.  
그리고 다시 HTML 파싱이 계속된다.

결론적으로 HTML을 읽는 과정에서 자바스크립트 로드와 파싱을 위해서 중단되는 시점이 생기고,
그에 따라 그 만큼 Display에 표시되는 것이 지연된다.

**위의 경우가 body태그 최하단에 위치해야 하는 이유 1번째이다.**

2번째 이유는, **HTML 파싱이 끝나고 DOM 트리가 생기기 전 자바스크립트가 DOM 조작을 할 경우 에러 발생**이 할 수 있다는 것이다.

```javascript
const appEl = document.querySelector(.app);
```

우리는 위와 같이 DOM에 관한 조작을 무수히 할 것인데 DOM 트리가 렌더링 되기 전이라면 `appEl`은 `undefined`이다. 이러한 오류점이 발생한 이유를 모르거나, 디버깅을 못한다면 이를 해결하는데 꽤나 애먹을 것이다.

이렇게 body 태그 최하단에 위치해야하는 이유를 알아봤고 다음으로는 이러한 이유를 방지하기 위해서 사용하는 **script 태그의 async / defer 속성**을 알아보자.

## script 태그의 async / defer 속성

기본적으로 script 태그는 위에서 작성한 브라우저의 동작 방식대로 불러진다.  
하지만 async / defer 속성을 사용함으로 다르게 script 태그를 불러올 수 있게 된다.

```html
<script async src="index.js"></script>
<script defer src="index.js"></script>
```

async / defer 속성을 사용하면 **HTML 파싱과 동시에 스크립트 로드**가 이루어진다.

그 후에,  
**async**의 경우에는 **스크립트 로드가 완료되는 즉시 스크립트가 실행**된다.  
**defer**의 경우에는 **HTML 파싱이 모두 끝난 뒤 스크립트가 실행**된다

결론적으로,  

**async / defer**를 사용함으로 HTML 파싱과 스크립트 로드가 동시에 진행되므로 **HTML 파싱이 완료되는 시간을 줄일 수 있다**  

**async**는 파싱 완료 전에 스크립트 로드 후 실행이 되므로 위에서 body태그 최하단에 script 태그가 위치해야하는 2번째 이유에 적합하지 않다.  

**defer**는 파싱이 완료 된 후 스크립트가 실행되므로 2가지 이유 전부에 적합하다.

---

## References
- [PoiemaWeb](http://poiemaweb.com/js-syntax-basics)
