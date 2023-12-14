# korean-numeric
- **korean-numeric**는 한글로 표기된 수를 아라비아 숫자로 변경하는 JavaScript 라이브러리입니다.
- ①한글로 작성된 수, ②구어체로 된 수, ③한글과 아라비아 숫자가 혼용된 수 등을 지원합니다.
- 조 단위까지의 수를 지원합니다.
- 음성 인식 기능, 챗봇, 환율 계산기 등의 환경에서 편리하게 사용할 수 있습니다.

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
### 기타 사항
```javascript
  console.log(korNum.tonumber("기백만원"))   // 1000000
  console.log(korNum.tonumber("우노 도스 트레")) // 0
```
- 숫자와 관련없는 글자는 삭제됩니다.
- 데이터가 없으면 0을 반환합니다.
### 구어체로 된 수
```javascript
  console.log(korNum.tonumber("만원")) // 10000
  console.log(korNum.tonumber("일이삼사, 오육칠팔")) // 12345678
```

## API
### `tonumber(input)`
한국어로 표현된 숫자 문자열을 아라비아 숫자(정수)로 변환하는 함수입니다. 이 함수는 한국어 숫자를 일반적인 숫자로 변환하는 모든 단계를 내부적으로 처리합니다.

- 매개변수
  - `input` (string): 변환할 한국어 숫자 문자열.
- 반환값
  - (number): 한국어 숫자 문자열이 아라비아 숫자로 변환된 값.

## License
This project is provided under the MIT License.
