---
title: Mac Terminal 설정 (zsh, oh my zsh, plugin)
date: 2018-01-29 23:00:00 +0900
---

MacOS 재설치 후 기본적인 설정을 하면서 **간단히** 정리해본 Mac 터미널 세팅 과정

mac Catalina에서는 zsh가 기본 쉘으로 나오기 때문에 zsh 설치 과정이 불필요합니다.  
mac Catalina를 사용하신다면 oh my zsh 설치부터 시작하면 됩니다.

## zsh 설치

1. zsh 현재 버전 확인

  ```
$ zsh --version
  ```

2. zsh 최신 버전 설치

  ```
$ brew install zsh
  ```

  ```
  # brew 명령어를 위한 HomeBrew 패키지 관리자 미설치시 아래 명령어를 통해 설치 필요
  # 위 명령어가 이상없이 작동한다면 아래 명령어는 불필요합니다.
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

3. Terminal 재실행 후 zsh 현재 버전 확인

  ```
$ zsh --version
  ```

## Oh My Zsh 설치

```
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## zsh Plugins

플러그인은 `zsh-syntax-highlighting` `zsh-autosuggestion` `autojump` 이 세가지 플러그인을 추천합니다.  
여기서는 설치하지 않지만, alias에 익숙하지 않으신 분이라면 [alias-tips](https://github.com/djui/alias-tips)도 추천합니다.

brew를 통해 설치해줍니다.

```
$ brew install zsh-syntax-highlighting zsh-autosuggestion autojump
```

.zshrc 파일을 수정합니다.

```
$ vi ~/.zshrc
```

```
plugins=(git zsh-syntax-highlighting zsh-autosuggestion autojump)
```

## 터미널 App 추천

대표적인 터미널 앱으로는 iTerm2가 가장 유명하고 많이 쓰입니다.  
본인은 기존 iTerm2를 쓰다가 지금은 Hyper를 사용하고 있습니다.

### iTerm

[iTerm Official Site](https://www.iterm2.com/)

[다운로드 페이지](https://www.iterm2.com/downloads.html)

또는 brew를 이용해 설치할 수 있습니다. (cask 설치 필요)

`brew cask install iterm2`

### Hyper

[Hyper Official Site](https://hyper.is)

[다운로드 페이지](https://hyper.is/#installation)

또는 brew를 이용해 설치할 수 있습니다. (cask 설치 필요)

`brew cask install hyper`
