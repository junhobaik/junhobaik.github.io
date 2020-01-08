---
title: Borderless 테마로 Gatsby 블로그 만들기
date: 2019-12-30 06:02:00
tag:
  - blog
  - gatsby
keywords:
  - gatsby blog
  - gatsby 블로그 만들기
  - gatsby 블로그 댓글
  - gatsby 블로그 테마
---

**지금 이 글을 보고 있는 블로그는 Borderless 테마를 사용하고 있는 블로그입니다.**

_Gatsby를 이용해 제작되었으며 Gatsby에 대한 간략한 설명은 이전 글([Gatsby로 블로그 만들기](/create-gatsby-blog))에서 확인 할 수 있습니다._

**[Borderless 블로그 - 소개](/develop-blog-v3_2)**에서 borderless 테마의 기능과 특징을 확인하세요.

이 블로그와 같은 블로그를 만들고 싶다면 이 글을 간략하게 참고하시고,  
**[Documents](<https://github.com/junhobaik/junhobaik.github.io/wiki/Document-(Borderless)>)**에서 자세한 방법을 참고하세요.

---

_\* 아래 설명과 문서는 Github Pages에 배포되는 것을 기준으로 설명합니다._  
_\* 이 글에서는 매우 간략하게 방법을 기술하고 있습니다. 자세한 것은 문서에서 확인하세요_

## Install

해당 블로그로 시작하기 위한 방법은 두가지가 있습니다.

1. 테마 Repository Fork 후 사용
1. 테마 Repository Clone 후 사용

### 1. **Fork**로 시작하기

- 해당 Repository를 Fork 한 후,

1. Repository의 이름을 "**username**.github.io"로 변경합니다.
1. `Setting > Branches - Default branch`에서 기본 Branch를 변경합니다. **develop**를 선택하고 Update 버튼을 눌러 진행하세요.
1. 이제 본인의 Repository를 Clone 합니다.
1. `$ npm i` 명령어로 패키지 설치
1. `$ npm start` 명령어로 개발 서버 시작  
   "localhost:8000"에서 확인할 수 있습니다.

### 2. **Clone**으로 시작하기

```shell
$ git clone -b develop https://github.com/junhobaik/junhobaik.github.io.git [SITE_DIRECTORY]
$ npm install
```

위의 과정을 통해 develop 브랜치를 기본으로 해당 저장소를 클론하고 필요한 패키지를 설치합니다.

```shell
$ npm start
```

개발 서버를 실행하며 localhost:8000에서 확인할 수 있습니다.

## Basic Settings

`./config.js` 파일을 개인에 맞춰 수정합니다.  
문자열은 ''로 비워두어 해당 기능을 비활성화 할 수 있습니다. (Site MetaData는 필수로 작성)

아래는 예제입니다.

```javascript
module.exports = {
  /** Site MetaData (Required all)*/
  title: `Dev.White`,
  description: `Junho Baik's Development Blog`,
  author: `Junho Baik`,
  siteUrl: 'https://junhobaik.github.io',

  /** Header */
  profileImageFileName: 'profile.png',

  /** Home > Bio information*/
  comment: 'Jr. Web Front-end Developer. / javascript, react ...',
  name: 'Junho Baik',
  company: '',
  location: 'Korea',
  email: 'junhobaik@gmail.com',
  website: 'https://junhobaik.github.io',
  linkedin: '',
  facebook: '',
  instagram: 'https://www.instagram.com/junhobaik',
  github: 'https://github.com/junhobaik',

  /** Post */
  enablePostOfContents: true,
  disqusShortname: 'junhobaik',

  /** Optional */
  googleAnalytics: 'UA-123123123-0',
  googleAdsenseClient: 'ca-pub-5001380215831339',
  googleAdsenseSlot: '5214956675',
};
```

## Writing Posts

`./posts`에 마크다운 파일을 위치시켜 게시물을 만들 수 있습니다.

`./drafts`에 마크다운 파일을 위치시켜 임시 게시물을 만들 수 있습니다.  
(개발 환경에서만 표시, 배포시 표시되지 않는 게시물)

### Markdown YAML Front matter

마크다운 상단에 아래와 같은 형식으로 게시물 정보를 입력합니다. 여기는 제목과 날짜가 필수로 들어가며 추가적으로 태그와 키워드를 넣을 수 있습니다.  
그 후 하단에는 게시물의 내용을 입력합니다.
자세한 작성법은 문서의 Markdown YAML Front matter란을 확인하세요.

```
---
title: title here...
date: 2018-01-01
tags:
  - javascript
  - ES6
keywords:
  - keyword1
  - keyword2
---

... Content here ...

```

## Deploy

```
$ npm run deploy
```

위의 명령어로 배포가 시작됩니다. master 브랜치로 commit이 자동으로 이루어지며,
반영되기까지는 수십초 정도, 때로는 최대 수분의 시간이 소요됩니다.

이제 본인의 주소로 들어가 확인할 수 있습니다.

---

더 자세한 Borderless 테마 사용법은 [Documents](<https://github.com/junhobaik/junhobaik.github.io/wiki/Document-(Borderless)>)를 참고하세요.
