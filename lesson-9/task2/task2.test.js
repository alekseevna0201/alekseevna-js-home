var isPal = require('./task2');describe('Test palindromes', () = > {  it('check palindromes', () => {  var txt = isPal('а роза упала на лапу азора');  expect(txt).toBe(true);  });});