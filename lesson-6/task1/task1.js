'use strict';

var john = {
  billValue: [124, 80, 268, 180, 42],
  tipCalculator: function (bill) {
    this.tipsJohn = [];
    this.sumWithTips = [];
    for (var i = 0; i < this.billValue; i++)
         var percentage;
    if (bill < 50) {
      percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
      percentage = 0.15;
    } else {
      percentage = 0.1;
    }
    return parseInt(percentage * bill);
  },
  averageTipJohn: function () {
    return (tipsJohn[0] + tipsJohn[1]+ tipsJohn[2]+ tipsJohn[3]+ tipsJohn[4]) / tipsJohn.length;
  }
};

/*
*/
function averageTipJohn() {
  return (tipsJohn[0] + tipsJohn[1]+ tipsJohn[2]+ tipsJohn[3]+ tipsJohn[4]) / tipsJohn.length;
}

var mark = {
  billValue: [77, 375, 110, 45],
  tipCalculatorMark: function (bill) {
    this.tipsMark = [];
    for (var i = 0; i < this.billValue; i++)
         var percentage;
    if (bill < 100) {
      percentage = 0.2;
    } else if (bill >= 100 && bill < 300) {
      percentage = 0.2;
    } else {
      percentage = 0.25;
    }
    return parseInt(percentage * bill);
  },
  averageTipMark: function () {
    tipsMark.push(tipCalculatorMark(mark.billValue[0]), tipCalculatorMark(mark.billValue[1]),
      tipCalculatorMark(mark.billValue[2]), tipCalculatorMark(mark.billValue[3]));
    return (this.tipsMark[0] + this.tipsMark[1] + this.tipsMark[2] + this.tipsMark[3]) / this.tipsMark.length;
  }
};

/*
tipsMark.push(tipCalculatorMark(mark.billValue[0]), tipCalculatorMark(mark.billValue[1]),
  tipCalculatorMark(mark.billValue[2]), tipCalculatorMark(mark.billValue[3]));
*/
if (mark.averageTipMark() > john.averageTipJohn()) { //сравниваем средние чаевые
  console.log('Family of Mark very rich and kind')
} else {
  console.log('Family of John very rich and kind')
}

module.exports.averageTipsMark = averageTipMark;
module.exports.averageTipsJohn = averageTipJohn;
module.exports.tipCalculatorMark = tipCalculatorMark;
module.exports.tipCalculator = tipCalculator;
module.exports.tipsMark = tipsMark;
module.exports.tipsJohn = tipsJohn;