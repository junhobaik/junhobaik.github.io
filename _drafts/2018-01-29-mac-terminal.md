---
title: Mac Terminal 설정 (OhMyZsh, iTerm)
date: 2018-01-29
---

**OSX 재설치 후 설치 겸 정리해보는 Mac 터미널 세팅 과정**

## zsh, Oh My Zsh
우선 기본 Terminal에서 zsh와 Oh My Zsh를 설치합니다. 

### zsh 최신 버전 설치
1. zsh 현재 버전 확인
  ```
$ zsh --version
  ```
2. zsh 최신 버전 설치
  ```
$ brew install zsh
  ```
3. Terminal 재실행 후 zsh 현재 버전 확인
  ```
$ zsh --version
  ```

brew 명령어를 위한 HomeBrew 패키지 관리자 미설치시 아래 명령어를 통해 설치 필요  
`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
{: .notice--warning}

### Oh My Zsh 설치
```
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
<br/>

\+ 다른 블로그들에는 터미널의 기본 쉘 실행을 zsh로 바꿔야 한다는 말이 있었으나  
실제 해보니 그런 과정 없이도 위와 같은 설치 과정을 지나니 기본 실행이 zsh로 바뀌어있었다.
{: .notice}
<br/>

### iTerm 설치
이제 기본 터미널을 대체해서 사용할 iTerm을 설치합니다.

[다운로드 페이지](https://www.iterm2.com/downloads.html){: .btn .btn--info}
