# korean-numeric

**korean-numeric**는 한글 숫자와 일상적인 수 표현(한글, 구어체, 숫자 혼용)을 아라비아 숫자로 변환하는 JavaScript 라이브러리입니다.

**korean-numeric** is a JavaScript library that converts Korean numbers written in Hangul, spoken form, or mixed with digits into Arabic numerals.

- Handles values up to 조 (1 trillion)
- Suitable for voice recognition, chatbots, and financial tools

## Installation

```bash
npm install korean-numeric
```

## Usage

### CommonJS

```javascript
const korNum = require("korean-numeric");
console.log(korNum.tonumber("2억")); // 200000000
```

### ES Modules

```javascript
import korNum from "korean-numeric";
console.log(korNum.tonumber("2억")); // 200000000
console.log(typeof korNum.tonumber("2억")); // number
```

### Numbers written in Hangul

```javascript
console.log(korNum.tonumber("삼십만")); // 300000
console.log(korNum.tonumber("사십 만")); // 400000
console.log(korNum.tonumber("오 십 만")); // 500000
```

### Numbers mixed with Hangul and Arabic numerals

```javascript
console.log(korNum.tonumber("7십팔만 6천원")); // 786000
console.log(korNum.tonumber("5십오만")); // 550000
```

### Numbers in colloquial form

```javascript
console.log(korNum.tonumber("만원")); // 10000
console.log(korNum.tonumber("일이삼사, 오육칠팔")); // 12345678
```

### Decimal points

```javascript
console.log(korNum.tonumber("3십만점칠칠")); // 300000.77
console.log(korNum.tonumber("3십만.칠칠")); // 300000.77
console.log(korNum.tonumber("1.0987.01")); // 1.098701
console.log(korNum.tonumber("이십.구점5")); // 20.95
```

- It recognizes the first '점' or '.' character as the decimal point. Even if there are multiple '점' or '.', only the first one is considered as the decimal point.

### Other details

```javascript
console.log(korNum.tonumber("기백만원")); // 1000000
console.log(korNum.tonumber("우노 도스 트레")); // 0
```

- Removes non-numeric characters
- Returns 0 if there is no data

## API

### `tonumber(input)`

This function converts a Korean numeral string into an Arabic numeral. It internally handles all the steps required to transform Korean numerals into their conventional numeric counterparts.

- **Parameters**
  - `input` (string): The Korean numeral string to convert.
- **Returns**
  - (number): The value of the Korean numeral string converted into an Arabic numeral.

## License

This project is provided under the MIT License.
