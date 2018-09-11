let image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

function multiplyNumeric(number) {
  for (key in image) {
    if (!isNaN(image[key])) {
      number[key] = number[key] * 2;
    }
  }
}

multiplyNumeric(image);
console.log(image);

module.exports = multiplyNumeric;