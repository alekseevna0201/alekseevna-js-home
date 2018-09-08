var lastName = prompt('Введите вашу фамилию');
var firstName = prompt('Введите ваше имя');
var patronymic = prompt('Введите ваше отчество');
var ageYears = prompt('Введите ваш возраст', '20');
var gender = confirm('Ваш пол - мужской?');
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