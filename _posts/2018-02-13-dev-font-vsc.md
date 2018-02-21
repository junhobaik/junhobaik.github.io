---
title: 개발자 글꼴 Hack, 그리고 VSCode 글꼴 설정하기
date: 2018-02-13 23:51:00 +0900
tags:
  - VSCode
---

지금까지는 주로 Consolas를 기본으로 사용해왔는데 더 좋아보이는 글꼴을 찾았고 지금 상당히 만족스럽게 사용하고 있다. 바로 아래서 소개 할 'Hack'이라는 글꼴이다.

## Hack 

- [글꼴 샘플](https://source-foundry.github.io/Hack/font-specimen.html)
- [글꼴 써보기](https://sourcefoundry.org/hack/playground.html)
- [글꼴 다운로드](https://sourcefoundry.org/hack/#download)

이름에서도 알 수 있듯이 오로지 개발을 위해 만들어진 글꼴이다. 

개발자를 위한 글꼴의 조건에는 여러개가 있다, 아래는 대표적인 조건이다.

햇갈릴 수 있는 글자의 구분
: 예) i l I / 0 O / ; :

고정폭일 것
: 일반적인 글꼴은 가변폭이 많다. 대표적으로 윈도우의 '굴림'이나 '돋움'이 해당한다.  
코딩할 땐 공백과 글자 수에 따른 일정한 넓이와 그에 따른 여러 라인을 비교할 수 있도록 고정폭 글꼴의 사용이 필요하다.

Hack은 이러한 조건들을 만족하는 글꼴이다.

## 글꼴 설정하기

### Mac

'서체 관리자' 앱을 실행하여 다운받은 글꼴을 추가한다.  
앱을 못찾겠으면 Spotlight 검색을 통해 쉽게 찾을 수 있다.

### Visual Studio Code

**'Code - 기본 설정'**에서 아래 설정을 추가한다.
```json
{
  "editor.fontFamily": "Hack"
}
```
아래와 같이 여러 글꼴을 설정할 수도 있다,  
만약 첫번째로 설정한 글꼴가 어떠한 이유로 적용되지 않는 경우 그 다음 글꼴이 적용된다.
```json
{
  "editor.fontFamily": "Hack, Menlo, Monaco, 'Courier New', monospace"
}
```
