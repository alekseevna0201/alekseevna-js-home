"use strict";

let canvaS = document.getElementById('wrapper');
let context = canvaS.getContext("2d");
let canvaSCenterX = canvaS.offsetWidth / 2; // центр канваса по оси х
let canvaSCenterY = canvaS.offsetHeight / 2; // аналогично по оси у
let radius = 125; // радиус часов
let angleValue = 0; // начальное значение угла
let distanceOfDigits = 30; // значение угла между цифрами часов

let elemForArrowHoursHeight = 50; // длина стрелки часов
let elemForArrowHoursWidth = 9; // ширина часовой стрелки

let elemForArrowMinutesHeight = 110; //длина минутной стрелки
let elemForArrowMinutesWidth = 5;// ширина минутной стрелки

let elemForArrowSecondsHeight = 135;// тдлина секундной стрелки
let elemForArrowSecondsWidth = 2;// ширина секундной стрелки
let hoursDeg; //угол поворота часовой
let minutesDeg;//угол минутной
let secondsDeg;//угол секундной
let hourDigits = 12;//количество часов в часах

// канвас
function bigWatch() {
  context.fillStyle = '#696969';
  context.beginPath();
  context.arc(canvaSCenterX, canvaSCenterY, 150, 0, Math.PI * 2, false);
  context.fill();

  function createCircles() {
    for (let i = 1; i <= hourDigits; i++) {
      let smallCircleCX, smallCircleCY;
      let smallCircleRadius = 20;
      let angle;

      angleValue += distanceOfDigits;
      angle = angleValue / 180 * Math.PI;

      smallCircleCX = Math.round(canvaSCenterX + radius * Math.sin(angle));
      smallCircleCY = Math.round(canvaSCenterY - radius * Math.cos(angle));

      context.beginPath();
      context.fillStyle = "#DAA520";
      context.arc(smallCircleCX, smallCircleCY, smallCircleRadius, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = '#556B2F';
      context.font = "normal normal 20px 'Times New Roman'";
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(i, smallCircleCX, smallCircleCY);
    }
  }

  createCircles();
}

// стрелки
function hoursArrow() {
  let time = new Date();
  hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
  context.strokeStyle = "black";
  context.lineWidth = elemForArrowHoursWidth;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(canvaSCenterX, canvaSCenterY);
  context.lineTo(canvaSCenterX + elemForArrowHoursHeight * Math.sin(hoursDeg / 180 * Math.PI), canvaSCenterY - elemForArrowHoursHeight * Math.cos(hoursDeg / 180 * Math.PI));
  context.stroke();
}

function minutesArrow() {
  let time = new Date();
  minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
  context.strokeStyle = "black";
  context.lineWidth = elemForArrowMinutesWidth;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(canvaSCenterX, canvaSCenterY);
  context.lineTo(canvaSCenterX + elemForArrowMinutesHeight * Math.sin(minutesDeg / 180 * Math.PI), canvaSCenterY - elemForArrowMinutesHeight * Math.cos(minutesDeg / 180 * Math.PI));
  context.stroke();
}

function secondsArrow() {
  let time = new Date();
  secondsDeg = 6 * time.getSeconds();
  context.strokeStyle = "#008080";
  context.lineWidth = elemForArrowSecondsWidth;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(canvaSCenterX, canvaSCenterY);
  context.lineTo(canvaSCenterX + elemForArrowSecondsHeight * Math.sin(secondsDeg / 180 * Math.PI), canvaSCenterY - elemForArrowSecondsHeight * Math.cos(secondsDeg / 180 * Math.PI));
  context.stroke();
}

function arrows() {
  bigWatch();
  hoursArrow();
  minutesArrow();
  secondsArrow();
}

window.onload = arrows();
window.setInterval(arrows, 1000);