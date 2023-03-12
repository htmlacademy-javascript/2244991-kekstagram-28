//Функция для проверки длины строки

function getStringlength (string, length) {
  return (string.length <= length);
}

getStringlength();

// Функция для проверки, является ли строка палиндромом

function testPalindrome (string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let string2 = '';

  for (let i = -1 ; i >= -string.length; i--) {
    string2 = string2 + string.at(i);
  }

  return string === string2;
}

testPalindrome();

//Функция которая принимает строку и возвращает цифры от 0 до 9 в виде целого положительного числа

function letOnlyNumber (number) {
  number = number.replace(/[^\d]/gi, '');
  const i = parseFloat(number);
  return (i);
}

letOnlyNumber ();


//функция для формирования адресов файлов

function makeAdressFile (string, minLength, symbolString) {

  while (string.length < minLength) {
    if (string.length + symbolString.length > minLength) {
      symbolString = symbolString.slice(0, minLength - string.length);
    }
    string = symbolString + string;
  }
  return(string);
}

makeAdressFile();
