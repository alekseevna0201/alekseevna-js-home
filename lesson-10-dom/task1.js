'use strict';

function HashStorage() {
  this.hash = {};
  //addValue(key, value) сохраняет указанное значение под указанным ключом
  this.addValue = function(key,value) {
    this.hash[key] = value;
  };

  //getValue(key) возвращает значение или undefined
  this.getValue = function(key) {
    return this.hash[key];
  };

  //deleteValue(key) удаляет ключ
  this.deleteValue = function(key) {
    if (key in this.hash) {
      delete this.hash[key];
      return true;
    }
    else
      return false;
  };

  //getKeys() возвращает массив ключей
  this.getKeys = function(){
    return Object.keys(hash);
  }
}

var DrinkStorage = new HashStorage();

DrinkStorage.addValue('Самогон', ['очень алкогольный', 'нужен самогонный аппарат']);
DrinkStorage.addValue('Кофе', ['безалкогольный', 'просто залей водой']);
DrinkStorage.addValue('Мохито', ['слабоалкогольный', 'мята, лайм, вода, ром, много колотого льда']);
DrinkStorage.addValue('Морс', ['безалкогольный', 'клюкву варить и перетирать и можно сахар']);

function getDrink () {
  var key = prompt('Введите название напитка');
    if(DrinkStorage.getValue(key) === undefined) {
      alert('Информации об этом напитке нет');
    } else {
      alert(DrinkStorage.getValue(key));
  }
}

function addDrink (){
  var key = prompt('Введите название напитка');
  var alcohol = prompt('Этот напиток алкогольный?');
  var recipe = prompt('Поделитесь рецептом');
  return DrinkStorage.addValue(key,[alcohol, recipe]);
}

function deleteDrink() {
   var key = prompt('Введите название напитка');
   if (DrinkStorage.deleteValue(key) === true) {
     alert('Напиток удален');
   } else {
     alert('Данный напиток не найден');
   }
}

function showAllDrinks() {
  var array = DrinkStorage.getKeys();
  if (array.length === 0) {
    alert('Напитков нет')
  } else {
    alert(array);
  }
}

document.querySelector('.add-drink').addEventListener('click', addDrink);
document.querySelector('.get-drink').addEventListener('click', getDrink);
document.querySelector('.delete-drink').addEventListener('click', deleteDrink);
document.querySelector('.all-drinks').addEventListener('click', showText);
document.querySelector('.text-area').style.display = 'none';

function showText() {
  var nameHash = DrinkStorage.hash[name];
  document.querySelector('.text-area').style.display = 'block';
  document.querySelector('.text-area').textContent = 'Кофе'; //не получилсь вывести ключ-значение хэша
}