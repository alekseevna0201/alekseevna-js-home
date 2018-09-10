'use strict';

var lastName = prompt('Введите вашу фамилию');
for (var i = 0; i < lastName.length - 1; i++) {
  if (typeof lastName[i] !== 'string') continue;
  lastName = prompt('Вы можете ввести только буквы');
}
var firstName = prompt('Введите ваше имя');
for (var i = 0; i < firstName.length - 1; i++) {
  if (typeof firstName[i] !== 'string') break;
  firstName = prompt('Вы можете ввести только буквы');
}
var patronymic = prompt('Введите ваше отчество');
for (var i = 0; i < patronymic.length - 1; i++) {
  if((/^\s*$/).test(patronymic)) {
    patronymic = prompt('попробуйте ещё раз')
  }
  else {
    break;
  }
}
/*do while работает корректней других способов, но я не смогла это применить к строкам , пробелам и так далее, не работало
* хотелось бы обсудить*/
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