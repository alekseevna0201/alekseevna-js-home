let obj = {
  className: 'open menu',
};

function deleteClassName(obj, cls) {
  let classArray = obj.className.split(' '); //делаем массив из строки
  for (i = 0; i <= classArray.length; i++) { //обходим массив
    if (classArray[i] === cls) { //если какой-либо из элементов массива равен указанному склассу, то ...
      classArray.splice(i, 1); //удаляем
      i--; //чтобы следующее повторение цикла заново проверило i
    }
  }
  obj.className = classArray.join();//преобразуем вновь в строку
}

deleteClassName(obj, 'open');
deleteClassName(obj, 'blabla');
console.log(obj.className);