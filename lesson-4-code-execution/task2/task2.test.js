let multiplyFunction = require('./task2');

describe('Multiplication', () => {
  it('multiply numbers', () => {
    expect(multiplyFunction({
      width: 100,
      height: 400,
      title: 'Cool image'
    }))
      .toEqual({
      width: 200,
      height: 800,
      title: 'Cool image'
    });
  });
});