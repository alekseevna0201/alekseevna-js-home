const multiplyNumeric = require('./task2');

describe('Multiplication', () => {
  it('multiply numbers', () => {
    expect(multiplyNumeric()).toBe({
      width: 200,
      height: 800,
      title: 'Cool image'
    });
  });
});