var tipCalculator = require('./task1');
var tipCalculatorMark = require('./task1');
var averageTipJohn = require('./task1');
var averageTipMark = require('./task1');

describe('Function Calculating average', () => {
  it('To calculate tips average', () => {
    expect(averageTipMark).toBe(34.75);
  });
});

describe('Function calculating tips of Mark', () => {
  it('calculate tips', () => {
  expect(averageTipJohn).toBe(17.6);
  });
});
