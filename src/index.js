const UNIT_JO = 1000000000000;
const UNIT_EOK = 100000000;
const UNIT_MAN = 10000;

/**
 * Removes non-numeric and non-Korean number words from the input string and splits it
 * into two parts: the left part representing the integer and the right part representing
 * the fractional part separated by a '.' or '점' (dot).
 *
 * @param {string} input - The input string to process.
 * @returns {[string, string]} An array containing two strings. The first string
 * represents the integer part of the input string, and the second string represents
 * the fractional part. If no fractional part exists, the second string will be an empty string.
 */
function removeNonNumericWords(input) {
  const stringWithDots = input.replace(/점/g, ".");
  const numericWordsRegex = /[^\d십백천만억조일이삼사오육칠팔구.]+/g;
  const cleanedString = stringWithDots.replace(numericWordsRegex, "");

  // Keep only the '.' at the very beginning of the sentence and remove the rest.
  const firstDotIndex = cleanedString.indexOf(".");
  if (firstDotIndex >= 0) {
    const leftPart = cleanedString.slice(0, firstDotIndex);
    const rightPart = cleanedString.slice(firstDotIndex + 1).replace(/\./g, "");
    return [leftPart, rightPart];
  } else {
    return [cleanedString, ""];
  }
}

/**
 * Converts Korean number words (일-구) to their corresponding Arabic numerals (1-9).
 *
 * @param {string} input - The string containing Korean number words.
 * @returns {string} The string with Korean number words replaced by Arabic numerals.
 */
function replaceKoreanNumbers(input) {
  const numberMap = {
    일: "1",
    이: "2",
    삼: "3",
    사: "4",
    오: "5",
    육: "6",
    칠: "7",
    팔: "8",
    구: "9",
  };
  return input
    .split("")
    .map((char) => numberMap[char] || char)
    .join("");
}

/**
 * Splits a Korean number string into parts based on units like '억', '만', '천', '백', '십'.
 *
 * @param {string} input - The Korean number string to split.
 * @returns {string[]} An array of split parts of the Korean number.
 */
function splitKoreanNumber(input) {
  const regex = /(?:(.*억)?(.*만)?(.*천)?(.*백)?(.*십)?(.*))?/;

  // Split the input string using regular expressions.
  const matches = input.match(regex).slice(1);

  // Return as an array after filtering out non-empty parts.
  return matches.filter((part) => part);
}

/**
 * Converts a string containing a Korean number in units (0 to 9999) to an Arabic numeral.
 *
 * @param {string} input - The Korean number string to convert.
 * @returns {number} The Arabic numeral equivalent of the Korean number.
 */
function convertKoreanNumber(input) {
  const units = { 천: 1000, 백: 100, 십: 10 };
  input = input.replace(/(?<!\d)(천|백|십)/g, "1$1");

  let result = 0;

  Object.keys(units).forEach((unit) => {
    const index = input.indexOf(unit);
    if (index !== -1) {
      let number = parseInt(input.substring(0, index), 10);
      result += number * units[unit];
      input = input.substring(index + 1);
    }
  });

  // If there are remaining numbers, add them to the result.
  if (input.length > 0) {
    result += parseInt(input, 10);
  }

  return result;
}

/**
 * Calculates the total sum of an array of Korean number strings.
 *
 * @param {string[]} list - An array of Korean number strings.
 * @returns {number} The total sum of the numbers in the array.
 */
function totalNumberAddition(list) {
  let addition = 0;
  list.forEach((item) => {
    const lastChar = item[item.length - 1];

    switch (lastChar) {
      case "조":
        addition +=
          item === "조"
            ? UNIT_JO
            : convertKoreanNumber(item.slice(0, -1)) * UNIT_JO;
        break;
      case "억":
        addition +=
          item === "억"
            ? UNIT_EOK
            : convertKoreanNumber(item.slice(0, -1)) * UNIT_EOK;
        break;
      case "만":
        addition +=
          item === "만"
            ? UNIT_MAN
            : convertKoreanNumber(item.slice(0, -1)) * UNIT_MAN;
        break;
      default:
        addition += convertKoreanNumber(item);
    }
  });
  return addition;
}

/**
 * Converts a Korean number string to its Arabic numeral equivalent.
 *
 * @param {any} input - The input to convert. If not a string, it will be converted to one.
 * @returns {number} The Arabic numeral equivalent of the input.
 */
function tonumber(input) {
  if (typeof input !== "string") {
    input = String(input);
  }

  const [left, right] = removeNonNumericWords(input);

  const constants = totalNumberAddition(
    splitKoreanNumber(replaceKoreanNumbers(left))
  );

  const decimal = replaceKoreanNumbers(right);

  return Number(constants.toString() + "." + decimal.toString());
}

module.exports = {
  tonumber,
};
