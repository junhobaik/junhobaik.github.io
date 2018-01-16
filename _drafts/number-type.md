# Javascript Number type

Javascript는 Java와 달리 int, double 같은 숫자 타입이 나눠져있지 않다.
number 하나로 정수(Integer)와 부동 소수점 수를 모두 표현한다.



### 숫자 리터럴

```javascript
var n = 12 //12
n = 12. //12
n = 12.0 //12
n = 12.300 //12.3
n = 0.12 //0.12
n = .12 //0.12
```

.12, 12. 과 같은 방식은 틀린 것은 아니더라도 좋은 코드라고 하긴 어려울 것이다.



### Number Methods

#### - Number.isInteger()

정수인지 확인할 수 있는 메서드.

```javascript
var n = 12;
Number.isInteger(n); // true
n = .12;
Number.isInteger(n); // false
```
#### - Number.isSafeInteger()   **/\*ES6\*/**

안전한 정수값인 `-(253 - 1)` 부터 `253 - 1` 사이의 정수 값인지 확인하는 메서드, ES6에서 출현하였다.

```javascript
Number.isSafeInteger(100);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
```

#### - Number.toFixed()

인자로 넘긴 수 만큼의 소수점 이하를 반올림하여 문자열 형태로 반환하는 메서드.

```javascript
var n = 12.39;
n.toFixed(0); //"12"
n.toFixed(1); //"12.4"
n.toFixed(2); //"12.39"
n.toFixed(3); //"12.390"
```

#### - Number.toPrecision()

수의 길이를 제한하여 문자열로 반환한다.

```javascript
var n = 12.39;
n.toPrecision() //"12.39"
n.toPrecision(1) //"1e+1"
n.toPrecision(2) //"12"
n.toPrecision(3) //"12.4"
n.toPrecision(4) //"12.39"
```

#### - Number.toExponential()

수를 지수표현식 문자열으로 반환한다.

```javascript
var n = 10000000000;
n; // 10000000000
n.toExponential(); //"1e+10"
```



---



### 0.5 === 0.2 + 0.3 // false ??

Java나 타 언어를 배워봤다면 한번은 봤을만한 질문이다. 

0.5와 같은 부동 소수점 수는 결국 프로그래밍 언어에서는 0.5000000001과 같이 0.5와 가까운 수이기 때문이라는 것인데...

Javascript에서는 어떨까?

아래는 크롬 브라우저(2017.10 최신버전)의 콘솔창 결과이다.

```javascript
0.0000005 === 0.0000002 + 0.0000003;
true
0.000005 === 0.000002 + 0.000003;
false
0.00005 === 0.00002 + 0.00003;
true
0.0005 === 0.0002 + 0.0003;
true
0.005 === 0.002 + 0.003;
true
0.05 === 0.02 + 0.03;
true
0.5 === 0.2 + 0.3;
true

0.1 + 0.2 === 0.3
false

1.2 - 1 
0.19999999999999996
1.5 - 0.5
1
```

모두 true 이길 바라지만 결과는 그렇지 않다. 더 어려운 것은 모두 false도 아니라는 것이다.

어떤 것은 true이고 어떤 것은 false인 이러한 이유는 아직까지 정확하게 찾지 못했지만 부동 소수점 수의 계산에 있어 조심해야한다는 것을 알 수 있다.



##### 해결 방법

```javascript
(1.2 - 1).toFixed(1) * 1 // 0.2
(1.1000001 - 1).toFixed(7) * 1 // 0.1000001
```

Number의 메서드를 사용하여 위와 같은 방법으로 해결하는 방법도 있다.

