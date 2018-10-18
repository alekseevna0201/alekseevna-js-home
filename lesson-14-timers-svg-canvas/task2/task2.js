"use strict";

let canvaS = document.getElementById('wrapper');
let context = canvaS.getContext("2d");
let canvaSCenterX = canvaS.offsetWidth / 2;
let canvaSCenterY = canvaS.offsetHeight / 2;
let radius = 125;
let angleValue = 0;
let distanceOfDigits = 30;

let digitalWatchText;
let digitalWatchWidth = 90;
let digitalWatchHeight = 25;
let radiusForDigitalWatch = 70;

let elemForArrowHoursHeight = 50;
let elemForArrowHoursWidth = 9;

let elemForArrowMinutesHeight = 110;
let elemForArrowMinutesWidth = 5;

let elemForArrowSecondsHeight = 135;
let elemForArrowSecondsWidth = 2;
let hoursDeg;
let minutesDeg;
let secondsDeg;
let hourDigits = 12;

// канвас
function bigWatch() {
  context.fillStyle = '#696969';
  context.beginPath();
  context.arc(canvaSCenterX, canvaSCenterY, 150, 0, Math.PI * 2, false);
  context.fill();

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

function digitalWatch() {
  let time = new Date();
  context.globalCompositeOperation = "source-over";
  context.fillStyle = "#FFFF00";
  context.beginPath();
  context.fillRect(canvaSCenterX - digitalWatchWidth / 2, canvaSCenterY - radiusForDigitalWatch - digitalWatchHeight / 2, 100, 25);
  context.fill();

  context.fillStyle = "black";
  digitalWatchText = time.toLocaleTimeString();
  context.font = "normal normal 25px 'Times New Roman'";
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(digitalWatchText, canvaSCenterX, canvaSCenterY - radiusForDigitalWatch);
  context.fill();
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
  digitalWatch();
  hoursArrow();
  minutesArrow();
  secondsArrow();
}

window.onload = arrows();
window.setInterval(arrows, 1000);