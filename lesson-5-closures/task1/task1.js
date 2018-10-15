let cell = '#';
let lineBreak = '\n';
let space = " ";
let result = ""; // сюда будет присвоен конечный результат
let lines = 8;   // количество строк
let sizeString = 8; // количество символов в строке
/*
  for (let y = 0; y < lines; y++) { // цикл для рядов ( у нас их 8 )
    for (let x = 0; x < sizeString; x++) { // цикл для символов в строке
      if (x % 2 === y % 2) { //тут определяется позиция элемента. Если позиция четная и по вертикали и по горизонтали, то ...
        result += cell;
      } else {
        result += space;
      }
    }
    result += lineBreak; // отработал цикл для символов в строке и происходит перенос строки
  }

console.log(getBroad(10, 10));
*/
function getBroad(lines, sizeString, space, cell) {
  for (let y = 0; y < lines; y++) {
    for (let x = 0; x < sizeString; x++) {
      if (x % 2 === y % 2) {
        result += cell;
      } else {
        result += space;
      }
    }
    result += '\n';
  }
}

getBroad('100', '100', ' ', '#');
console.log(result);