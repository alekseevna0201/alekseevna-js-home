'use strict';

let SVGElem = document.getElementById("SVG");

let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
let baseRadius = 300;
let circleRadius = 30;

circle.setAttribute('cx', '300');
circle.setAttribute('cy', '300');
circle.setAttribute('r', '190');
circle.setAttribute('fill', 'pink');
circle.setAttribute('stroke', 'yellow');
SVGElem.appendChild(circle);

let clockFace = document.getElementById('SVG');
let clockFaceClone = circle.cloneNode();
let LITTLE_CIRCLE_H = 40;
let LITTLE_CIRCLE_W = 40;
let CLOCK_WIDTH = 300;

function createClockCircles (clockWidth, clockFaceClone, radiusLittleCircle, w, h) {
  for (let i = 1; i <=12; i++) {
    let littleCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    let angle = (30 * i) / 180 * Math.PI;
    let radius = clockWidth / 2 - 30 * 0.5;
    let littleCircleX = clockWidth / 2 + radius * Math.sin(angle);
    let littleCircleY = clockWidth / 2 - radius * Math.cos(angle);
    let x = 180 + Math.round(littleCircleX -30 ) + 'px';
    let y = 180 + Math.round(littleCircleY -30 ) + 'px';

    littleCircle.setAttribute('cx', x.toString());
    littleCircle.setAttribute('cy', y.toString());
    littleCircle.setAttribute('r', '30');
    littleCircle.setAttribute('fill', '#808080');
    littleCircle.setAttribute('stroke', 'white');
    SVGElem.appendChild(littleCircle);
    SVGElem.appendChild(createNumberCircle(x, y, i));
  }
}
createClockCircles(CLOCK_WIDTH, clockFaceClone, LITTLE_CIRCLE_W /2, LITTLE_CIRCLE_W, LITTLE_CIRCLE_H);

function createNumberCircle(circleX, circleY, number) {
  let numberText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  numberText.appendChild(document.createTextNode(number));
  numberText.setAttribute('x', circleX);
  numberText.setAttribute('y', circleY);
  numberText.setAttribute('text-anchor', 'middle');
  numberText.setAttribute('style', `font-size: ${circleRadius}px`);
  return numberText;
}

let handHour = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

handHour.setAttribute('x', '300');
handHour.setAttribute('class', 'hour');
handHour.setAttribute('y', '300');
handHour.setAttribute('width', '10');
handHour.setAttribute('height', '140');
handHour.setAttribute('rx', '5');
handHour.setAttribute('ry', '5');
handHour.setAttribute('stroke', '1');
handHour.setAttribute('zIndex', '10');
handHour.setAttribute('fill','black');
SVGElem.appendChild(handHour);

let handMinute = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

handMinute.setAttribute('x', '300');
handMinute.setAttribute('class', 'min');
handMinute.setAttribute('y', '300');
handMinute.setAttribute('width', '10');
handMinute.setAttribute('height', '150');
handMinute.setAttribute('rx', '5');
handMinute.setAttribute('ry', '5');
handMinute.setAttribute('stroke', '1');
handMinute.setAttribute('fill','green');
handMinute.setAttribute('transform', 'rotate(270, 300, 300)');
SVGElem.appendChild(handMinute);

let handSecond = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

handSecond.setAttribute('x', '300');
handSecond.setAttribute('class', 'sec');
handSecond.setAttribute('y', '300');
handSecond.setAttribute('width', '10');
handSecond.setAttribute('height', '160');
handSecond.setAttribute('rx', '5');
handSecond.setAttribute('ry', '5');
handSecond.setAttribute('stroke', '1');
handSecond.setAttribute('fill','red');
handSecond.setAttribute('transform', 'rotate(-30, 300, 300)');

SVGElem.appendChild(handSecond);

let circlePoint = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

circlePoint.setAttribute('cx', '300');
circlePoint.setAttribute('cy', '300');
circlePoint.setAttribute('r', '30');
circlePoint.setAttribute('fill', 'black');
circlePoint.setAttribute('stroke', 'white');
SVGElem.appendChild(circlePoint);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function tickTimer(){
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour   = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second){
  let thisSecondRotate = (second / 60) * 360 - 90;
  let thisMinuteRotate = (minute) / 60 * 360 - 90;
  let thisHourRotate   = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('sec', thisSecondRotate );
  rotateHandle('min', thisMinuteRotate);
  rotateHandle('hour', thisHourRotate);
}

function rotateHandle(handle, degree){
  let arrow = document.querySelector(`.${handle}`);
  arrow.setAttribute('transform', `rotate(${degree} ${baseRadius} ${baseRadius})`);
}

setInterval(tickTimer, 1000);