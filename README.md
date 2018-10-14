# [junhobaik.github.io](https://junhobaik.github.io/)

Gatsby 정적 페이지 제작 프레임워크를 사용해 제작한 블로그.

[gatsby-starter-default](http://gatsbyjs.github.io/gatsby-starter-default/)를 clone으로 시작.

- master 브랜치는 build 된 파일로, 개발 브랜치는 gatsby-dev 브랜치입니다.

- 차후 테마 형식으로 커스터마이징하여 사용할 수 있게 배포 예정입니다.

## 개발 현황
[Projects: Blog Development](https://github.com/junhobaik/junhobaik.github.io/projects/2)

## Built with:

- Gatsby
- React
- Webpack
- ~~Semantic-ui-react~~
- SASS (SCSS)

---

<br/>

<br/>

<br/>

## Get Started (미완성)

### Install

```shell
# $ git clone ''
$ npm install
```

### Basic Setting

#### Create `.env`

root 경로에 `.env` 파일을 생성하고 아래 정보를 입력합니다.

Algolia Search를 사용하기 위함으로 Algolia에 가입하여 키 발급이 필요합니다.

```
ALGOLIA_APP_ID=ZWAGJBAMCT
ALGOLIA_SEARCH_ONLY_API_KEY=ebdfarwbawrbawrbawrb86eda59
ALGOLIA_ADMIN_API_KEY=e524124acvd233d17aaabawr306c4037
ALGOLIA_INDEX_NAME=gatsby_blog
```

위 코드는 예제 코드로 본인의 정보를 입력해주세요.

#### Modify `config.js`

root 경로에 위치한 config.js를 본인의 정보에 맞춰 수정해주세요, 모든 값은 필수 값입니다.

```javascript
module.exports = {
  title: `HUNDRED`, // 사이트의 제목
  author: 'Junho Baik', // 사이트의 소유자
  description: "Junho Baik's blog", // 사이트의 설명
  siteUrl: 'https://junhobaik.github.io', // 사이트의 주소

  // header config
  titleLogo: () => {
    return require('./src/images/profile.png') // 로고 이미지의 경로
  },
  titleLogoShow: true, // 타이틀 로고의 출력 유무, boolean, default=false
  bio: 'Hello World!', // 타이틀 제목 아래의 부제목
  bioShow: true, // 부제목의 출력 유무, boolean, default=true

  // addtional
  googleAnalyticsTrackingId: 'UA-111111111-1', // 구글 애널리틱스 추적ID
}

```

### Create Post

`./_post/` 폴더에 포스트를 작성합니다.

기본적인 YAML 양식은 아래와 같습니다, 추가적인 사항은 Documents를 참고해주세요. 

```markdown
---
title: First Post
date: 2018-01-01
---

Hello World!
```

### Run `gatsby develop`

로컬에서 사이트를 확인할 수 있습니다.

`gatsby develop` or `npm start`

### Deploy

배포 전 확인 할 사항

- github repository 이름이 `username.github.io`인지 확인하세요.  
  (username=본인의 github username)
- 현재 작업 중인 브랜치가 master가 아닌지 확인하세요.
  master 브랜치는 배포 전용 브랜치로 작업중 브랜치는 다른 수정사항이 없었다면 `gatsby-dev`입니다.

배포하기

`npm run deploy`

위 명령어를 실행하면 빌드가 실행되며 gh-pages로 배포가 이루어집니다.

마지막으로 `Published`라는 문구가 출력되었다면 정상적으로 배포가 되었으며 최대 수분 안에 반영이됩니다.
`username.github.io` 주소로 들어가 확인해보시면 됩니다.

<br/>

<br/>

<br/>


## Documents (미완성)

### Basic Setting

#### Create `.env`

Algolia Search를 사용하기 위함으로 Algolia에 가입하여 키 발급이 필요합니다.

```
ALGOLIA_APP_ID=ABCDE
ALGOLIA_SEARCH_ONLY_API_KEY=ABCDE
ALGOLIA_ADMIN_API_KEY=ABCDE
ALGOLIA_INDEX_NAME=ABCDE
```

#### Modify `config.js`

required All value.

```javascript
module.exports = {
  title: `SITE TITLE`,
  author: 'NAME',
  description: "site Description",
  siteUrl: 'https://username.github.io',
  titleLogo: () => {
    return require('./src/images/profile.png') // logo Image path
  },
  titleLogoShow: true // header title logo display(false=none)
}
```

### Markdown YAML Front matter

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
published: true
---

contents here...
```

| Variable | Description                              |
|----------|------------------------------------------|
| `title`  | **(필수값)** 해당 포스트의 제목을 입력   |
| `date`   | **(필수값)** 해당 포스트의 작성일을 입력 |
| `tags `  | **(선택)** 게시물의 태그(#)를 입력 |
| `keywords `  | **(선택)** SEO meta keywords에 해당하는 것으로 검색엔진의 검색 결과에 추가 반영 |
| `published` | **(선택)** `default=ture` 배포 시 포스트 노출 여부를 결정 |

\+ 모든 값은 `''`, `""`로 감싸지 않습니다.

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

### Deploy

`npm run deploy`

gh-pages 모듈을 통해 배포됩니다.

지금 작업하는 브랜치는 gatsby-dev 브랜치이며 master 브랜치에서는 작업하지 않습니다.

master 브랜치는 빌드된 파일이 gh-pages를 통해 배포되는 브랜치로 쓰입니다.

### Customize

#### Modify `./src/utils/vatiavles.scss`

테마와 전반적인 스타일을 수정할 수 있습니다.

`$theme` 값을 수정하여 색 테마를 변경할 수 있습니다.

##### Theme list

- basic
- whiteTheme

```scss
/** theme (default: basic) */
$theme: whiteTheme;
/////////////////////////////

$break-small: 50em;
$break-medium: 70em;

// ...

```



#### Modify `./src/utils/typography.js`

구글 폰트를 이용할 수 있습니다.

```javascript
//...

const googleFont = [
  {
    name: 'Nanum Gothic Coding' // google font 이름은 필수 값입니다.
  },
  {
    name: 'Nanum Gothic',
    bold: [400, 700] // 필요 시 blod값을 입력 할 수 있습니다.
  }
]

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Nanum Gothic'
  ],
  bodyFontFamily: ['Nanum Gothic Coding'],
})

//...
```
