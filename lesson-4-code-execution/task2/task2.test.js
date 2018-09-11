const multiplyNumeric = require('./task2');

describe('Hash', () => {
  it('hash', () => {
    let image = {
      width: 100,
      height: 400,
      title: 'Cool image'
    };
  });
  expect(function multiplyNumeric(number) {
    for (key in image) {
      if (!isNaN(image[key])) {
        number[key] = number[key] * 2;
      }
    }
  }).toBe(multiplyNumeric);
}); /*для исправление! не работает*/