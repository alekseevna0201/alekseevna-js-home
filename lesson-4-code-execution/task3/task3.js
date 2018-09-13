let array = [];
let firstNumber = prompt('Введите первое число');
while (true) {
  let first = parseInt(firstNumber);
  if (!isNaN(first) || (first === "") || (first == null)) {
    break;
  }
  firstNumber = prompt('введите число правильно');
}
let secondNumber = prompt('Введите второе число');
while (true) {
  let second = parseInt(firstNumber);
  if (!isNaN(second) || (second === "") || (second == null)) {
    break;
  }
  firstNumber = prompt('введите число правильно');
}
let thirdNumber = prompt('Введите третье число');
while (true) {
  let third = parseInt(firstNumber);
  if (!isNaN(third) || (third === "") || (third == null)) {
    break;
  }
  firstNumber = prompt('введите число правильно');
}
array.push(firstNumber, secondNumber, thirdNumber);
alert(+array[0] + +array[1] + +array[2]);