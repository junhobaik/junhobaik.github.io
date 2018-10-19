---
title: Radio Button의 색상 등 css를 바꾸기
date: 2018-10-19
tags: css
keywords:
  - radio button css
  - radio button color
  - 라디오버튼
  - 라디오버튼 색
published: false
---

## 라디오 버튼의 스타일 바꾸기

검색을 통해 쉽게 얻을 수 있는 라디오 버튼의 스타일 바꾸는 것은 대부분 :after, :before 를 사용하는데,  
그렇게 되면 원하는대로 바꾸기가 쉽지 않고 원래의 개체가 노출되어 위치 조절을 해야하는 등 어려움이 있는데 아래 방법으로는 깔끔하고 원하는대로 가능하다.
css `appearence: none`을 시작으로 라디오 버튼을 수정하는 방법이다.

### HTML

```html
<div class="radio-wrap">
  <input type="radio" name="a" id="a"/>
  <label for="a">A</label>
</div>

<div class="radio-wrap">
  <input type="radio" name="a" id="a"/>
  <label for="a">A</label>
</div>
```

### CSS

```css
div.radio-wrap {
  display: inline-flex;
  align-items: center;
}

input[type='radio'],
input[type='radio']:checked {
  appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 100%;
  margin-right: 0.1rem;
}

input[type='radio'] {
  background-color: $white-color;
  border: 2px solid $font-color-3;
}
input[type='radio']:checked {
  background-color: $font-color-2;
}
```

### 정리

`input[type='radio'], input[type='radio']:checked`에 `appearance: none`을 함으로 모든 스타일이 제거된다.

그렇게 되면 세로를 기준으로 가운데 정렬되어 텍스트와 나란히 있던 것이 무너지게 되고 그를 위해서
div 로 감싸서 css 부분의 `div.radio-wrap{...}` 스타일 적용으로 가운데 정렬을 할 수 있다.

`input[type='radio'], input[type='radio']:checked`에 라디오 버튼의 크기 및 `border-radius` 등 주고싶은 공통 스타일을 주고
이제 각각의 `input[type='radio']`, `input[type='radio']:checked`에 원하는 색상, 테두리 등의 스타일을 적용해주면 된다.
