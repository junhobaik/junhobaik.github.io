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

## Install

해당 블로그로 시작하기 위한 방법은 두가지가 있습니다.

1. 해당 Repository Fork 후 사용
2. 해당 Repository Clone 후 사용

1번 방법을 추천합니다.

### **Fork**로 시작하기

### **Clone**으로 시작하기

```shell
$ git clone -b develop https://github.com/junhobaik/junhobaik.github.io.git [SITE_DIRECTORY]
$ npm install
```

```shell
$ npm start
```

## Basic Settings

### Modify `./config.js`

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

| 설정                                             | 타입                  | 설명                                                                                                                                                              |
| ------------------------------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                                            | (필수) String         | 사이트의 제목이며, 각 페이지들의 제목에 들어갈 수 있고 Header에서의 Title입니다.                                                                                  |
| description                                      | (필수) String         | 사이트의 설명                                                                                                                                                     |
| author                                           | (필수) String         | 사이트의 저자                                                                                                                                                     |
| siteUrl                                          | (필수) String         | 해당 웹사이트의 주소를 입력. 배포 시에 해당 주소가 없으면 많은 오류가 발생할 수 있습니다. (예, 'https://junhobaik.github.io')                                     |
| profileImageFileName                             | String                | `./src/images`경로에 프로필 사진을 위치한 후 해당 이미지의 파일명을 입력합니다. Header의 Title 옆 이미지에 들어가며 입력값이 없을때는 랜덤한 이미지를 보여줍니다. |
| comment, name, company, location, email, website | String                | Home(index)페이지에서 좌측에 보일 개인정보입니다. 입력하지 않을 시 해당 항목을 출력되지 않으며 모든 값은 문자열로 입력합니다.                                     |
| linkedin, facebook, instagram, github            | String                | Home(index)페이지에서 좌측의 개인정보 아래 표시될 소셜 아이콘 링크들입니다. 아이콘 클릭시 해당 링크로 이동하게 됩니다. ID가 아닌 전체 링크를 입력하세요.          |
| enablePostOfContents                             | Boolean (true, false) | 포스트(게시물)에 목차를 표시할지 설정합니다.                                                                                                                      |
| disqusShortname                                  | String                | 댓글 기능을 활성화 할 수 있습니다. disqus에서 site생성 후 해당 site의 shortname을 여기 입력합니다. 값을 비우면 댓글 기능이 비활성화됩니다.                        |
| googleAnalytics                                  | String                | 구글 애널리틱스를 활성화 할 수 있습니다. 본인의 TrackingID를 입력합니다.                                                                                          |
| googleAdsenseClient                              | String                | GoogleAdsense를 활성화시 구글 애드센스의 Client 입력.                                                                                                             |
| googleAdsenseSlot                                | String                | GoogleAdsense를 활성화시 구글 애드센스의 Slot 입력.                                                                                                               |
