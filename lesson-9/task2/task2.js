'use strict';

var text = 'анна';

function  isPal(text) {
  text = text.toLowerCase().replace(/[^а-я]/g,"").split('');
  var copy = text.concat();
  text = text.reverse();
  copy = copy.join("");
  text = text.join("");
  if (text === copy) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPal;