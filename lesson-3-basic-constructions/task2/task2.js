'use strict';

function checkString(str) {
  for (var i = 0; i < str.length; i++) {
    if ((typeof str === 'number') || (str === "") || (str === null) || (str === undefined)) {
      prompt('Повторите попытку');
    }
  }
}

var lastName = prompt('Введите фамилию');
checkString(lastName);

var firstName = prompt('Введите ваше имя');
checkString(firstName);

var patronymic = prompt('Введите ваше отчество');
checkString(patronymic);

do {
  var ageYears = prompt("Укажите ваш возраст:");
  if (isNaN(ageYears)){
    confirm("Введено не число. Попробуйте ещё раз.");
  } else {
    break;
  }
}while(true);
var gender = confirm('Вы мужчина?');
var result;
var ageDays;
var pension;
if (gender = true) {
  result = 'мужской'
}
else {
  result = 'женский'
}
ageDays = ageYears * 365;
pension = (ageYears >= 60) ? 'да': 'нет';
alert('ваше ФИО: ' + lastName + ' ' + firstName + ' ' + patronymic + '\n'+
  'ваш возраст в годах: ' + ageYears + '\n' +
  'ваш возраст в днях: ' + ageDays + '\n' +
  'через пять лет вам будет: ' + (+ageYears + +5) + '\n' +
  'ваш пол: ' +result + '\n' +
  'вы на пенсии: ' + pension );