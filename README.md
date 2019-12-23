# Junhobaik.github.io

**Blog Version 3 제작중**

**Blog Version 3 가이드 문서 작성중**

---

**[https://junhobaik.github.io](https://junhobaik.github.io)**

Gatsby로 제작한 블로그 테마 "Borderless" 입니다.

커스터마이징하여 자신의 블로그로 사용할 수 있습니다.

~~[Document (Version 3, Borderless)](#)를 참고하세요.~~

**Blog History**

- Version 1 : Jekyll, 비배포
- Version 2 : Gatsby, 커스터마이징 가능, 배포
- Version 3 : Gatsby, 현재 운영중인 블로그, 커스터마이징 가능, 배포

블로그는 항상 다른 분도 사용이 가능하도록 커스터마이징이 가능한 테마같은 형태로 배포하고 있습니다.

이전에 운영하던 Version 2를 사용하고 싶다면,  
[Document (Version 2)](<https://github.com/junhobaik/junhobaik.github.io/wiki/Document-(Version-2)>)를 참고하세요.

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

```json
{
  /** Site MetaData (Required all)*/
  title: `Dev.White`,                           // (* Required)
  description: `Junho Baik's Development Blog`, // (* Required)
  author: `Junho Baik`,                         // (* Required)
  siteUrl: 'https://junhobaik.github.io',       // (* Required) ex.'https://junhobaik.github.io'

  /** Header */
  profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Jr. Web Front-end Developer. / javascript, react ...',
  name: 'Junho Baik',
  company: '',
  location: 'Korea',
  email: 'junhobaik@gmail.com',
  website: 'https://junhobaik.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                     // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                     // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: 'https://www.instagram.com/junhobaik', // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/junhobaik',           // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'junhobaik',   // comments (Disqus sort-name)

  /** Optional */
  googleAnalytics: 'UA-103592668-4',    // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleAdsense: true,                            // Google Adsense Activation. (Type of Value: Boolean)
  googleAdsenseClient: 'ca-pub-5001380215831339', // Google Adsense Client. ex.'ca-pub-5001380215831339'
  googleAdsenseSlot: '5214956675',                // Google Adsense Slot. ex.'5214956675'
};
```

| title                                            | (필수) 사이트의 제목이며, 각 페이지들의 제목에 들어갈 수 있고 Header에서의 Title입니다.                                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description                                      | (필수) 사이트의 설명                                                                                                                                              |
| author                                           | (필수) 사이트의 저자                                                                                                                                              |
| siteUrl                                          | (필수) 해당 웹사이트의 주소를 입력. 배포 시에 해당 주소가 없으면 많은 오류가 발생할 수 있습니다. (예, https://junhobaik.github.io)                                |
| profileImageFileName                             | `./src/images`경로에 프로필 사진을 위치한 후 해당 이미지의 파일명을 입력합니다. Header의 Title 옆 이미지에 들어가며 입력값이 없을때는 랜덤한 이미지를 보여줍니다. |
| comment, name, company, location, email, website | Home(index)페이지에서 좌측에 보일 개인정보입니다. 입력하지 않을 시 해당 항목을 출력되지 않으며 모든 값은 문자열로 입력합니다.                                     |
| linkedin, facebook, instagram, github            | Home(index)페이지에서 좌측의 개인정보 아래 표시될 소셜 아이콘 링크들입니다. 링크 주소를 문자열로 입력하며 아이콘 클릭시 해당 링크로 이동하게 됩니다.              |
| enablePostOfContents                             | 포스트(게시물)에 목차를 표시할지 설정합니다. 문자열이 아닌 Boolean값으로 true 또는 false를 입력합니다.                                                            |
| disqusShortname                                  | 댓글 기능을 활성화 할 수 있습니다. disqus에서 site생성 후 해당 site의 shortname을 여기 입력합니다.                                                                |
| googleAnalytics                                  | 구글 애널리틱스를 활성화 할 수 있습니다. 본인의 TrackingID를 입력합니다.                                                                                          |
| googleAdsense                                    | 구글 애드센스 활성활 설정. Boolean값은 true false를 입력합니다.                                                                                                   |
| googleAdsenseClient                              | GoogleAdsense를 활성화시 구글 애드센스의 Client 입력.                                                                                                             |
| googleAdsenseSlot                                | GoogleAdsense를 활성화시 구글 애드센스의 Slot 입력.                                                                                                               |
