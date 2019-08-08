---
title: NVM, Node 설치 및 관리하기
date: 2019-08-08
tags:
  - node
  - javascript
keywords:
  - node 설치
  - nvm 설치
  - nvm 사용법
  - nvm update
  - nvm 업데이트
---

_해당 포스트는 macOS 환경을 기준으로 작성되었습니다_

[**NVM**(Node Version Manager)](https://github.com/nvm-sh/nvm)

Node 버전을 쉽게 관리 할 수 있다.
예로 사용하던 패키지가 Node 버전이 업데이트를 함에 따라 호환이 되지 않을 경우가 생길 때 NVM없이 Node 버전을 되돌리기는 간단한 작업은 아니다. 이런 경우 NVM이 요긴하게 사용될 것이고 이 외에도 팀규모의 개발 등 많은 곳에서 Node 버전 관리가 필요할 수 있다.

## 설치

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
> [NVM | Installation](https://github.com/nvm-sh/nvm#installation-and-update)

## 사용

현재 사용 가능한 Node Version List를 보여준다.
```bash
> nvm ls-remote
```

특정 버전의 Node를 설치합니다.
```bash
> nvm install <version>
```

또는 LTS Version으로 설치
```bash
> nvm install --lts
```

사용할 Node 버전 설정
```bash
> nvm use <version>
```
> 처음 설치한 Node 버전은 자동으로 사용하게 설정이 되어있습니다.

이렇게 간단하게 버전을 설치하고 사용을 설정하면 됩니다.
이제 설치된 리스트를 확인해보면 아래와 같은 출력을 볼 수 있습니다.

```bash
> nvm list
       
       v10.16.0
->     v10.16.2
default -> lts/* (-> v10.16.2)
node -> stable (-> v10.16.2) (default)
stable -> 10.16 (-> v10.16.2) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/dubnium (-> v10.16.2)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.16.0 (-> N/A)
lts/dubnium -> v10.16.2
```

설치되어있는 버전은 `10.16.0`과 `10.16.2`가 있고,
현재 사용중인 버전이 `10.16.2`인 것을 확인 할 수 있습니다.

만약 여기서 새로운 최신 LTS 버전의 Node가 나왔고 사용하자고 한다면 두가지 경우가 있을 것입니다.
1. 새 LTS 버전을 설치하고 새로운 환경(설치된 패키지가 없는 깨끗한 상태)에서 사용을 시작하겠다.
2. 새 LTS 버전을 설치하지만 기존에 사용하던 패키지는 그대로 가져가서 새로운 버전에 기존의 환경을 유지하고 싶다.


1번의 경우에는 간단하게 버전을 설치하고 설치한 버전을 사용하기로 설정하면 됩니다.
2번의 경우는 새 버전을 설치하고 기존의 패키지를 가져오는 과정이 필요합니다.
아래서 설명하겠습니다.

## 사용하던 Node Version을 업데이트하기

이 경우는 새로운 버전으로 업데이트하지만 기존의 패키지는 가져옵니다.
사용하던 환경(패키지) 그대로 사용하면서 버전만 업데이트하고 싶은 경우입니다.

그때 사용하는 명령은 아래와 같습니다.
```bash
> nvm install <version> --reinstall-packages-from=<version>
```

예를 들면 아래와 같습니다.
```bash
> nvm install 11.11.1 --reinstall-packages-from=10.16.2
```

위 명령어를 통해 새로운 `11.11.1` 버전을 설치하고 기존에 사용하던 버전 `10.16.2`의 패키지를 설치할 Node 버전(`11.11.1`)에 reinstall하는 과정을 거치게 됩니다.

---- 

References
- [github | nvm-sh/nvm](https://github.com/nvm-sh/nvm)
