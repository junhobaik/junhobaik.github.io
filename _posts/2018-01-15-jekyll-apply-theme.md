---
title: Jekyll 블로그 테마 적용하기 (minimal-mistakes)
date: 2018-01-15 05:34:12 +0900
tags:
  - blog
  - jekyll
---

jekyll 블로그를 시작하기 위한 준비를 저번 포스트에서 끝냈다.  
이제 테마를 적용하고자 여러 테마를 찾던중 정말 괜찮은 테마를 발견했고 그것을 적용하는 과정을 포스팅하려고 한다.

테마의 이름은 'Minimal Mistakes'로 github star와 fork를 보아 인기있는 테마인듯 싶다.  
심플한 디자인과 가독성이 맘에 들었고 무엇보다 문서가 너무나 잘 정리되있다는 점에 있어서 선택하게 되었다.

### Minimal Mistakes
- [Official & Demo Page](https://mmistakes.github.io/minimal-mistakes)
- [Github](https://github.com/mmistakes/minimal-mistakes)


## 테마 적용하기
우선 기존 포스트에서 jekyll 설치를 다뤘는데, 그로인해 기본 테마로 적용이 되어있는 상태이다.  
여기서 테마를 적용하는 방법으로는 여러가지가 있다. 

가장 쉬운방법은 테마의 github에서 fork를 하고 리포지토리 이름을 `username.github.io`로 바꾸는 방법이다.

만약 기존에 해둔 리포지토리를 파괴하지 않는 선에서 테마를 적용하고 싶다면 테마를 다운받아 기존 리포지토리 폴더에 덮어쓰기 하는 방법도 있다.

여기서는 깔끔하게 비어있는 리포지토리에서 테마를 적용하는 방법을 기술하겠다.

만약 지금 보고있는 블로그가 맘에 들고 아래 방법보다 더 쉽게 테마 적용하고 싶다면 지금 이 블로그의 GitHub 리포지토리를 Fork해 사용할 수 있도록 방법을 만들어놨으니 포스팅을 참고하면 된다.  
[Jekyll 블로그 테마 ‘쉽게’ 적용하기 (minimal-mistakes)](https://junhobaik.github.io/jekyll-apply-theme-simple)
{: .notice--warning}

### 테마 다운받아 적용하기

테마를 다운받으려면 보통 리포지토리를 clone하거나 zip파일로 다운받는 방법이 보통이다.  
아니면 jekyll theme 페이지에서 다운받는 방법이 있다.  

minimal mistakes 테마를 다운받으려 github 리포지토리를 zip으로 다운받아 시도하였다.  
허나 사이드바 표시등 자잘한 문제가 보여 정식 릴리즈된 파일을 찾아 다운받았다.

[https://github.com/mmistakes/minimal-mistakes/releases](https://github.com/mmistakes/minimal-mistakes/releases)

다운받은 폴더의 내용을 프로젝트 폴더(username.github.io)에 옮긴다.  
이 과정에서 아래를 참조해 불필요한 파일을 삭제하도록 한다.

### 불필요한 파일 삭제
불필요한 파일은 아래와 같다.  
- .editorconfig
- .gitattributes
- .github
- /docs
- /test
- CHANGELOG.md
- minimal-mistakes-jekyll.gemspec
- README.md
- screenshot-layouts.png
- screenshot.png

### _posts, _draft 폴더 생성
그리고 _posts와 _draft 폴더가 없다면 생성하도록 한다. (최상위 경로)
- _drafts : 포스트 초안이 담기는 곳이다. 배포되지 않고 테스트 환경에서 보기가 가능하다.
- _posts : 배포될 포스트들이 담기는 곳.

### .gitignore 생성

다음으로 최상위 경로에 .gitignore 파일이 없다면 생성하고 있다면 아래 내용을 보충하자.  
[Jeklly gitignore list](https://gist.github.com/bradonomics/cf5984b6799da7fdfafd)

### Gemfile 수정
Gemfile을 아래 내용으로 수정한다.

```yml
source "https://rubygems.org"

gem "jekyll", "~> 3.5"
gem "minimal-mistakes-jekyll"
```

아래 명령어를 수행한다.
```
$ bundle
```

### 테스트, 배포
이제 기본적으로 테마 적용이 완료되었다. 다음으로 개인에 맞춰 커스터마이징 하면 된다.  
그 전에 한번 테스트와 배포를 해보자.

```
jekyll serve
```
위 명령어로 `localhost:4000`에서 로컬로 띄워볼 수 있다.

이 명령어 뒤에 붙는 옵션으로 유용한 것은
- `--draft` 초안을 같이 표시한다.
- `--livereload` 수정마다 새로고침된다.

중요한 것은 `_config.yml` 파일을 수정하는 것은 반영되지 않아 다시 명령어를 수행해야 반영 된다.

다음으로 git comit, push 를 통해 자신의 github page에 올린다.

예)
```
$ git add .
$ git commit -m 'Apply theme, minimal mistakes'
$ git push
```

`username.github.io`에 접속해 제대로 반영 되었는지 확인한다.

## 테마 설정하기
이제 개인에 맞춰 커스터마이징 할 차례이다.  
구체적인 것은 생략하고 기본적으로 수정이 필요한 내용들만 다루겠다.  

`_config.yml`을 수정하자.

설정을 수정할때는 `jekyll serve`가 실시간 반영되지 않으니 다시 명령어를 수행해야하는 점을 유의하자.

### 테마 스킨
```yml
minimal_mistakes_skin : "defalut"
```
테마의 전체적인 색상 스킨을 정할 수 있다.   
스킨은 아래 링크에서 확인 할 수 있다.  
[Skin list](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#skin)

### Site Settings

```yml
locale                   : "ko" # 타깃 국가 설정
title                    : "블로그 제목" # 블로그 좌측상단의 제목
name                     : "블로그 이름"
description              : "블로그 설명"
url                      : "https://username.github.io" # 블로그 주소
repository               : "username/username.github.io" # 블로그 github 리포지토리
search                   : true # 사이트 우측 상단 검색 활성화
search_full_content      : # 제목이 아닌 내용까지도 검색할 것인지에 대한 설정 기본 false
```

### Site Author
사이트 운영자에 대한 정보를 적는다.  
사이드바에 표시되는 사항들이다.

```yml
author:
  name             : "이름"
  avatar           : "/assets/images/bio-photo.jpg" # 프로필 사진
  bio              : "이름 아래 나타날 자신의 설명"
  location         : "Seoul,Korea"
  email            : "a@b.c"
  uri              : # 웹사이트, 보통 지금 블로그 말고 링크해두고 싶은 사이트를 적는다.
  # 이 아래 쇼셜 리스트에 해당되는 것에 아이디를 적는다
  github : "username" # 주소 전체를 적는 것이 아닌 자신의 정보만 적는다.
```

### Defaults
```yml
# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: false # 해당 포스트를 읽은 시간이 표시되는데 기본값은 true이다.
      comments: # true
      share: true # 포스트 공유 기능을 활성화 할 것인지 정한다. 기본값은 true이다.
      related: true
```
### 댓글 설정
disqus를 적용해 보기 위해 우선 disqus에서 사이트를 하나 추가하고 `short-name`을 알아둔다

아래 코드를 보고 `_config.yml`의 설정을 수정한다

```yml
comments:
  provider               : "disqus"
  disqus:
    shortname            : dev-hundred-blog # Short-name

defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: false
      comments: true # 댓글 활성화
      share: true
      related: true
```


## Navigation 설정
헤더 부분에 표시될 네비게이션 메뉴 설정을 하겠다.  
주로 많이 사용하는 메뉴들로 기본 설정을 해보겠다.  
- Archive
- Tag
- Category

기본적으로 `_data/navigation.yml`에서 네비게이션 설정을 할 수 있다.  
예로 Archive라는 메뉴 하나가 네비게이션에 있다고 하면 아래와 같다.

```yml
main:
  - title: "Archive"
    url: /year-archive/
```

url은 `_pages`폴더안에 있는 페이지의 permalink와 연결된다.

`_pages/year-archive.html`
```yml
---
layout: archive
permalink: /year-archive/
title: "Posts by Year"
author_profile: true
---
# ... Code Here ...
```

이제 실제로 적용을 해보도록 하자.
기본적인 양식은 [minimal mistakes의 github의 예제](https://github.com/mmistakes/minimal-mistakes/tree/master/docs) 양식을 가져왔다.

`_data/navigation.yml`
```yml
main:
  - title: "Archive"
    url: /year-archive/
  - title: "tag"
    url: /tags/
  - title: "Category"
    url: /categories/
```

`_pages/year-archive.html`
{% raw %}
```liquid
---
layout: archive
permalink: /year-archive/
title: "Posts by Year"
author_profile: true
---
{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}
{% for year in postsByYear %}
  <h2 id="{{ year.name | slugify }}" class="archive__subtitle">{{ year.name }}</h2>
  {% for post in year.items %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
```
{% endraw %}

`_pages/tag-archive.html`  

태그 부분은 기본 양식에서 살짝 수정했다.
{% raw %}
```liquid
---
layout: archive
permalink: /tags/
title: "Posts by Tag"
author_profile: true
---
{% include group-by-array collection=site.posts field="tags" %}
<ul>
  {% for tag in site.tags %}
    <span>
      <a href="#{{ tag | first }}">
        {{ tag | first }}
      </a> &nbsp;&nbsp;&nbsp;
    </span>
  {% endfor %}
</ul>
<br/>
<br/>
{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
```
{% endraw %}

`_pages/category-archive.html`
{% raw %}
```liquid
---
layout: archive
permalink: /categories/
title: "Posts by Category"
author_profile: true
---
{% include group-by-array collection=site.posts field="categories" %}
{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
```
{% endraw %}

---

이제 어느정도 블로그를 운영할 수 있게 된 것 같다.  
허나 아직 세부적으로 코드 수정을 통해 커스터마이징 할 것들이 보인다.  

이번 포스팅은 여기까지 하고 차후에 SEO 관련 포스팅을 할 생각이다.

---

### References
- [Minimal Mistakes Quick-Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
