---
title: Gatsby로 블로그 만들기
date: 2018-11-14
tags:
  - gatsby
  - blog
keywords:
  - gatsby blog
  - gatsby 블로그
---

## 서론...

일단 Gatsby는 Jekyll과 같은 **정적 페이지 생성 프레임워크**이다.

(본인이 생각하는) 장점은 React + Webpack 으로 되어있다는 점.

Jekyll은 익숙치 않아 테마를 사용하고 개인화하는데 불편함이 있었는데 익숙한 React로 되어있어 제작하는데 어렵지 않게 할 수 있었다.  

또한 Gatsby가 제공하는 유용한 plugin(Webpack)들이 많아 쉽게 만들 수 있는 점도 있다.

Jekyll과 비교해 단점이라면 번들링 과정을 한번 거쳐서 배포가 된다는 점 (어떤 면에선 장점)  
그리고 Jekyll에 비해서는 사용자가 부족해 정보나 테마 등이 부족하다는 점이 있다.

저번 Jekyll 블로그를 운영할 때는 테마를 받아 조금의 수정을 거쳐 사용했었는데 지금은 완전 처음부터 제작을 하였다.  
지금 보고 있는 이 블로그이다. 아직 추가할 기능이 많지만 필요한 기능은 구현을 마쳤고 추가는 천천히 할 생각이다.

아래는 Github Page에 Gatsby 블로그를 시작하는 두가지 방법을 기술한다.  
원하는 방법으로 시작하면 된다.

1. Gatsby Starter로 Jekyll의 테마를 이용하듯 다른사람이 제작한 블로그 형식으로 시작하는 방법
2. 지금 보고있는 블로그를 자신의 것으로 개인화하여 사용하기

## 1. Gatsby Starter를 이용해 시작하기

우선 `gatsby-cli`를 글로벌 설치해준다.

```shell
$ npm install --global gatsby-cli
```

이제 `create-react-app`을 사용하듯 비슷한 사용법으로 사용이 가능하다.

`$ gatsby new [SITE_DIRECTORY]` 의 명령으로 빈 프로젝트로 시작할 수 있다.

하지만 여기서는 스타터를 이용하여 시작하는 방법을 소개하니 위 명령어가 아닌 아래 명령어를 이용하자

```
$ gatsby new [SITE_DIRECTORY] [URL_OF_STARTER_GITHUB_REPO]
```

위 명령에서 `[SITE_DIRECTORY]`에는 자신의 프로젝트 이름(폴더명)을 입력하고 `[URL_OF_STARTER_GITHUB_REPO]`에는 사용할 스타터의 Github 리포지토리 주소를 적으면 된다.

어떤 스타터를 할 것인지는 아래에서 찾아서 확인해보자

1. [Gatsby Starters (Official)][2]
2. [Gatsby Starters][1]

1번의 오피셜 스타터보다는 2번의 다른 사람이 제작한 것을 사용하는 것을 추천한다.

로컬 개발 서버는 `$ gatsby start` 를 통해 열 수 있다.

Github Page를 이용해 배포하는데는 여러가지 방법이 있고 스타터마다 권장하는 방식이 다를 수 있으니 해당 스타터 깃헙 페이지의 사용법을 확인하자.

## 2. 현재 보고있는 블로그로 시작하기

지금 보고있는 이 블로그는 다른 사용자들이 사용할 수 있도록 개인화가 가능하도록 테마 형식으로 제작되어 쉽게 커스터마이징하여 사용할 수 있다.

간단히 블로그에 대해 설명하면,

지금은 홈, 태그, 검색의 세가지 메뉴로 구성되어있으며 포스트를 태그로 관리하는 형식이다. 차후 카테고리 방식도 업데이트 예정이다.

아래와 같은 기술 스택으로 제작되었으며 웹표준, 검색 최적화(SEO)를 준수하고 있고 Google Analytics를 사용할 수 있다.

- Gatsby
- React
- Webpack
- SASS (SCSS)
- typography.js, Google Fonts
- Google Analytics

또한 Github Page 배포를 위해서 `gh-pages` 모듈을 이용 master 브랜치에 배포되도록 설정하였다.  
작업은 기본적으로 'develop' 브랜치에서 이루어지고 master 브랜치는 배포되는 파일만 위치하게 된다.  
그래서 해당 프로젝트를 clone 할 때도 develop 브랜치를 클론하게 된다.

---

우선 아래 명령어로 clone을 하자.  
[SITE_DIRECTORY]에는 자신의 프로젝트 이름을 적는다.

```shell
$ git clone -b develop https://github.com/junhobaik/junhobaik.github.io.git [SITE_DIRECTORY]
$ npm install
```

여기까지 했다면 개인화 과정을 하기 전에 한번 `$ npm start`를 통해 제대로 실행되는지 'localhost:8000'에 들어가 확인해본다.

다음으로 아래 두가지를 알아두고 시작하면 된다.

1. 개인화 방법
2. 포스트(마크다운) 작성법
3. 배포 방법

위 두가지와 자세한 가이드는 Documents에서 확인해 볼 수 있다.

먼저 Get Started를 확인하고 documents를 참고하는 것을 추천한다.

- [Get Started 바로가기][4]
- [Documents 바로가기][3]


[1]: https://www.gatsbyjs.org/starters/?v=2 "gatsby starter" 
[2]: https://www.gatsbyjs.org/docs/starters/#starters "gatsby starter official"
[3]: https://github.com/junhobaik/junhobaik.github.io/wiki/Documents "documents"
[4]: https://github.com/junhobaik/junhobaik.github.io#get-started "get started"
