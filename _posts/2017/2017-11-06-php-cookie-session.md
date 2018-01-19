---
title: PHP Cookie, Session
date: 2017-11-06
tags: 
  - php
---

## PHP - Cookie, Session

### Cookie

클라이언트(브라우저)에 데이터를 저장한다.  
`setCookie(Key_String, Value_String)`  
`$_COOKIE`

```php
<?php
  setCookie('user', 'baik');
  echo $_COOKIE['user']; // baik
?>
```

#### 위 코드의 문제점

위 코드가 HTML 코드 안에 포함되어있다면 

`Warning: Cannot modify header information ...`

위와 같은 Warning을 만나게 되는데 HTML 코드 바깥으로 setCookie() 를 옮기면 해결할 수 있다 자세한 내용은 [링크](https://stackoverflow.com/questions/2658083/setcookie-cannot-modify-header-information-headers-already-sent) 참고.

이 경고는 session에서도 동일하게 발생한다.

### Session

SessionID(SID)를 식별자로 서버에 데이터를 저장

SID로는 쿠키나 도메인 파라미터를 사용

`session_start();`로 시작, 스크립트의 최상단에 위치해야함

`$_SESSION`

데이터는 서버 내에 파일이나 DB에 저장

주로 사용자 인증시에 사용함

```php
<?php
session_save_path('./session');
session_start();
$_SESSION['name'] = 'baik';
echo $_SESSION['name'];
?>
```

#### 간단한 로그인 예제

- login.html

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
  </head>
  <body>
    <form action="login_process.php" method="POST">
      <p><label>아이디</label><input type="text" name="id" /></p>
      <p><label>비밀번호</label><input type="text" name="pwd" /></p>

      <input type="submit" />
    </form>
  </body>
</html>
```

- login_process.php

```php
<?php
session_start();
$id = 'id';
$pwd = 'pw';
if(!empty($_POST['id']) && !empty($_POST['pwd'])){
    if($_POST['id'] == $id && $_POST['pwd'] == $pwd){
        $_SESSION['is_login'] = true;
        $_SESSION['nickname'] = 'nick';
        header('Location: ./session.php'); //redirection
        exit;
    }
}
echo '로그인 하지 못했습니다.';
?>
```

- session.php

```php
<?php
session_start();
if(!isset($_SESSION['is_login'])){
    header('Location: ./login.html');
}
?>
    <html>

    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        <?php echo $_SESSION['nickname'];?>님 환영합니다
        <br />
        <a href="./logout.php">로그아웃</a>
    </body>

    </html>
```

- logout.php

```php
<?php
ini_set("display_errors", "1");
session_start();
session_destroy();
header('Location: ./login.html');
?>
```

## Reference

- [생활코딩 PHP 기본 강의](https://opentutorials.org/module/6)