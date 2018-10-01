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
- Semantic-ui-react
- SASS (SCSS)

---

## Documents

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

\+ 모든 값은 '', ""로 감싸지 않습니다.

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
