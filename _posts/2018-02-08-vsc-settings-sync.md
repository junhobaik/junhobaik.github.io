---
title: Visual Studio Code 설정 기기 간 동기화하기
date: 2018-02-08 21:08:00 +0900
---

Visual Studio Code를 쓰기 시작하면서 데스크탑과 랩탑간 설정 동기화가 필요해 방법을 찾다가  
확장 플러그인 **Settings Sync**를 사용하여 하는 방법을 발견했다.

---

## 1. 확장 플러그인 'Settings Sync' 설치

https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync


## 2. GitHub account token 발급받기

'Settings Sync'는 Github의 gist 토큰을 사용하여 설정 업로드, 다운로드가 이뤄진다.

토큰을 발급받기 위해 Github에서 하단의 메뉴로 진입한다.

**Settings > Developer settings > Personal access tokens > Generate New Token**

나타나는 메뉴에서 **gist**에 체크 후 토큰을 생성한다.  
이후 이 토큰을 이용하여 설정 업로드, 다운로드가 이뤄진다.

## 3. 설정 업로드 / 다운로드

단축키는 아래와 같다.
1. Upload Key : Shift + Alt + U
2. Download Key : Shift + Alt + D

단축키를 통해 나타나는 입력칸에 토큰을 입력하면 설정 업로드, 다운로드가 이뤄지게 된다.
