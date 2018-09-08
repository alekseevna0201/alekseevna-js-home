var vowelCount = function(str){
  var count = 0;
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'a' || str[i] == 'i' || str[i] == 'o' ||str[i] == 'e' ||str[i] == 'u' ||str[i] == 'y'){
      count+=1;
    }
  }
  return count;
};
console.log(vowelCount(prompt('Write the text')));