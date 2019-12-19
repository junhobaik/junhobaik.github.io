---
title: 개발자 글꼴 Hack, 그리고 VSCode 글꼴 설정하기
date: 2018-02-13 23:51:00 +0900
tags:
  - VSCode
keywords:
  - 개발자 폰트
  - 개발자 글꼴
  - vscode 폰트
  - vscode font
  - vscode 글꼴
---

코딩용 폰트는 여러가지가 있다.  
JAVA 사용자가 많이들 선호하는 Consolas나 요즘 뜨고 있는 fira code라던가 말이다.  
많은 폰트를 써봤지만 현재는 _Hack_ 폰트를 사용하고 있다. 본인 생각에 튀는 부분 없이 심플하고 가독성이 좋은 것 같아 사용하고 있다.

## Hack

- [글꼴 샘플](https://source-foundry.github.io/Hack/font-specimen.html)
- [글꼴 써보기](https://sourcefoundry.org/hack/playground.html)
- [글꼴 다운로드](https://sourcefoundry.org/hack/#download)

이름에서도 알 수 있듯이 오로지 개발을 위해 만들어진 글꼴이다. 

개발자를 위한 글꼴의 조건에는 여러개가 있다, 아래는 대표적인 조건이다.

**햇갈릴 수 있는 글자의 구분**
: 예) i l I / 0 O / ; :

**고정폭일 것**
: 일반적인 글꼴은 가변폭이 많다. 대표적으로 윈도우의 '굴림'이나 '돋움'이 해당한다.  
코딩할 땐 공백과 글자 수에 따른 일정한 넓이와 그에 따른 여러 라인을 비교할 수 있도록 고정폭 글꼴의 사용이 필요하다.

Hack은 이러한 조건들을 만족하는 글꼴이다.

## 글꼴 설정하기

### Mac

'서체 관리자' 앱을 실행하여 다운받은 글꼴을 추가한다.  
앱을 못찾겠으면 Spotlight 검색을 통해 쉽게 찾을 수 있다.

### Visual Studio Code

**'Code - 기본 설정 - 설정'**에 진입한다.

최신 버전의 VSCode에서는 GUI 방식 설정창이 뜨게 된다.

여기서 `Editor: Font Family` 항목을 찾아 입력칸의 첫번째에 Hack을 추가해주면 된다.

`Hack, Menlo, Monaco, 'Courier New', monospace`와 같이 말이다.

위와 같이 글꼴을 여러개 나열 할 경우,  
만약 첫번째로 설정한 글꼴가 어떠한 이유로 적용되지 않는 경우 그 다음 글꼴이 적용된다.

혹시나 GUI 방식의 설정창이 뜨지 않고 `settings.json` 파일이 뜨거나 설정창에서 우측 상단의 `{}` 버튼을 누를 경우 진입한 설정 파일에서는 아래와 같이 설정을 추가하거나 수정해주면 된다.

```json
{
  "editor.fontFamily": "Hack, Menlo, Monaco, 'Courier New', monospace"
}
```
