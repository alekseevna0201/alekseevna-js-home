'use strict';
var allVowels = ['а','я','э','ю','е','ё','ы','и','о'];
var text = prompt('Введите текст');
while (!text) {
  text = prompt('попробуйте заново');
}

var count = 0;
function vowelCount (str) {
  for(var i = 0; i < text.length - 1; i++){
    if(text[i] === allVowels[i]){
      count+=1;
    }
  }
  return count;
}
console.log(vowelCount(text));