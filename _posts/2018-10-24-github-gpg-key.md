---
title: GitHub에 GPG 서명 등록하기 (macOS)
date: 2018-10-24
tags:
  - github
keywords:
  - Github gpg
  - github gpg key
---

## GPG 키 생성하기

우선 Homebrew 를 통해 gpg 패키지를 설치한다

```shell
$ brew install gpg
```

설치가 완료되면 아래 명령어를 통해 GPG Key 를 생성한다.

```shell
$ gpg --full-generate-key
```

아래 자세한 생성하는 과정이 나와있고, 간단히 요약하면 이러하다.

- 암호화 방식 선택 (권장: 1)
- 암호화 키 크기 선택 (권장: 4096)
- 키 유효기간 설정 (권장: 0) // Enter 입력하여 패스
- 이름, 이메일, 코멘트(공란 가능) 입력
- 이후 보안 암호 문구 작성 창에서 암호 입력 (분실시 필요한 암호같은 것으로 여기선 중요하지 않다)

```shell
Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
Your selection? 1


RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096


Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0)


GnuPG needs to construct a user ID to identify your key.

Real name: Junho Baik
Email address: junhobaik@gmail.com
Comment:
You selected this USER-ID:
    "Junho Baik <junhobaik@gmail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
```

위의 과정을 마치고 나면 키가 생성되었고,

이제 아래 명령어(`gpg --list-secret-keys --keyid-format LONG`)를 이용하여 생성한 Public Key, Secret Key 를 확인한다.

```shell
$ gpg --list-secret-keys --keyid-format LONG

-----------------------------------
sec   rsa4096/ABCDE12345678900 2018-10-24 [SC]
      AFWAEGWEGWAEDVADKAWGJIWRGLWJRGAIWALGRHRG
uid                 [ultimate] Junho Baik <junhobaik@gmail.com>
ssb   rsa4096/AGRJIWGJWRGJIRWG 2018-10-24 [E]
```

위의 예제에서 `ABCDE12345678900` 부분을 복사하고 아래 명령어에 넣는다.

```shell
$ gpg --armor --export ABCDE12345678900
```

위 명령어를 입력한 후 나오는 키를 복사한다,  
`-----BEGIN PGP PUBLIC KEY BLOCK-----`부터 `-----END PGP PUBLIC KEY BLOCK——.`를 포함해서 모두 복사하여야 한다.

```shell
 -----BEGIN PGP PUBLIC KEY BLOCK-----

 // Key Code...

 -----END PGP PUBLIC KEY BLOCK-----.
```

## GitHub 에 GPG Key 등록

GitHub - Settings - [SSH and GPG keys](https://github.com/settings/keys)

위의 메뉴로 진입하여 GPG Keys 부분의 new GPG key 버튼을 클릭하고 복사한 키를 등록한다.

## Git 에 GPG Key 등록

아래 명령어를 통해 `~/.gitconfig`에 gpg 정보를 입력한다.

여기서 `ABCDE12345678900`에 해당하는 것은 위에서 확인한 Key 부분이며, 본인의 것을 입력한다.

```shell
$ git config --global user.signingkey ABCDE12345678900
```

이제 등록이 되었고, 이후 commit 부터는 `-S` 플래그를 넣음으로 서명을 적용한 Commit 을 보낼 수 있다.

```shell
$ git commit -S
```

아래 명령어를 이용하면 `-S` 플래그를 번번히 넣지 않아도 항상 서명이 적용한 Commit 을 보내게 된다.

```shell
$ git config --global commit.gpgsign true
```

## Mac에서 Commit이 안될때

1. pinentry-mac 설치 `$ brew install pinentry-mac`
2. 1이 안될 시 GPG Suite 설치 [GPG Suite](https://gpgtools.org)

---

### References

- [Generating a new GPG key](https://help.github.com/articles/generating-a-new-gpg-key/)
- [GitHub 에서 GPG 서명하기 (for OS X)](https://medium.com/@Makart/github%EC%97%90%EC%84%9C-gpg-%EC%84%9C%EB%AA%85%ED%95%98%EA%B8%B0-for-os-x-4f45ad8f1a49)
