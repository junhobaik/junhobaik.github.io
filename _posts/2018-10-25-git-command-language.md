---
title: Git Command-line 언어가 갑자기 한글로 나올 때
date: 2018-10-25
tags:
  - git
---

기존 mac에 기본 내장된 apple-git을 사용하다 brew로 설치한 git으로 바꿨는데 갑자기 커맨드라인에서 한글로 안내, 에러 등.. 뜨기 시작했다.  
그래서 방법을 알아보던중 alias를 변경하거나 하는 방법이 있는데 그건 여러 이유 때문에 그렇게 하는 건 곤란했고, 또한 ~/.bashrc를 건드는 방법들은 다 먹히지 않았다.

그래서 알아낸 해법은 간단하다. iTerm 설정에서 profile - terminal으로 들어간다.  
그리고 Set local variables automatically 이 선택되어있는 것을 비활성화해주면 된다.

기본 터미널에도 동일한 설정이 있다, 똑같이 비활성화 해주면 된다.  
설정 - 프로파일 - 고급 - 시작 시의 Locale 환경 변수를 설정
