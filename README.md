# [junhobaik.github.io](https://junhobaik.github.io/)

Gatsby 정적 페이지 제작 프레임워크를 사용해 제작한 블로그.

[gatsby-starter-default](http://gatsbyjs.github.io/gatsby-starter-default/)를 clone으로 시작.

- `master` 브랜치는 build 된 파일로, 개발 브랜치는 `develop` 브랜치입니다.
- 차후 테마 형식으로 커스터마이징하여 사용할 수 있게 배포 예정입니다.
- Github Page에 배포를 위해 제작되었습니다.

## 개발 현황
[Projects - Blog Development](https://github.com/junhobaik/junhobaik.github.io/projects/2)

## Built with:

- Gatsby
- React
- Webpack
- SASS (SCSS)
- typography.js & Google Fonts

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
  googleAnalyticsTrackingId: 'UA-111111111-1', // 구글 애널리틱스 추적ID, 비활성화: ''
  disqusShortname: 'hundred-blog' // 댓글 기능을 위한 Disqus의 shortname, 비활성화: ''
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
  master 브랜치는 배포 전용 브랜치로 작업중 브랜치는 다른 수정사항이 없었다면 `develop`입니다.

배포하기

`npm run deploy`

위 명령어를 실행하면 빌드가 실행되며 gh-pages로 배포가 이루어집니다.

마지막으로 `Published`라는 문구가 출력되었다면 정상적으로 배포가 되었으며 최대 수분 안에 반영이됩니다.
`username.github.io` 주소로 들어가 확인해보시면 됩니다.

## Documents

[Documents 바로가기](https://github.com/junhobaik/junhobaik.github.io/wiki/Documents)
