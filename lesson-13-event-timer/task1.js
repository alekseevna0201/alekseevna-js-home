'use strict';
function createClock() {
  var CLOCK_RADIUS = 400; // радиус часов
  var div = document.createElement('div');
  var center = document.createElement('div');
  var hourHand = document.createElement('div');
  var minuteHand = document.createElement('div');
  var secondHand = document.createElement('div');

  function createMain () {
    div.style.background = "-webkit-radial-gradient(black, white)";
    div.className = "clock";
    div.style.position ='absolute';
    div.style.width = CLOCK_RADIUS + 'px';
    div.style.height = CLOCK_RADIUS + 'px';
    div.style.borderRadius ='50%';
    div.style.margin ='0';
    document.body.insertBefore(div, document.body.firstChild);
  }

  function createCenter () {
    center.className = "center";
    center.style.position ='absolute';
    center.style.background ='black';
    center.style.width ='20px';
    center.style.height ='20px';
    center.style.left ='190px';
    center.style.right ='0';
    center.style.top ='190px';
    center.style.bottom ='0';
    center.style.borderRadius ='50%';
    div.appendChild(center);
  }

  function createHourHand () {
    hourHand.className = "hour";
    hourHand.style.position ='absolute';
    hourHand.style.background ='#DAA520';
    hourHand.style.width ='20px';
    hourHand.style.height ='150px';
    hourHand.style.left ='0';
    hourHand.style.right ='0';
    hourHand.style.top ='-110px';
    hourHand.style.bottom ='0';
    hourHand.style.borderRadius ='20px';
    hourHand.zIndex ='0';
    center.appendChild(hourHand);
  }

  function createMinuteHand () {
    minuteHand.className = "minute";
    minuteHand.style.position ='absolute';
    minuteHand.style.background ='#66CDAA';
    minuteHand.style.width ='15px';
    minuteHand.style.height ='180px';
    minuteHand.style.left ='0';
    minuteHand.style.top ='-140px';
    minuteHand.zIndex ='1';
    minuteHand.style.borderRadius ='20px';
    center.appendChild(minuteHand);
  }

  function createSecondHand () {
    secondHand.className = "second";
    secondHand.style.position ='absolute';
    secondHand.style.background ='#B0C4DE';
    secondHand.style.width ='10px';
    secondHand.style.height ='180px';
    secondHand.style.left ='5px';
    secondHand.style.top ='-140px';
    secondHand.zIndex ='2';
    secondHand.style.borderRadius ='20px';
    center.appendChild(secondHand);
  }

  function positionDial() {
    for (var i = 1 ; i < 13; i++) {

      var number = document.createElement('p');
      number.style.position ='relative';
      number.style.background =' #A9A9A9';
      number.style.width ='60px';
      number.style.height ='60px';
      number.style.borderRadius ='50%';
      number.style.textAlign ='center';
      number.style.fontSize ='30px';

      number.zIndex ='2';
      div.appendChild(number);
      number.appendChild(document.createTextNode(i));

      var centerX = center.offsetLeft + center.offsetWidth / 2;
      var centerY = center.offsetTop + center.offsetHeight / 2;

      var radius = 400;
      var angle = 30;

      var delta = Math.PI * 2 / 12;
      var numberCenterX = centerX + radius * (Math.sin(angle) / 180 * Math.PI);

      var numberCenterY = centerY - radius * (Math.cos(angle) /180 * Math.PI);

      number.style.left = Math.round(numberCenterX - number.offsetWidth / 2) + 'px';
      number.style.top = Math.round(numberCenterY - number.offsetHeight / 2) + 'px';
      angle+= 30;
    }
  }

  createMain();
  createCenter();
  positionDial();
  createHourHand();
  createMinuteHand();
  createSecondHand();

  function timeSet() {
    var time = new Date();

    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hour = time.getHours();

    var seconds = ((sec / 60) * 360) + 270;
    var minutes = ((min * 60 + sec) / 3600) * 360 + 270;
    var hourses = ((hour * 3600 + min * 60 + sec) / 43200) * 360 + 270;

    document.querySelector('.second').style.transformOrigin = '100% 90%';
    document.querySelector('.minute').style.transformOrigin = '100% 95%';
    document.querySelector('.hour').style.transformOrigin = '100% 90%';

    secondHand.style.transform = 'rotate(' + seconds + 'deg)';
    minuteHand.style.transform = 'rotate(' + minutes + 'deg)';
    hourHand.style.transform = 'rotate(' + hourses + 'deg)';
  }
  setInterval(timeSet, 1000);
}

createClock();