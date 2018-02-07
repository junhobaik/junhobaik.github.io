---
title: VSCode(Visual Studio Code)에서 React JSX 자동완성 기능 활성화하기
date: 2018-02-07 15:40:00 +0900
toc: false
---

비주얼 스튜디오 코드 사용하면서 React를 쓰기에는 처음엔 약간 불편하다.  
제일 처음 맞은 불편함이 JSX에서 emmet 자동완성이 작동 안되는 것이다.  
해결 방법으로 여러 방법이 있었지만 제일 간단한 방법은 아래와 같다.

기본 설정에서 아래 코드를 추가해준다

```json
{
    "files.associations": {
        "*.js": "javascriptreact"
    }
}
```
