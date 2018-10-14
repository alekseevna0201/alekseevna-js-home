'use strict';

// var clock = {
//   div: {
//     className: 'clock',
//     style : {
//       position: 'absolute',
//       background: 'pink',
//     }
//
//
//   }
// };


var div = document.createElement('div');
div.style.background = "-webkit-radial-gradient(black, white)";
div.className = "clock";
div.style.position ='absolute';
div.style.width ='400px';
div.style.height ='400px';
div.style.borderRadius ='50%';
div.style.margin ='0';

document.body.insertBefore(div, document.body.firstChild);

var center = document.createElement('div');
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

var hourHand = document.createElement('div');
hourHand.className = "hour";
hourHand.style.position ='absolute';
hourHand.style.background ='#DAA520';
hourHand.style.width ='20px';
hourHand.style.height ='150px';
hourHand.style.left ='0';
hourHand.style.right ='0';
hourHand.style.top ='-110px';
hourHand.style.bottom ='0';
hourHand.zIndex ='0';

center.appendChild(hourHand);

var minuteHand = document.createElement('div');
minuteHand.className = "minute";
minuteHand.style.position ='absolute';
minuteHand.style.background ='#66CDAA';
minuteHand.style.width ='15px';
minuteHand.style.height ='180px';
minuteHand.style.left ='0';
minuteHand.style.top ='-140px';
minuteHand.zIndex ='1';
center.appendChild(minuteHand);

var secondHand = document.createElement('div');
secondHand.className = "second";
secondHand.style.position ='absolute';
secondHand.style.background ='#B0C4DE';
secondHand.style.width ='10px';
secondHand.style.height ='180px';
secondHand.style.left ='5px';
secondHand.style.top ='-140px';
secondHand.zIndex ='2';
center.appendChild(secondHand);


function positionDial() {
//   for (var i =0; i <= 12; i++) {
//     var number = document.createElement('p');
//     number.style.background =' #A9A9A9';
//     number.style.width ='60px';
//     number.style.height ='60px';
//     number.style.borderRadius ='50%';
//     number.style.zIndex ='2';
//     div.appendChild(number);
//   }
//
//   var tagP = document.getElementsByTagName('p');
//   var delta = Math.PI * 2 / tagP.length;
//   var x = 0, y = 0, angle = 0;
//
//   for (var j = 0; j < tagP.length; j++) {
//     tagP[i].style.left =  150 * Math.cos(angle) + 'px';
//     tagP[i].style.top = 150 * Math.sin(angle) + 'px';
//     angle += delta;
//   }
// }
  for (var i = 0 ; i < 12; i++) {

    var number = document.createElement('p');
    number.style.position ='relative';
    number.style.background =' #A9A9A9';
    number.style.width ='60px';
    number.style.height ='60px';

    number.style.borderRadius ='50%';

    number.zIndex ='2';
    div.appendChild(number);


    var centerX = center.offsetLeft + center.offsetWidth / 2;
    var centerY = center.offsetTop + center.offsetHeight / 2;

    var radius = 200;
    var angle = 30 / 180 * Math.PI;

    var delta = Math.PI * 2 / 12;
    var numberCenterX = centerX + radius * Math.sin(angle);
    var numberCenterY = centerY - radius * Math.cos(angle);

    number.style.left = Math.round(numberCenterX - number.offsetWidth / 2) + 'px';
    number.style.top = Math.round(numberCenterY - number.offsetHeight / 2) + 'px';
    angle+= delta;
  }

}

positionDial();

window.onload = function(){
  setInterval(fSec, 1000);

  var sec = 0;
  var min = 0;
  var hour = 0;

  function fSec(){
    sec = sec + 6;
    document.querySelector('.second').style.transform = 'rotate('+sec+'deg)';
    document.querySelector('.minute').style.transform = 'rotate('+min+'deg)';
    document.querySelector('.hour').style.transform = 'rotate('+hour+'deg)';
    document.querySelector('.second').style.transformOrigin = '100% 100%';
    document.querySelector('.minute').style.transformOrigin = '100% 100%';
    document.querySelector('.hour').style.transformOrigin = '100% 100%';
    if (sec + 6  === 366) {
      sec = 0;
      min = min + 6;
    } else if (min + 6 === 366) {
      min = 0;
      hour = hour + 6;
    }
  }
};