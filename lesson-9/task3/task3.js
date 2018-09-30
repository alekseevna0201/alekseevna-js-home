'use strict';

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function anClean(arr) {
  var sortedArray = [];

  for (var i = 0; i < arr.length -1; i++) {
    var sortLetters = arr[i].toLowerCase().split('').sort().join('');
    sortedArray[sortLetters] = arr[i];
  }
  var result = [];
  for (var key in sortedArray) result.push(sortedArray[key]);
  return result;
}

module.exports = anClean;