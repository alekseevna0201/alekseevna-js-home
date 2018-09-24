'use strict';

var billsJohn = {
  billValue: [124, 80, 268, 180, 42]
};

var tipsJohn = []; //тут будут чаевые, массив
var sumWithTips = []; //тут будут суммы с чаевыми (Джон)

function tipCalculator(bill) { // функция определяет какой именно размер чаевой для счета должен быть
  for (var i = 0; i < billsJohn.billValue; i++)
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
// добавляем результаты в массивы
tipsJohn.push(tipCalculator(billsJohn.billValue[0]), tipCalculator(billsJohn.billValue[1]), tipCalculator(billsJohn.billValue[2]),
  tipCalculator(billsJohn.billValue[3]), tipCalculator(billsJohn.billValue[4]));

sumWithTips.push(billsJohn.billValue[0] + tipsJohn[0], billsJohn.billValue[1] + tipsJohn[1],
  billsJohn.billValue[2] + tipsJohn[2],billsJohn.billValue[3] + tipsJohn[3],billsJohn.billValue[4] + tipsJohn[4]);
//ищем средний размер чаевых Джона
function averageTipJohn() {
  return (tipsJohn[0] + tipsJohn[1]+ tipsJohn[2]+ tipsJohn[3]+ tipsJohn[4]) / tipsJohn.length;
};

var billsMark = {
  billValue: [77, 375, 110, 45]
};

var tipsMark = [];
function averageTipMark() {
  return (tipsMark[0] + tipsMark[1] + tipsMark[2] + tipsMark[3]) / tipsMark.length;
};

function tipCalculatorMark(bill) {
  for (var i = 0; i < billsMark.billValue; i++)
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

tipsMark.push(tipCalculatorMark(billsMark.billValue[0]), tipCalculatorMark(billsMark.billValue[1]),
  tipCalculatorMark(billsMark.billValue[2]), tipCalculatorMark(billsMark.billValue[3]));

if (averageTipMark() > averageTipJohn()) { //сравниваем средние чаевые
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