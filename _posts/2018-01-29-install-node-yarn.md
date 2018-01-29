---
title: 간단하게 Node.js, npm, yarn 설치하기
date: 2018-01-29 23:55:00 +0900
tags:
  - node
  - npm
  - yarn
---

MacOS 재설치 후 기본적인 설정을 하면서 **간단히** 정리해본 Node.js, npm, yarn 설치 과정

## Node, NPM 설치
Node를 설치하기에 가장 간단하고 좋은 방법이라 생각하는 HomeBrew를 통한 설치를 해보겠습니다.  
좋은 방법이라는 이유는 업데이트, 제거가 다른 설치 방법에 비해 비교적 쉽기 때문입니다.

아래 명령어를 통해 설치를 진행합니다.
```
$ brew install node
```

brew 명령어를 위한 HomeBrew 패키지 관리자 미설치시 아래 명령어를 통해 설치 필요  
`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
{: .notice--warning}

설치 확인 & 버전 확인
```
$ node -v
$ npm -v
```

## yarn 설치
yarn 설치시 위에서 Node는 설치하였으니 node를 빼고 설치하도록 합니다.
```
$ brew install yarn --without-node
```

설치 확인 & 버전 확인
```
$ yarn -v
```
## 업데이트 & 언인스톨 방법

차후 업데이트 또는 언인스톨이 필요할 때 아래와 같은 방법으로 가능합니다.

### 업데이트
```
  우선 HomeBrew를 최신버전으로 업데이트 합니다.
$ brew update

  원하는 업데이트를 수행합니다.
$ brew upgrade node
$ brew upgrade yarn
```

### 언인스톨
```
$ brew uninstall node
$ brew uninstall yarn
```
