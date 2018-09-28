---
title: Jekyll 블로그 시작하기 (MacOS, GitHub Page)
date: 2018-01-14 11:00:00 +0900
tags:
    - jekyll
    - blog
    - ruby
---

참고: 지금 계신 블로그는 기존 Jekyll을 이용한 블로그에서 현재(2018.09) Gatsby를 이용한 블로그로 개편되었습니다.  

---

원래는 Hexo 블로그 프레임워크를 사용하여 블로그를 시작하려했었다.  
Hexo를 사용하려던 이유는 Node.js 기반의 코드로 아는 분야이므로 코드 수정에 있어 이점이 있을거라고 생각한 이유가 컸다. 하지만 여러 테마를 둘러보고 커스터마이징 함에 있어 중국어라는 난관에 부딪쳤다. 제작사가 대만쪽이며 테마 제작자들도 대부분이 중국어권이라 문서를 보는데 큰 어려움이 있었다.

차선책으로 jekyll 블로그 프레임워크를 사용해보기로 했다.  
기본적으로 GitHub에서 지원하기 때문에 신뢰성이 높았고 Hexo보다는 대중적이라 생각되어 선택하였다.

아래는 jekyll 블로그를 시작하기위해 고군분투(?)한 내용이다.

## Ruby 설정

Ruby 설정 전에 `$ sudo gem install jekyll bundler` 명령어로 jekyll 설치가 정상적으로 진행되었다면 Ruby 설정은 넘어가도 된다
{: .notice--info}

우선 사용해보지 않은 Ruby를 사용하기 위해 설정에 들어갔다.

MacOS에서는 기본적으로 Ruby를 지원하지만, 그냥 사용하여 Jeklly를 설치하려했더니 권한 문제등 에러가 많아 Ruby 버전 매니저인 RVM을 통해 새로운 Ruby 설치 및 설정을 해보았다.

해야할 과정들을 요약하면 아래와 같다  
1. RVM 설치   
`$ \curl -sSL https://get.rvm.io | bash -s stable` 
2. Ruby 설치  
`$ rvm install 2.5.0` 
3. 설치된 버전 기본 사용 설정  
`$ rvm --default use 2.5.0`

하지만 이 과정 중 생각보다 오류가 많이 발생했다.  
이 아래는 오류를 겪는 과정과 해결 과정이다.

### RVM, Ruby 설치

```
$ \curl -sSL https://get.rvm.io | bash -s stable
```

위 명령어를 통해 RVM을 설치하였다.  
다음으로는 rvm을 통해 버전 2.5.0의 Ruby 설치를 시도하였다.

```
$ rvm install 2.5.0
```

허나 `command not found: rvm` 오류 발생, rvm이 설치가 잘못된 것일까
구글링을 통해 해결 방법을 알아내었고 아래와 같다.

```
$ source ~/.rvm/scripts/rvm
$ type rvm | head -n 1
"rvm ~ function ~" 이와 비슷한 출력시 완료
```

이제 다시 다시 루비 설치를 시도하였다.

```
$ rvm install 2.5.0
```

그러나 아래와 같은 오류 발생, 일단 위의 오류는 해결한 것이고 다른 오류가 발생한 것이다.

```
Error running 'requirements_osx_brew_libs_install autoconf automake libtool pkg-config coreutils libksba openssl@1.1',
please read /Users/junhobaik/.rvm/log/1515943113_ruby-2.5.0/package_install_autoconf_automake_libtool_pkg-config_coreutils_libksba_openssl@1.1.log
Requirements installation failed with status: 1.
```
해결을 위해 아래 명령어 입력

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

위 명령어의 설치 작업으로 다소 시간이 소요되었고 다시 루비 설치를 시도하였다.

```
$ rvm install 2.5.0
```

드디어 설치 성공, 그리고 아래 명령어를 통해 설치된 버전을 기본 사용 설정을 해둔다.

```
$ rvm --default use 2.5.0
```

<br/>

## Jekyll 설치

`$ sudo gem install jekyll bundler`

위의 명령어를 통해 `jekyll`와 `bundler`를 설치한다.

이로써 설치 작업은 끝났다.


## Github Page와 연동

우선 Github Page를 사용하여 배포하기 위해 미리 `username.github.io` 리포지토리를 준비해두었고, 빈 리포지토리를 로컬에 git clone 해두었다.

```
$ jekyll new username.github.io
```

위 명령어를 통해 jekyll init이 되었고 이제 블로그를 시작할 수 있는 상태가 되었다.

또한 아래 명령어를 통해 로컬에서 테스트가 가능하다.

```
jekyll serve
```

다음 포스트에서는 테마 적용을 해보려 한다.
