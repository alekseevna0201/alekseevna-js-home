'use strict';

let multiplyFunction = function multiplyNumeric(obj) {
  let image = {
    width: 100,
    height: 400,
    title: 'Cool image'
  };
  for (let key in image) {
    if (!isNaN(image[key])) {
      obj[key] = obj[key] * 2;
    } else {
      return key;
    }
  }
};

module.exports = multiplyFunction;