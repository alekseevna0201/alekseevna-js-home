'use strict';

function sum(a) {
  return function (b) {
    return (a + b);
  }
}

console.log(sum(100)(10));