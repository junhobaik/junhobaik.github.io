---
title: MongoDB 설치하기 (mac, homebrew)
date: 2019-07-20
tags:
  - mongodb
keywords: 
  - mongodb 설치
  - 몽고 설치
  - 몽고디비 설치
  - mongodb
  - mongo 설치
  - mongodb mac
  - mongodb install
  - mongodb brew
  - mongodb homebrew
---

MongoDB를 본격적으로 사용하기 앞서,
설치와 실행 그리고 추가적인 툴의 설치와 사용까지 기본적으로 알아보겠습니다.

macOS / HomeBrew의 설치 환경에서 진행됩니다.

## Install MongoDB

Tap the MongoDB Homebrew Tap
```bash
$ brew tap mongodb/brew
```

Install MongoDB
```bash
$ brew install mongodb-community@4.0
```

Run MongoDB
```bash
$ mongod --config /usr/local/etc/mongod.conf

$ brew services start mongodb-community@4.0
```

> `brew services start mongodb-community@4.0`의 과정을 거치지 않는다면 mongo shell을 이용하기 전 `mongod`명령을 통해 mongo 서버를 키는 과정이 필요하다.

Connect and Use MongoDB
```bash
$ mongo
```

## 설치 없이 실습하기

[https://mws.mongodb.com/](https://mws.mongodb.com/)

위 주소로 접속하여 스터디 용도로 MongoDB 가상환경 내에서 사용해 볼 수 있다.
reset 버튼을 누르거나 오랜 시간 작업이 없거나, 웹페이지를 새로고침하면 데이터가 날아가니 주의할 것.
