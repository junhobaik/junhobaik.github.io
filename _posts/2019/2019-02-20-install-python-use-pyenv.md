---
title: pyenv를 이용해 Python 설치하기 (macOS)
date: 2019-02-20
tags:
  - python
keywords:
  - python 설치
  - 파이썬 설치
  - 맥 파이썬 설치
  - mac python 설치
---

**(macOS Mojave 환경에서의 포스팅입니다)**

pyenv는 nvm(Node Version Manager)과 비슷하게 필요에 따라 다양한 파이썬 버전으로 실행할 수 있는 환경을 제공하는 버전 매니저이다.

프로젝트별 버전을 달리 사용하는 용도가 아니더라도 macOS에서 Python을 설치하고 디폴트 버전을 바꾸는 등 설정을 하는 과정보다 pyenv를 사용하는 것이 훨씬 간편하다.

## pyenv 설치

우선 pyenv를 설치하기 위해 패키지 관리자인 HomeBrew가 설치되어있어야 한다. HomeBrew가 설치되지 않았다면 터미널에서 아래 명령어를 통해 설치한다.

```shell
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)”
```

HomeBrew가 준비되었다면 아래 명령어로 pyenv를 설치한다.

```shell
$ brew install pyenv
```

## Python 설치

pyenv 설치 후 아래 명령어를 통해 pyenv를 통해 설치할 수 있는 리스트를 확인 할 수 있다.

```shell
$ pyenv install --list
```

확인된 리스트에서 원하는 버전을 선택해 설치한다. 예로 3.7.2 버전을 아래 명령어를 통해 설치한다.

```shell
$ pyenv install 3.7.2
```

macOS 버전이 Mojave라면 인스톨 단계에서 에러가 발생할 수 있는데 에러가 발생했다면 아래 명령어를 실행 후 다시 인스톨하면 된다.

```shell
$ sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
```

설치 후에는 아래 명령어를 통해 확인해 볼 수 있다. 아래 명령어는 pyenv를 통해 설치된 리스트를 확인 할 수 있다.

```shell
$ pyenv versions
```

이제 설치한 버전을 글로벌 환경에서 디폴트로 사용할 수 있도록 지정해준다.

```shell
$ pyenv global 3.7.2
```

지정 후에 적용하려면 아래 명령어가 필요하다.

```shell
$ eval "$(pyenv init -)"
```

차후에 이 명령어가 필요없도록 `.zshrc` 또는 `.bashrc` 에 해당 명령어를 추가하여 간단하게 터미널을 재시작하면 적용되도록 할 수 있다.

```shell
$ vi ~/.zshrc
```

위 명령어로 `.zshrc` 의 하단에 `eval "$(pyenv init -)"` 를 추가해주자.

이제 터미널을 재실행하고 아래 명령어를 통해 원하는 버전이 적용된 것을 확인 할 수 있다.
