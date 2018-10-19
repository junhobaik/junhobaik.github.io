---
title: 블로그 개편 (Jekyll -> Gatsby)
date: 2099-12-31
tags:
  - gatsby
  - blog
keywords:
  - jekyll
  - gatsby
  - gatsby blog
  - gatsby 블로그
---

## 블로그 개편, use Gatsby

기존 Jekyll을 이용 다른 사람의 테마를 사용하여 블로그를 운영해오고 있었습니다만  
Jekyll로 제작된 블로그를 마음대로 수정하기에는 루비라던가 익숙하지 않은 것이 많아 고민이었는데 마침 Gatsby라는 정적 사이트 제작 프레임워크를 찾았고 개편을 마음 먹었습니다.

Gatsby는 **React**와 **Webpack**을 베이스로 제작되어서 그 점이 가장 마음에 들었고 편리하게 사이트를 구축하기 위한 Plugin도 많이 제공되고 있었습니다.  
비록 테마나 구글링을 통해 얻을 수 있는 정보는 Jekyll보다 많이 부족하지만 애초에 테마가 아닌 처음부터 직접 구현하고 싶었기에 큰 문제는 아니었습니다.

일단 시작은 Gatsby에서 제공하는 기본 starter인 [gatsby-starter-default](http://gatsbyjs.github.io/gatsby-starter-default/)
를 clone하여 비어있는 화면 부터 시작했고 천천히 개발하기 시작하여 지금 이러한 블로그로 개발하였습니다.


### Built With:

개발에 사용된 기술은 크게 아래와 같습니다.

- Gatsby.js
- React
- Webpack
- GraphQL
- SASS(SCSS)
- typography

### 후기

`GraphQL`  
지금까지 개발면서 일단 처음에 GraphQL을 접하면서 모르는 것이기도 했고 인터넷에 정보도 부족해 시작이 어려웠습니다. 끼워맞추듯 개발하며 이해하다보니 지금도 모르는 상태라고 할 수 있지만 조만간 제대로 한번 배워볼 예정입니다.

`Theme?`  
혼자 사용하는 것이 아닌 모두 사용할 수 있게 테마 형식으로 제작해 보려 합니다. 아직은 디테일한 기능들을 구현할게 남았고 그 이후에 코드 최적화를 하면서 개인화하여 쓸 수 있도록 수정할 예정입니다.

`반응형 웹사이트`
기존에도 항상 반응형으로 제작을 하긴 했지만 이번엔 여러모로 테스트를 하다 보니 쉽지 않다는 것을 다시금 느꼈습니다. 쉽게 orientation으로만 하려고 했더니 안드로이드에서는 가상 키보드가 나오면서 키보드가 차지한 부분이 감소되며 세로 비율이었던 orientation이 가로로 바뀌게 되어 모바일에 최적화된 화면에서 데스크탑 최적화된 화면이 출력되게 되는 문제를 겪기도 했습니다.

`SEO, 웹표준`  
기존의 Jekyll은 테마를 받아 사용하다보니 검색최적화나 Google Analytics가 다 적용된 상태였습니다만 이번에 처음부터 개발하다보니 웹표준과 SEO에 대해서도 신경쓰면서 하게 되었습니다.  

- 웹사이트 점수 측정 100/100 [확인하기](https://website.grader.com/results/junhobaik.github.io)
- NAVER 웹마스터 사이트 최적화 '최고에요' 등급

웹표준에 관해서는 아직 부족한 게 많은 것 같으니 공부하고 수정해야 할 것 같고, SEO부분에 대해서는 구현을 마쳤고 이번에 많이 알게되었습니다.

### Github

[Github Repository](https://github.com/junhobaik/junhobaik.github.io)
