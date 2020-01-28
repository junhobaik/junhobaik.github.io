---
title: mac 터미널 환경 구성하기 (zsh, oh my zsh, zplug, hyper)
date: 2019-07-24
tags:
  - mac
keywords:
  - mac terminal
  - mac 터미널
  - 맥 터미널
  - zsh
  - zsh 설치
  - oh my zsh
  - oh my zsh 설치
  - zplug
  - hyper
  - itrem
---

![](screenshot.png)

개발환경 구성에 앞서 제일 먼저 필요하다고 할 수 있는 터미널 환경 세팅.

여기서는 **zsh** 쉘을 사용하며, **oh my zsh** 설치 후  
zsh 플러그인 매니저인 **zplug**를 설치하여 플러그인을 관리합니다.  
또한 터미널 앱으로는 **hyper**를 사용합니다.

macOS를 처음 설치해 깨끗한 상태에서 환경을 구성하는 과정으로 Brew 설치부터 시작하게 됩니다.

HomeBrew가 설치되어있다면 Brew 설치 부분은 건너뛰면 됩니다.  
또한 mac Catalina를 사용중이라면 zsh 설치 및 설정 부분은 건너뛰면 됩니다.

> catalina 버전부터는 기본 쉘이 zsh로 설정되어 있어 설치 및 설정이 불필요

## Brew 설치

Brew 설치에 앞서 xcode command line tools의 설치가 필요합니다.

_Xcode command line tools 설치_

```bash
xcode-select --install
```

_HomeBrew 설치_

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

_zsh 설치_

```bash
brew install zsh
```

_oh-my-zsh 설치_

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

_기본 쉘 변경 (bash -\> zsh)_

```bash
chsh -s `which zsh`
```

> non-standard shell 오류 발생 시
> /etc/shells 파일에 `which zsh`를 통해서 확인한 경로를 최하단에 추가합니다.
> 위 명령어를 다시 실행한 후 재부팅을 합니다.

여기까지 했다면 터미널을 실행하면 zsh 쉘로 실행되는 것을 확인 할 수 있습니다.

## zplug 설치 및 설정

