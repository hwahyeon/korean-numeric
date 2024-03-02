# korean-numeric
**korean-numeric**는 한글로 표기된 수를 아라비아 숫자로 변경하는 JavaScript 라이브러리입니다. <br> **korean-numeric** is a JavaScript Library that converts numbers expressed in Korean text to Arabic numbers.
- ①한글로 작성된 수, ②구어체로 된 수, ③한글과 아라비아 숫자가 혼용된 수 등을 지원합니다.
- 조 단위까지의 수를 지원합니다.
- 음성 인식 기능, 챗봇, 환율 계산기 등의 환경에서 편리하게 사용할 수 있습니다.
<br/>
- It supports ① numbers written in Hangul, ② numbers in spoken language form, and ③ numbers that mix Hangul and Arabic numerals.
- It supports numbers up to the unit of 조 (10,000,000,000).
- It can be conveniently used in environments such as voice recognition features, chatbots, and currency converters.

## Installation

```bash
npm install korean-numeric
```

## Usage
```javascript
const korNum = require('korean-numeric');
console.log(korNum.tonumber("2억")) // 200000000
```
OR
```javascript
import korNum from 'korean-numeric'
console.log(korNum.tonumber("2억")) // 200000000
console.log(typeof(korNum.tonumber("2억"))) // number
```
### 한글로 작성된 수
```javascript
  console.log(korNum.tonumber("삼십만"))   // 300000
  console.log(korNum.tonumber("사십 만"))  // 400000
  console.log(korNum.tonumber("오 십 만")) // 500000
```
### 한글과 아라비아 숫자가 혼용된 수
```javascript
  console.log(korNum.tonumber("7십팔만 6천원")) // 786000
  console.log(korNum.tonumber("5십오만"))       // 550000
```
### Decimal points
```javascript
  console.log(korNum.tonumber("3십만점칠칠"))  // 300000.77
  console.log(korNum.tonumber("3십만.칠칠"))   // 300000.77
  console.log(korNum.tonumber("1.0987.01"))   // 1.098701
  console.log(korNum.tonumber('이십.구점5'))   // 20.95
```
- 맨 처음에 오는 '점' 혹은 '.' 문자를 인식합니다. '점'과 '.'이 여러 개여도 오로지 맨 처음에 오는 문자를 소수점 기준으로 삼습니다.
### 기타 사항
```javascript
  console.log(korNum.tonumber("기백만원"))   // 1000000
  console.log(korNum.tonumber("우노 도스 트레")) // 0
```
- 숫자와 관련없는 글자는 삭제됩니다. <br> Removes non-numeric characters
- 데이터가 없으면 0을 반환합니다. <br> Returns 0 if there is no data
### 구어체로 된 수
```javascript
  console.log(korNum.tonumber("만원")) // 10000
  console.log(korNum.tonumber("일이삼사, 오육칠팔")) // 12345678
```

## API
### `tonumber(input)`
This function converts a Korean numeral string into an Arabic numeral. It internally handles all the steps required to transform Korean numerals into their conventional numeric counterparts.

- **Parameters**
  - `input` (string): The Korean numeral string to convert.
- **Returns**
  - (number): The value of the Korean numeral string converted into an Arabic numeral.

## License
This project is provided under the MIT License.
