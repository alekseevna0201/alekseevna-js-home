var averageTipMark = require('./task1');
var averageTipJohn = require('./task1');
var tipCalculatorMark = require('./task1');
var tipCalculator = require('./task1');

describe('Calculate tips', () => {
  it('John tips', () => {
    var valueJohn = tipCalculator(100);
    expect(valueJohn).toBe();
  });
  it('Mark tips', () => {
    var valueMark = tipCalculatorMark(200);
    expect(valueMark).toBe(18.2);
  });
});

describe('Function Calculating average', () => {
  it('To calculate tips average', () => {
    var aver = averageTipJohn();
    expect(aver).toBe(34.75);
  });
  it('To calculate tips average', () => {
    var average = averageTipMark();
    expect(average).toBe(18.2);
  });
});