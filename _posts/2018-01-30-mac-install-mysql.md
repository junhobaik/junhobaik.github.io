---
title: 간단하게 MySQL 설치하기 (Mac, HomeBrew)
date: 2018-01-30 00:30:00 +0900
tags:
  - mysql
---

MacOS 재설치 후 기본적인 설정을 하면서 **간단히** 정리해본 MySQL 설치 과정


## MySQL 설치
```
$ brew install mysql
```

brew 명령어를 위한 HomeBrew 패키지 관리자 미설치시 아래 명령어를 통해 설치 필요  
`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`


## MySQL 설정
아래 명령어로 mysql을 시작합니다.
```
$ mysql.server start
```

아래 명령어로 기본 설정을 시작합니다.
```
$ mysql_secure_installation
```
이제 여러 질문들이 출력됩니다.  
출력에 대한 답은 본인이 한 방법으로만 간단하게 기술하겠습니다.

우선 아래의 과정에 앞서 정리해보자면 아래와 같습니다.
1. 비밀번호 복잡도 검사 과정 (n)
2. 비밀번호 입력 & 확인
3. 익명 사용자 삭제 (y)
4. 원격 접속 허용 (n)
5. test DB 삭제 (n)
6. 수정할 것이 있는가? (y or n)

아래는 위에 나타낸 과정의 자세한 내용입니다.

```
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No:
```
위의 과정은 복잡한 비밀번호 설정을 위한 과정을 거치겠냐고 묻는 과정이며,  
**No**로 스킵하였습니다.

```
Please set the password for root here.

New password:

Re-enter new password:
```
위의 과정은 루트 비밀번호를 입력하는 과정입니다.  
비밀번호와 비밀번호 확인란을 입력하게 됩니다.

```
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
```
익명 사용자를 삭제할 것인지 묻습니다.  
**y**를 입력하였습니다.

```
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
```
원격 접속을 허용할 것인지 묻습니다,  
로컬에서만 개발 예정이기에 **y**를 입력했습니다.

```
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.

Remove test database and access to it? (Press y|Y for Yes, any other key for No) :
```
test 데이터베이스 삭제를 묻고 있습니다.  
**No**를 입력하였습니다.

```
Reload privilege tables now? (Press y|Y for Yes, any other key for No) :
```
수정할 것이 있다면 위의 설정 과정을 다시 거칠 수 있습니다.  
**No**를 입력하였습니다.

```
All done!
```
위의 메세지와 함께 설정이 종료됩니다.

## MySQL 사용
```
$ mysql -u root -p
```
위 명령어 입력 후 루트 비밀번호를 입력하여 mysql을 사용할 수 있게 됩니다.