[https://github.com/zplug/zplug](https://github.com/zplug/zplug)

zplug는 zsh 플러그인을 쉽게 설치 및 관리 할 수 있는 플러그인 매니저입니다.

### zplug 설치

```bash
$ curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh`
```

또는 `$ brew install zplug` 로 설치가 가능합니다.

### zplug 설정

`.zshrc` 파일을 수정합니다.
vi, open, code 등 맘에 드는 방법으로 수정하시면 됩니다.

```bash
vi ~/.zshrc
```

`.zshrc` 파일의 내용을 전부 지우고, 아래 내용으로 대체합니다.

```bash
# .zshrc (use zplug)

source ~/.zplug/init.zsh

# Plugins
zplug "plugins/git",   from:oh-my-zsh
zplug "lib/completion",   from:oh-my-zsh
zplug 'lib/key-bindings', from:oh-my-zsh
zplug "lib/directories",  from:oh-my-zsh

zplug "zsh-users/zsh-syntax-highlighting"
zplug "zsh-users/zsh-autosuggestions"

zplug 'dracula/zsh', as:theme

# Install plugins if there are plugins that have not been installed
if ! zplug check --verbose; then
    printf "Install? [y/N]: "
    if read -q; then
        echo; zplug install
    fi
fi

# Then, source plugins and add commands to $PATH
zplug load
```

기본적인 oh-my-zsh의 플러그인과,
`zsh-syntax-highlighting`, `zsh-autosuggestions` 플러그인이 포함된 내용입니다.
또한 테마는 `dracula` 를 사용하고 있습니다.

기본적인 사용 방법은 아래서 설명할 것이고,
자세한 설정 방법은 [공식 문서](https://github.com/zplug/zplug)를 참고하시기 바라며,
아래는 본인이 사용하는 Plugin 작성 내용입니다.

```bash
...

# Plugins
zplug "lib/completion",   from:oh-my-zsh
zplug "lib/key-bindings", from:oh-my-zsh
zplug "lib/directories",  from:oh-my-zsh

zplug "plugins/git",      from:oh-my-zsh
zplug "plugins/autojump", from:oh-my-zsh, frozen:1

zplug "zsh-users/zsh-completions",              defer:0
zplug "zsh-users/zsh-autosuggestions",          defer:1, on:"zsh-users/zsh-completions"
zplug "zsh-users/zsh-syntax-highlighting",      defer:1, on:"zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-history-substring-search", defer:2, on:"zsh-users/zsh-syntax-highlighting"

zplug "denysdovhan/spaceship-prompt", use:spaceship.zsh, from:github, as:theme

zplug "djui/alias-tips"

...
```

위에서 autojump 플러그인 사용을 위해서는 아래와 같이 설치가 필요합니다.

```bash
$ brew install autojump
```

또한 위에서 spaceship-prompt 테마를 사용하기 위해서는 powerline font 설치가 필요합니다.

다양한 zsh 플러그인은 [awesome-zsh-plugin](https://github.com/unixorn/awesome-zsh-plugins) 문서에서 확인 할 수 있습니다.

### zplug 사용법

#### 플러그인 추가

기본적으로는 `.zshrc`를 수정하여 사용하는 것을 권장합니다.

`zplug "djui/alias-tips"`와 같이
`zplug "[username]/[repository name]"`의 형식으로 쉽게 플러그인을 추가할 수 있습니다.

```
zplug "[username]/[repository name]", [tag]:[value]
```

또한 위와 같이 태그를 추가할 수 있습니다.

위에서 테마를 아래와 같이 표시한 것을 보면 알 수 있습니다.

```
zplug 'dracula/zsh', as:theme
```

[공식 문서](https://github.com/zplug/zplug)에 설명과 다양한 예가 있으니 참고하시기 바랍니다.

`.zshrc`를 수정하는 방식이 아닌 zplug의 명령어로만 제어하는 방법이 있습니다.
터미널에서 아래 명령어(위에서 설명한 방식의 문구와 동일합니다)를 실행하면

```bash
$ zplug "djui/alias-tips"
```

플러그인이 자동으로 추가가 됩니다.

이렇게 추가된 플러그인은 `.zshrc`가 아닌 `~/.zplug/packages.zsh` 에 기록되어 있습니다.
따로 확인하는 것이 어려우니 `.zshrc` 에서만 작업하는 것을 추천합니다.

#### zplug 명령어

[공식 문서 | Commands for zplug](https://github.com/zplug/zplug#2-commands-for-zplug)

기본적으로 추가한 플러그인이 설치되어 있지 않다면 터미널 시작시 설치할 것을 묻습니다.
그런데 명령어를 이용해 추가한 경우에는 아래 명령어를 통해 설치를 할 수 있습니다.

```bash
$ zplug install
```

방금 설치한 플러그인을 터미널 재실행 없이 반영하려면 아래 명령어를 사용합니다.
`--verbose` 옵션을 추가하면 자세한 내역이 출력됩니다.

```bash
$ zplug load
or
$ zplug load --verbose
```

플러그인 업데이트: `zplug update`
플러그인 리스트 출력: `zplug list`

그 외 명령어는 공식 문서를 참고하시기 바랍니다.

## Hyper

[공식 사이트](https://hyper.is/)

Hyper는 iTerm 보다 성능면에서는 떨어질 수 있으나 디자인면에서는 뛰어나며, Electron으로 Javascript, css, html을 기반으로 개발된 오픈소스 터미널 앱입니다.

### 설치

공식 사이트에서 [다운로드](https://hyper.is/#installation)하거나 brew를 이용해 설치합니다

```bash
$ brew cask install hyper
```

### 설정 및 플러그인

`~/.hyper.js` 파일을 수정하여 설정 및 플러그인 추가를 할 수 있습니다.
폰트, 스타일 및 기타 설정 그리고 플러그인을 관리합니다.

아래는 본인이 사용중인 플러그인 목록입니다.

```
module.exports = {
  config: {
  opacity: 0.95,

  fontFamily: 'Hack, Menlo, "DejaVu Sans Mono", "DejaVu Sans Mono for Powerline", Consolas, "Lucida Console", monospace',

  // ...

  plugins: [
    `hypercwd`,
    `hyper-search`,
    // `hyper-statusline`,
    `hyper-quit`,
    `hyper-opacity`,
    `hyper-tab-icons`,
    `hyper-materialshell`
  ],

// ...
```

위 설정을 그대로 사용할 경우 미리 'Hack', 'Powerline' 폰트 설치가 필요합니다.

다양한 플러그인은 [awesome-hyper](https://github.com/bnb/awesome-hyper) 문서에서 확인할 수 있습니다.

여기까지 본인과 같은 설정을 했다면 최상단의 이미지와 같은 터미널을 보실 수 있습니다.
