// 1 задача "Функция для проверки длины строки."
// Она принимает строку, которую нужно проверить, и максимальную длину
// и возвращает true, если строка меньше или равна указанной длине, и false,
// если строка длиннее.

function lengthLineChecker(string, maxLength) {
  return string.length <= maxLength;
}

// 2 задача "Функция для проверки, является ли строка палиндромом"

function palindromeChecker(string) {
  string = string.replaceAll(' ', '').toUpperCase();
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }
  return string === reversedString;
}
// 3 задача Функция принимает строку, извлекает содержащиеся в ней цифры
// от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:

const extractNumber = (string) => {
  let result = '';
  string = string.toString().replaceAll(' ', '');
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

console.log('\n--- Тесты для lengthLineChecker ---');
console.log(
  `Строка меньше или равна 10: ${lengthLineChecker('Привет', 10) === true}`
);

console.log('\n--- Тесты для palindromeChecker ---');
console.log(
  `Строка является палиндромом: ${palindromeChecker('топот') === true}`
);
console.log(
  `Строка является палиндромом с разным регистром: ${
    palindromeChecker('ДовОд') === true
  }`
);
console.log(
  `Строка не является палиндромом: ${palindromeChecker('Кекс') === false}`
);
console.log(
  `Строка является палиндромом: ${
    palindromeChecker('Лёша на полке клопа нашёл ') === true
  }`
);

console.log('\n--- Тесты для getNumber ---');
console.log(
  `Аргумент начинается с числа: ${extractNumber('2023 год') === 2023}`
);
console.log(
  `Аргумент заканчивается на число: ${
    extractNumber('ECMAScript 2022') === 2022
  }`
);
console.log(
  `Аргумент содержит несколько чисел, в том числе и с плавющей точкой: ${
    extractNumber('1 кефир, 0.5 батона') === 105
  }`
);
console.log(
  `Аргумент закначивается на число с нолями: ${
    extractNumber('агент 007') === 7
  }`
);
console.log(`Аргумент строка без чисел: ${isNaN(extractNumber('а я томат'))}`);

console.log(`Аргумент число: ${extractNumber(2023) === 2023}`);
console.log(`Аргумент отрицательное число: ${extractNumber(-1) === 1}`);
console.log(`Аргумент число с плавющей точкой: ${extractNumber(1.5) === 15}`);
