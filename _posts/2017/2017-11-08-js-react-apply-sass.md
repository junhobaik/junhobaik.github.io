---
title: React 프로젝트에 SASS 적용하기
date: 2017-11-08
---

# React 프로젝트에 SASS 적용하기

## 환경

- Create-react-app (CRA)
- SCSS 로 적용




## 적용법

### react 설정 eject & sass 패키지 설치

1. `$ npm run eject` 를 실행한다.
   해당 명령어는 `node_modules/react-scripts`에 위치하던 환경설정을 프로젝트 루트 경로로 이동시켜 상세한 환경설정이 가능하도록 한다.
2. `npm install --save node-sass sass-loader`  두개의 패키지를 설치한다.
   - node-sass : sass 코드를 css 코드로 변환
   - sass-loader : webpack에서 sass 파일을 읽는 역할.


### 코드 수정

#### `config/webpack.config.dev.js` 

file-loader 키워드를 찾아 아래 코드에서 exclude 배열에 ` /\.scss$/`를 추가해준다.

```javascript
{
  // exclude: [/\.js$/, /\.html$/, /\.json$/] 
  exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss$/],
    loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
},
```

`test: /\.css$/` 키워드를 찾아 아래 코드를 수정한다.

- `test: /\.css$/`를 `test: /\.scss$/`로 수정한다.
- postcss-loader 로더 아래 sass-loader 로더 코드를 추가한다


```javascript
module : {
  //...
    {
      // test: /\.css$/,
      test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          // 아래 4줄 코드 추가
          {
            loader: require.resolve('sass-loader'),
            options: {}
          }
          // 
        ],
    },
    /...
}
```



#### `config/webpack.config.prod.js` 

위 dev 설정 파일과 비슷하게 수정한다.

- file-loader 키워드를 찾아 아래 코드에서 exclude 배열에 ` /\.scss$/`를 추가해준다.
- `test: /\.css$/` 키워드를 찾아 코드를 수정한다.
  - `test: /\.css$/`를 `test: /\.scss$/`로 수정한다.
  - postcss-loader 로더 아래 sass-loader 로더 코드를 추가한다



## 사용

기존의 css 파일을 scss로 확장자 변경하여 사용할 수 있다.

또한 설정 변경 전 `npm start`가 실행중이었다면 새로 시작해주어야한다.



[SASS Documentation (Ko)](https://sass-guidelin.es/ko/)

[SASS Official Site](http://sass-lang.com/)





---

## Reference

[리액트 컴포넌트 스타일링 – CSS Module / Sass / styled-components](https://velopert.com/3447)