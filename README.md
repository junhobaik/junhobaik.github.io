# Junhobaik.github.io

**Blog Version 3 제작중**

**Blog Version 3 가이드 문서 작성중**

---

**[https://junhobaik.github.io](https://junhobaik.github.io)**

Gatsby로 제작한 블로그 테마 "Borderless" 입니다.

커스터마이징하여 자신의 블로그로 사용할 수 있습니다.

~~[Document (Version 3, Borderless)](#)를 참고하세요.~~

<br/>
<br/>

이전에 운영하던 Version 2를 사용하고 싶다면,  
[Document (Version 2)](<https://github.com/junhobaik/junhobaik.github.io/wiki/Document-(Version-2)>)를 참고하세요.

[Blog Version 2 DEMO WebSite](https://priceless-darwin-0a5ad6.netlify.com/)

---

[Gatsby](https://www.gatsbyjs.org/)를 이용해 제작한 블로그.  
'Gatsby CLI'를 통해 빈 프로젝트로 구현을 시작하였습니다.

**Built with:**

- Gatsby
- React
- Redux
- TypeScript
- SASS (SCSS)
- Typography.js
- Google Fonts
- Google Analytics
- Google AdSense
- ...

---

# "Borderless" Documents (ko)

- [Install](#install)
- [Basic Settings](#basic-settings)
- [Writing posts](#writing-posts)
  - [Markdown YAML Front matter](#markdown-yaml-front-matter)
- [Deploy](#deploy)

## "Borderless", Gatsby Blog Starter(Theme)

Gatsby로 제작된 정적 웹사이트,  
블로그 Borderless 테마입니다.

**[Borderless DEMO WebSite](https://junhobaik.github.io)**

- 선(Border)이 없는, 색이 최소화된 심플한 디자인
- 마크다운 게시물 작성 (Markdown + emoji, ktex)
- 검색 엔진 최적화 (SEO)
- 사파리 브라우저 등 게시물내 읽기 모드(Reader Mode) 지원
- Google Analytics 지원
- Google Adsense 지원
- Disqus 댓글 기능 지원

## Install

해당 블로그로 시작하기 위한 방법은 두가지가 있습니다.

1. 해당 Repository Fork 후 사용
2. 해당 Repository Clone 후 사용

1번 방법을 추천합니다.

### **Fork**로 시작하기

//

### **Clone**으로 시작하기

```shell
$ git clone -b develop https://github.com/junhobaik/junhobaik.github.io.git [SITE_DIRECTORY]
$ npm install
```

```shell
$ npm start
```

//

## Basic Settings

### Modify `./config.js`

`config.js`의 예제

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

| 설정                                             | 타입                         | 설명                                                                                                                                                              |
| ------------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                                            | (필수) String                | 사이트의 제목이며, 각 페이지들의 제목에 들어갈 수 있고 Header에서의 Title입니다.                                                                                  |
| description                                      | (필수) String                | 사이트의 설명                                                                                                                                                     |
| author                                           | (필수) String                | 사이트의 저자                                                                                                                                                     |
| siteUrl                                          | (필수) String                | 해당 웹사이트의 주소를 입력. 배포 시에 해당 주소가 없으면 많은 오류가 발생할 수 있습니다.                                                                         |
| profileImageFileName                             | String                       | `./src/images`경로에 프로필 사진을 위치한 후 해당 이미지의 파일명을 입력합니다. Header의 Title 옆 이미지에 들어가며 입력값이 없을때는 랜덤한 이미지를 보여줍니다. |
| comment, name, company, location, email, website | String                       | Home(index)페이지에서 좌측에 보일 개인정보입니다. 입력하지 않을 시 해당 항목을 출력되지 않으며 모든 값은 문자열로 입력합니다.                                     |
| linkedin, facebook, instagram, github            | String                       | Home(index)페이지에서 좌측의 개인정보 아래 표시될 소셜 아이콘 링크들입니다. 아이콘 클릭시 해당 링크로 이동하게 됩니다. ID가 아닌 전체 링크를 입력하세요.          |
| enablePostOfContents                             | (필수) Boolean (true, false) | 포스트(게시물)에 목차를 표시할지 설정합니다.                                                                                                                      |
| disqusShortname                                  | String                       | 댓글 기능을 활성화 할 수 있습니다. disqus에서 site생성 후 해당 site의 shortname을 여기 입력합니다. 값을 비우면 댓글 기능이 비활성화됩니다.                        |
| googleAnalytics                                  | String                       | 구글 애널리틱스를 활성화 할 수 있습니다. 본인의 TrackingID를 입력합니다.                                                                                          |
| googleAdsenseClient                              | String                       | GoogleAdsense를 활성화시 구글 애드센스의 Client 입력.                                                                                                             |
| googleAdsenseSlot                                | String                       | GoogleAdsense를 활성화시 구글 애드센스의 Slot 입력.                                                                                                               |

필수가 아닌 String(문자열) 값은 ''로 비워둘 수 있습니다.  
비워둔 값은 연결된 기능에 따라서 표시를 생략하거나, 기능이 비활성화될 수 있습니다.

## Writing posts

게시물(포스트)는 마크다운으로 작성합니다.

- Markdown 문법 지원
- emoji 지원
- ktex 수학 표기법 지원

`./_posts` 폴더 내에 게시물이 위치합니다.

파일의 제목이 포스트 게시물의 주소가 됩니다.
Jekyll 의 포스트 파일 제목 형식처럼 날짜가 들어갈 경우 날짜는 주소에서 제외됩니다.

예시 1. `./_posts/first-post.md`  
주소: https://junhobaik.github.io/first-post

예시 2. `./_posts/2019-12-31-first-post.md`
주소: https://junhobaik.github.io/first-post

**이미지 포함 게시물 작성**

마크다운 안에 이미지를 포함할 시 아래와 같은 구조로 작성합니다.

`first-post` 의 주소를 가질 게시물 작성 예시.  
`./_posts/first-post` 폴더 생성 후,  
마크다운 파일은 `index.md` 로 제목을 작성,  
이미지 파일들은 해당 폴더 안에 위치시키면 됩니다.

```
  _posts/
    first-post/
      index.md
      image-file-1.png
      image-file-2.jpg
      ...
  
```

### Markdown YAML Front matter

마크다운 게시물의 최상단에는 해당 게시물의 정보를 입력합니다.
두개의 `---` 안에 정보를 입력하며 아래 예시와 같이 입력합니다.

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

contents here...
```

| Variable   | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| `title`    | **(필수값)** 해당 포스트의 제목을 입력                                          |
| `date`     | **(필수값)** 해당 포스트의 작성일을 입력                                        |
| `tags`     | **(선택)** 게시물의 태그(#)를 입력                                              |
| `keywords` | **(선택)** SEO meta keywords에 해당하는 것으로 검색엔진의 검색 결과에 추가 반영 |

\+ 모든 값은 `''`, `""`로 감싸지 않습니다.

#### data Examples

```
# date Examples

## Case 1
date: 2018-09-01

## Case 2
date: 2018-09-01 22:00:00

## 'Time zone' Not Support
## There is no error but ignores the time zone
date: 2018-09-01 20:00:00 +0900
```

#### tags & keywords Examples

```
# tags & keywords Examples

## Case 1
tags: onlyOneTag

## Case 2
tags: [tag1, tag2]

## Case 3
tags:
  - tag1
  - tag2
```

## Deploy

배포 전 확인 사항

1. Github 저장소 이름이 **username**.github.io가 맞는지 확인해주세요.
1. `./config.js` 에서 siteUrl을 올바르게 작성했는지 확인해주세요.
1. 혹시나 작업중인 브랜치가 master 브랜치가 아닌지 확인하세요. (해당 관련 설명은 Install 항목을 참고하세요)

```
npm run deploy
```

위의 명령어로 배포가 시작됩니다.
master 브랜치로 commit이 자동으로 이루어지며,  
반영되기까지는 수십초 정도, 때로는 최대 수분의 시간이 소요됩니다.

이제 본인의 주소로 들어가 확인할 수 있습니다.

##
