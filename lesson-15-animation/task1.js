'use strick';

let ball = document.createElement('div');
let field = document.createElement('div');
field.style.width = '750px';
field.style.height = '400px';
field.style.left = '10px';
field.style.top = '0';
let button = document.createElement('input');
let score =  document.createElement('div');
let score1 = 0;
let score2 = 0;

function createGame () {
  createButton();
  createField();
  createBall();
  createScore();
}

// создание кнопки
function createButton() {
  button.setAttribute('type','button');
  button.setAttribute('value','старт!');
  document.body.insertBefore(button, script);
  button.addEventListener('click', start);
}

// создание игрового поля
function createField() {
  field.style.position = 'relative';
  field.style.border = '1px solid grey';
  field.setAttribute('id', 'field');
  field.style.backgroundColor = '#B8860B';

  document.body.insertBefore(field, script);
}

//мячик
function createBall () {
  ball.style.position = 'absolute';
  ball.style.backgroundColor = 'darkred';
  ball.style.width = '30px';
  ball.style.height = '30px';
  ball.style.borderRadius = '15px';
  let div = document.getElementById('field');
  div.appendChild(ball);

  //позиционируем мяч
  ball.style.left = (parseInt(field.offsetWidth)/2 - parseInt(ball.offsetWidth)/2) +'px';
  ball.style.top = (field.offsetHeight/2 - ball.offsetHeight/2) + 'px';
  ball.style.zIndex = '1';
  ball.speedBallX = 1;
  ball.speedBallY = 1;
}

function createScore () {
  document.body.insertBefore(score, script);
  score.style.position = 'relative';
  score.style.fontSize = '45px';
  score.style.left =  (parseInt(field.offsetWidth)/2 - parseInt(ball.offsetWidth)/2) +'px';
  score.innerHTML = score1 + ':' + score2; // вывод счета
}

// движение мяча
function start() {
  ball.style.left = (parseInt(field.offsetWidth)/2 - parseInt(ball.offsetWidth)/2) +'px';
  ball.style.top = (field.offsetHeight/2 - ball.offsetHeight/2) + 'px';
  clickTimer = setInterval(ballMoove, 5);
  ball.speedBallX = 1;
  ball.speedBallY = 2;
}

//создание ракеток
function Racket(color) {
  this.racket = init();

  function init() {
    let racket = document.createElement('div');
    racket.style.position = 'absolute';
    racket.style.width = '10px';
    racket.style.height = '100px';
    racket.style.backgroundColor = color;
    racket.style.borderRadius = '3px';
    field.appendChild(racket);
    return racket;
  }
}

let racket1 = new Racket('black');
racket1.racket.style.left = '0px';

let racket2 = new Racket('white');
racket2.racket.style.right = '0px';

let dist = field.offsetHeight/2 + racket1.racket.height/2 + 'px';
racket1.racket.style.top = dist;
racket2.racket.style.top = dist;

// управление ракетками

let keys = { // какие клавиши нужны
  shift: 16,
  ctrl: 17,
  up: 38,
  down: 40
};

window.addEventListener("keydown", byKey);

function byKey(event) {
  event = event || window.event;

  // Перемещение ракетки 1

  if (event.keyCode === keys.shift){ //двигается вверх по shift
    racket1.racket.style.top = parseInt(racket1.racket.offsetTop) - 10 + 'px';
    if (parseInt(racket1.racket.style.top) <= 0) { //если достиг конца поля, то отменяет обработчик
      racket1.racket.style.top = 0;
    }
  }
  else if (event.keyCode === keys.ctrl){ //двигается вниз по ctrl
    racket1.racket.style.top = parseInt(racket1.racket.offsetTop) + 10 + 'px';
    if ((parseInt(racket1.racket.offsetTop)+parseInt(racket1.racket.offsetHeight)) >=  parseInt(field.offsetHeight)) { //если достиг конца поля, то отменяет обработчик
      racket1.racket.style.top = field.offsetHeight - racket1.racket.offsetHeight+ 'px';
    }
  }

  // Перемещение ракетки 2
  if (event.keyCode === keys.up){ //двигается вверх по стрелке
    racket2.racket.style.top = parseInt(racket2.racket.offsetTop) - 10 + 'px';
    if (parseInt(racket2.racket.style.top) <= 0) { //если достиг конца поля, то отменяет обработчик
      racket2.racket.style.top = 0;
    }
  }
  else if (event.keyCode === keys.down){ //двигается вниз по стрелке
    racket2.racket.style.top = parseInt(racket2.racket.offsetTop) + 10 + 'px';
    if ((parseInt(racket2.racket.offsetTop)+parseInt(racket2.racket.offsetHeight)) >=  parseInt(field.offsetHeight)) { //если достиг конца поля, то отменяет обработчик
      racket2.racket.style.top = field.offsetHeight - racket2.racket.offsetHeight+ 'px';
    }
  }
}

//движение мячика по полю
function ballMoove() {
  let ballX = parseInt(ball.offsetLeft);
  let ballY = parseInt(ball.offsetTop);

  ball.style.left = ballX - ball.speedBallX + 'px';
// пропустила первая ракетка
  if ( parseInt(ball.offsetLeft) <= 0) {
    score2 += 1;
    soundSharapova();
    score.innerHTML = score1 + ':' + score2;
    clearInterval(clickTimer);
  }

//Если мяч коснулся r1
    let centerBall = parseInt(ball.offsetHeight)/2;
    if (ball.offsetLeft <= racket1.racket.offsetWidth && (ball.offsetTop + centerBall) > racket1.racket.offsetTop &&
      (racket1.racket.offsetTop + racket1.racket.offsetHeight > parseInt(ball.offsetTop) + centerBall)){
      ball.speedBallX = - ball.speedBallX;
    }

//пропустила вторая ракетка
  if (parseInt(ball.offsetLeft+ball.offsetWidth) > parseInt(field.offsetWidth)) {
    score1 += 1;
    soundSharapova();
    score.innerHTML = score1 + ':' + score2;
    clearInterval(clickTimer);
  }
  if (parseInt(ball.offsetLeft + ball.offsetWidth) > parseInt(field.offsetWidth) - parseInt(racket2.racket.offsetWidth)
    &&(ball.offsetTop + centerBall) > racket2.racket.offsetTop && (racket2.racket.offsetTop + racket2.racket.offsetHeight > parseInt(ball.offsetTop) + centerBall)){
    ball.speedBallX = - ball.speedBallX;
  }

  ball.style.top = ballY - ball.speedBallY + 'px';
  if (parseInt(ball.offsetTop) <= 0) {
    ball.speedBallY = - ball.speedBallY;
  }

  if (parseInt(ball.offsetTop + ball.offsetHeight) >  parseInt(field.offsetHeight)) {
    ball.speedBallY = - ball.speedBallY;
    ball.style.top = parseInt(field.offsetHeight) - parseInt(ball.offsetHeight) + 'px';
  }
  return false;
}

//////звук при пропуске мяча
function soundSharapova() {
  let audio = document.createElement('audio');
  audio.setAttribute('src', 'sharapova.mp3');
  audio.setAttribute('autoplay', 'autoplay');
  document.body.insertBefore(audio, script);
  audio.autoplay = true;
}

createGame();