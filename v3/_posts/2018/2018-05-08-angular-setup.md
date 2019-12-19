---
title: Angular 시작하기 (개발 환경 구성)
date: 2018-05-08 19:03:00 +0900
tags: angular
---

Angular 개발을 시작하기 전, 개발에 앞서 개발 환경 구성과 간단한 사용을 먼저 해보자.


## TypeScript

Augular를 본격적으로 하기 전 TypeScript를 설치하기로 하자.

타입스크립트는 동적 타입 언어인 자바스크립트에 명시적으로 타입 선언이 가능하도록 정적 타입 언어의 장점을 가지게 된 언어이다.  

Angular(!= AngularJS)는 TypeScript를 베이스로 만들어졌고,  
왜 앵귤러에 타입스크립트인지는 아래 링크의 글을 읽어보면 좋을 것이다.

[Angular: Why TypeScript](https://github.com/not-for-me/til/blob/master/angular2/translations/writing_angular2_in_typescript.md)

### 설치

아래 명령어를 사용하여 타입스크립트를 설치하자.

```shell
$ npm install -g typescript
```

글로벌 설치를 선호하지 않는다면 프로젝트내 설치하는 방법도 물론 괜찮다.

글로버 설치를 했다면 이제 `tsc test.ts`와 같이 명령어로 타입스크립트를 컴파일 할 수 있다.

만약 프로젝트 내 설치를 했다면 npm script에서 `"tsc test.ts"` 와 같이 스크립트를 추가하거나, 
콘솔 환경에서 `node_modules/.bin/tsc test.ts`와 같이 컴파일이 가능하다.

아래 기술하는 내용들은 글로벌 설치를 전제로 설명하게 된다.

### 설정

```shell
$ tsc --init
```

이제 프로젝트 내에서 위 명령어로 설정 파일(`tsconfig.json`)을 생성할 수 있다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
      ...
```

어떤 자바스크립트 버전으로 컴파일 할건지 등 설정 파일 안에는 다양한 설정이 가능한데 앵귤러 개발 환경 구성 포스팅이므로 자세한 설정 방법은 생략하겠다.

### TSLint

추가적으로 TSLint를 사용하여 Lint 기능을 사용하는 것도 좋은 방법이다.

npm으로 설치하거나, Visual Studio Code와 같이 타입스크립트와 호환이 좋은 에디터에서 TSLint를 사용하면 좀 더 판하게 개발 할 수 있다.

### 간단한 사용

자바스크립트를 쓰는 것과의 차이점을 위해서 매우 간단한 예제를 살펴보자.

```javascript
const n = 1;
const s = '1';

console.log(n == s);
```
숫자 1과 문자 1을 비교하는 (Strict 비교 아님) 코드가 있고

만약 이것이 자바스크립트 파일(.js)라고 가정하면 결과는 **true**가 될 것이다.  
그리고 이것이 타입스크립트 파일(.ts)라고 가정하면 아래와 같은 결과를 얻을 수 있다.  

우선 TSLint가 `==`가 아닌 `===`를 사용하라고 알려줄 것이고,  
그리고 무시하고 컴파일을 진행한다면 아래와 같은 에러가 발생한다.

```shell
error TS2365: Operator '==' cannot be applied to types '1' and '"1"'.
```

숫자와 문자열을 비교할 수 없다는 의미이다.

클래스 등 좀 더 다양한 예제는 아래 링크에서 확인하면 좋다.

[TypeScript PlayGround](http://www.typescriptlang.org/play/)







## Angular CLI

### 설치 및 프로젝트 생성

Angular CLI를 이용해 앵귤러 개발을 시작하는 방법이다.

```shell
$ npm install @angular/cli -g
$ ng --version
```

`ng new` 명령어를 통해 기본적인 코드와 설정이 되어있는 앵귤러 프로젝트를 생성할 수 있다.

```shell
$ ng new auglar-start-cli
$ cd angular-start-cli
```

### 개발 서버

이제 이렇게 생성된 프로젝트에서 아래 명령어를 통해 로컬 개발 서버를 켤 수 있다.

```shell
$ ng serve
** Angular Live Development Server is listening on localhost: 4200, open your browser on http://localhost:4200/ **
```

그리고 출력된 주소로 가서 정상적으로 출력이 되고 있는지 확인해보자.

### 기타 명령어

생성된 프로젝트에서 컴포넌트 및 서비스를 생성한다면 직접 하는 방법도 있지만,  
Angular CLI의 기본 구조대로 뷰, 컴포넌트(or Service), 스타일, 테스트 파일을 생성해주는 명령어가 있다.

```shell
# 컴포넌트 생성
$ ng generate component COMPONENT_NAME
# 서비스 생성
$ ng g service SERVICE_NAME
# generate는 g로 줄여 사용할 수 있다.
```

예로 이렇게 생성된 컴포넌트는 아래와 같은 구조를 가진다
```javascript
- home
  - home.component.html // View
  - home.component.ts // Component
  - home.component.spec.ts // Test
  - home.component.css // Style
```

---

## References
- 서적 '앵귤러 첫걸음' 한빛소프트
- [Angular official](https://angular.io/guide/quickstart)
