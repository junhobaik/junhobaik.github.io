---
title: Jekyll 블로그 테마 '쉽게' 적용하기 (minimal-mistakes)
date: 2018-04-28 21:54:12 +0900
tags:
  - blog
  - jekyll
published: false
---


기존 Jekyll을 이용한 블로그는 현재(2018.09) Gatsby를 이용한 블로그로 개편되었습니다.  
Jekyll의 minimal-mistakes테마를 이용한 블로그를 만들고 싶다면 아래 게시물은 아직 유효합니다.

---

[Jekyll 블로그 테마 적용하기 (minimal-mistakes)](https://junhobaik.github.io/jekyll-apply-theme/)  
위 포스트를 먼저보시기를 추천드립니다.  
위 포스트를 보고 어려움을 느끼거나 더 쉽게 적용하고 싶은 분들을 위한 방법을 적은 포스팅입니다.

---

~~이제 지금 보고 계시는 블로그가 맘에 들고 그대로 사용하시고 싶다,~~  
~~이 블로그를 그대로 가져와 편집해 사용하고 싶다,~~  
또는 기존의 테마 적용 포스트가 너무 어렵다.

이러한 분들이 사용 할 수 있도록
지금의 블로그에서 포스트들을 제거하고 개인 설정을 초기화 한 것을 준비해두었고
그것을 받아서 개인 설정만 채워주면 사용 할 수 있는 방법을 소개합니다.  
(지금 보고 있는 블로그와 차이가 있을 수 있습니다,
2018.04 시점의 블로그를 기준으로 합니다.)

일단 jekyll가 설치 되어있고 Github 계정이 필요하며,
여기에 대한 것은 생략하고 테마 적용 부분에 대해서만 기술하습니다.  
참고 : [Jekyll 블로그 시작하기 (MacOS, GitHub Page)](https://junhobaik.github.io/start-jekyll-blog/)


## 적용하기

[junhobaik/junhobaik.github.io](https://github.com/junhobaik/junhobaik.github.io)

우선 위의 링크로 들어가 우측 상단의 Fork 버튼을 눌러 Fork 합니다.

그렇다면 자신의 계정에 `junhobaik.github.io` 리포지토리가 생기게 되고,  
리포지토리 페이지에서 `clone or download`에서 링크를 확인합니다 (ex. https://github.com/username/junhobaik.github.io.git)

이제 terminal을 열고 clone 과 동시에 필요한 작업을 합니다.

```shell
# 아래 링크는 위에 clone or download에서 확인한 링크를 넣는다.
$ git clone https://github.com/username/junhobaik.github.io.git blog
$ cd blog
$ git reset origin/dev --hard
$ npm install
# bundle 명령어 수행 시 sudo 권한으로 컴퓨터 비밀번호를 요구 할 수 있습니다.
$ bundle
$ git push -f
```

이제 다시 해당 리포지토리 페이지에 들어가서 Settings으로 들어갑니다.

Repository name을 username.github.io로 변경합니다.  
(여기서 username은 자신의 github username을 입력합니다.)

리포지토리 이름이 변경된 것을 확인하시고,
다시 설정 페이지에서 'GitHub Pages'란을 확인합니다.
여기에 `Your site is published at https://username.github.io/` 라는 초록색 배경의 문구가 나왔다면 정상적으로 적용 된 것입니다. 

이제 해당 주소로 블로그를 볼 수 있습니다.  
해당 주소에서 에러 페이지를 만난다면 약간의 시간이 필요할 수 있으니 조금만 기다려보세요.

여기까지 하셨다면 [Jekyll 블로그 테마 적용하기 (minimal-mistakes)](https://junhobaik.github.io/jekyll-apply-theme/) 해당 포스트에서 **테마 설정하기**에서 **테마 스킨**부터 **댓글 설정**까지 개인 설정을 적용해주면 이제 포스트를 작성하고 블로그를 시작하면 됩니다.
