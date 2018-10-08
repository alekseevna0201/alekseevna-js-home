'use strict';
var text = 'анна';

function isPal(text) {
  var arr = text ? text.split(' ').join('').toLowerCase().split('') : [];
  var arrReversed = arr.slice().reverse();
  return arr.join('') === arrReversed.join('');
}

isPal(text);

module.exports = isPal;