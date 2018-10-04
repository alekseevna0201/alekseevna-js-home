'use strict';

var john = {
  billValue: [124, 80, 268, 180, 42],
  tipCalculator: function (bill) {
    for (var i = 0; i < this.billValue.length; i++) {
      var percentage;
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      return parseInt(percentage * bill);
    }

    this.tipsJohn = [this.tipCalculator(john.billValue[0]), this.tipCalculator(john.billValue[1]),
      this.tipCalculator(john.billValue[2]), this.tipCalculator(john.billValue[3])];

    this.averageTipJohn = function () {
      return (this.tipsJohn[0] + this.tipsJohn[1] + this.tipsJohn[2] + this.tipsJohn[3] + this.tipsJohn[4]) / this.tipsJohn.length;
    }
  }
};

var mark = {
  billValue: [77, 375, 110, 45],
  tipCalculatorMark: function (bill) {
    for (var i = 0; i < this.billValue.length; i++) {
      var percentage;
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.2;
      } else {
        percentage = 0.25;
      }
      return parseInt(percentage * bill);
    }
    this.tipsMark = [this.tipCalculatorMark(mark.billValue[0]), this.tipCalculatorMark(mark.billValue[1]),
      this.tipCalculatorMark(mark.billValue[2]), this.tipCalculatorMark(mark.billValue[3])];

    this.averageTipMark = function () {
      return (this.tipsMark[0] + this.tipsMark[1] + this.tipsMark[2] + this.tipsMark[3] + this.tipsMark[4]) / this.tipsMark.length;
    }
  }
};

john.tipCalculator();
mark.tipCalculatorMark();

if (mark.averageTipMark > john.averageTipJohn) {
  console.log('Family of Mark very rich and kind')
} else {
  console.log('Family of John very rich and kind')
}