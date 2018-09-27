'use strict';

var mainQuestions = {
  Coi: {
    question:'В каком году родился Виктор Цой?',
    rightAnswer: '1962',
    variantsAnswer: [1962, 1963, 1965]
  },
  Kennedy: {
    question: 'В каком году убили Кеннеди?',
    rightAnswer: '1963' ,
    variantsAnswer: [1963, 1968, 1970]
  },
  year: {
    question: 'Какой сейчас год?',
    rightAnswer: '2018' ,
    variantsAnswer: [2019, 2017, 2018]
  }
};

function Question(question, variantsAnswer, rightAnswer) { //функцию додумать
  this.question = prompt(question + '\n' + variantsAnswer[0]+ '\n' + variantsAnswer[1]+ '\n'  + variantsAnswer[2]);
  this.rightAnswer = rightAnswer;
  if (this.question === this.rightAnswer) {
    console.log('Это правильный ответ!')
  } else if (this.question !== this.rightAnswer) {
    console.log('Это неправильный ответ! Вы - самое слабое звено!')
  } else if ((question === "") || (question == null)) {
    console.log('Введите ваш ответ корректно')
  }
}

var game = new Question(mainQuestions.Coi.question, mainQuestions.Coi.variantsAnswer, mainQuestions.Coi.rightAnswer);
var gameSecond = new Question(mainQuestions.year.question, mainQuestions.year.variantsAnswer, mainQuestions.year.rightAnswer);
var gameThird = new Question(mainQuestions.Kennedy.question, mainQuestions.Kennedy.variantsAnswer, mainQuestions.Kennedy.rightAnswer);

