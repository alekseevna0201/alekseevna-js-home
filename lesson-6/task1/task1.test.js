var tipsMark = require('./task1');
var allTips = require('./task1');
var averageTipMark = require('./task1');
var averageTipJohn = require('./task1');

describe('Function Calculating average', () => {
  it('To calculate tips average', () => {
    expect(averageTipMark()).toBe(34.75);
  });
});

describe('Function Calculating average', () => {
  it('To calculate tips average John', () => {
  expect(averageTipJohn()).toBe(34.75);      //этот тест неправильный, почему - не разобралась. оставлю тут чтобы разобраться с ним
  });
});

describe('Calculate tips', () => {
  it('To calculate tips', () => {
  expect(tipsMark).toBe[15, 93, 22, 9];
  });
});

describe('Calculate tips', () => {
  it('To calculate tips', () => {
  expect(allTips).toBe[18, 12, 26, 27, 8];
  });
});

/*Другие тесты не получились тоже, почему-то работает только тест функции averageTipMark*/