var anClean = require('./task3');

describe('Function anClean', () = > {
  it('check anagrams', () => {
  var  arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
  var  array = anClean(arr);
  expect(array).toBe([ 'ЗОВ', 'гробик', 'сектор' ]);
  });
});