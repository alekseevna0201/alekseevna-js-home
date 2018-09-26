'use strict';

var mainQuestions = {
  coi: {
    question:'В каком году родился Виктор Цой?',
    rightAnswer: '1962',
    variantsAnswer: [1962, 1963, 1965]
  },
  year: {
    question: 'Какой сейчас год?',
    rightAnswer: '2018' //добавить варианты ответов
  }
};

function Question(question, variantsAnswer, rightAnswer) { //функцию додумать
  this.question = prompt(question  + variantsAnswer); //придумать как записать ответ пользователя
  this.variantsAnswer = {
    firstVariant: '1',
    secondVariant: '2',
    thirdVariant: '3'
  };
  this.rightAnswer = rightAnswer;
  if (this.question === this.rightAnswer) {
    console.log('Это правильный ответ!')
  } else if (this.question !== this.rightAnswer) {
    console.log('Это неправильный ответ! Вы - самое слабое звено!')
  } else {
    console.log('Введите ваш ответ корректно')
  }
}

var quiz = new Question (mainQuestions.coi.question, mainQuestions.coi.variantsAnswer, mainQuestions.coi.rightAnswer);

Question();