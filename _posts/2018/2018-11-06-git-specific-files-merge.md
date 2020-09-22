---
title: git 특정한 파일 병합(merge) 하기
date: 2018-11-06
update: 2020-09-23
tags:
  - git
keywords:
  - git merge
  - git specific merge
  - git specific file merge
  - 특정 파일 merge
---

git에서 특정한 파일만 merge 하고 싶을 때가 있다.

`B` 브랜치를 `A` 브랜치에 merge 하려하는데 특정 파일(`./a.js`)만 병합하고 싶을 상황일 때 쓸 수 있는 방법이다.

## 방법 1

merge 키워드를 사용하지 않지만 아래 방법으로 특정 파일만 합치는 것이 가능하다.

`A` 브랜치로 체크아웃한 상태에서 아래 명령을 입력한다.

```shell
$ git checkout -p B a.js
```

위 명령으로 작업을 완료 할 수 있고 아래는 이에 대한 설명이다.

`checkout -p` 여기서 p 플래그는 `-p|--patch`으로 patch 옵션을 나타낸다.

```shell
$ git checkout -p B a.js
```
명령을 통해서 패치하겠다는 명령을 주면,  
변경 내용 출력과 함께 하단에 지금 작업에 반영하겠냐는 질문이 뜨는데 y를 입력해주면 된다.  
여러번 질문이 나올 수 있는데 a를 입력하면 모든 질문에 y를 입력하는 행동을 할 수 있다.

아래는 그 예시이다.

```shell
$ git checkout -p B a.js

diff --git b/a.js a/a.js
index 5f133a1..31d30c1 100644
--- b/a.js
+++ a/a.js
@@ -2,6 +2,7 @@ const _ = require('lodash');
 const Promise = require('bluebird');
 const path = require('path');
+const config = require('./config');

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions;
Apply this hunk to index and worktree [y,n,q,a,d,j,J,g,/,e,?]? y
```

참고로 여기서 `[y,n,q,a,d,j,J,g,/,e,?]`의 의미는 아래와 같다.

```
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk nor any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk nor any of the later hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help
```

## 방법 2

두번째 방법은 merge 키워드를 사용하므로 위의 방법보다는 진정한 merge라고 할 수 있다.  
다수의 파일을 합칠 때 유용하며,  
모든 변경 사항을 가져오고, 특정 파일의 변경 사항을 제외시켜 특정 파일 외의 모든 변경사항을 합치고 싶을 때 사용한다.

현재 작업중인 `A` 브랜치에서 `personalConfig.js` 파일과 `REAME.md` 파일만은 그대로 두고, 나머지 `B` 브랜치의 모든 변경 사항은 합치고 싶다면 `A` 브랜치로 체크아웃 후에 아래의 과정을 거치면 된다.

```shell
$ git merge --no-commit --no-ff B -X theirs

$ git reset HEAD personalConfig.js README.md

$ git clean -fd

$ git commit
```


