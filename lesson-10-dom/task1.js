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
    var keys = [];
    for (var i in this.hash)
      keys.push(i);
    return keys;
  }
}

var DrinkStorage = new HashStorage();
DrinkStorage.addValue('Самогон', ['очень алкогольный', 'нужен самогонный аппарат']);
DrinkStorage.addValue('Кофе', ['безалкогольный', 'просто залей водой']);
DrinkStorage.addValue('Мохито', ['слабоалкогольный', 'мята, лайм, вода, ром, много колотого льда']);
DrinkStorage.addValue('Морс', ['безалкогольный', 'клюкву варить и перетирать и можно сахар']);

/*
DrinkStorage.addValue(prompt('Введите название напитка'), [prompt('Он алкогольный?'), prompt('Рецепт?')]);
 */
console.log(DrinkStorage.hash);

function getDrink () {
  var key = prompt('Введите название напитка');
    if(DrinkStorage.getValue(key) === undefined) {
      alert('Информации об этом напитке нет');
    } else {
      alert(DrinkStorage.getValue(key));
  }
}

getDrink();

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






















