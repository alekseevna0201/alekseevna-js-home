'use strict';

var questions = {
  1: 'В каком году родился Виктор Цой?',
  2: 'В каком году убили Кеннеди?',
  3: 'На какую цифру начинается число Пи?',
  4: 'Какой сейчас год?'
}
/*
var allAnswers = {

};
*/
function Question(question, rightAnswer) {
  this.question = prompt(question);
  this.answer = [1, 2, 3, 4];
  this.rightAnswer = rightAnswer;
  if (question === rightAnswer) {
    console.log('Это правильный ответ!')
  } else if (question !== rightAnswer) {
    console.log('Это неправильный ответ! Вы - самое слабое звено!')
  } else {
    console.log('Введите ваш ответ корректно')
  }
}

var question = new Question (questions[1] + '\n  1.1962  \n  2.1963  \n  3.1964  \n  4.1965' , 1962);

Question();