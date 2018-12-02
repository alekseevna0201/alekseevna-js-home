'use strict';

var DrinksStorage = new TLocalStorage("Drinks");
var DishesStorage = new TLocalStorage("Dishes");

function addDrink() {
  var drinkName = prompt('Введите название напитка', 'Test Drink').toLowerCase().trim();
  var fHash = {};

  if (drinkName) {
    fHash.recipe = prompt('Введите рецепт приготовления напитка', 'Test Recipe');
    fHash.alcohol = confirm('Ваш напиток алкогольный?') ? 'да' : 'нет';

    DrinksStorage.addValue(drinkName, fHash);

    return DrinksStorage.addValue(drinkName, fHash);
  } else {
    alert('Ввод отменен!');
  }
}

function showDrinkInfo() {
  var drinkName = prompt('Введите название напитка: ','').toLowerCase().trim();
  var getDrinkInfo = (drinkName) ? DrinkStorage.getValue(drinkName) : 0;
  var resultHTML = '';

  if (getDrinkInfo) {
    var print1 = 'Напиток: ' + drinkName + '<br>';
    var print2 = 'Алкогольный: ' + getDrinkInfo.alcohol + '<br>';
    var print3 = 'Рецепт приготовления: ' + getDrinkInfo.recipe + '<br>';

    resultHTML = print1 + print2 + print3;
  } else {
    resultHTML = 'Ошибка! Нет такого напитка';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function removeDrink() {
  var drinkName = prompt('Какой напиток удалить?').toLowerCase().trim();
  DrinksStorage.deleteValue(drinkName);
  var delDrinkInfo = DrinkStorage.deleteValue(drinkName);

  var resultHTML = '';

  if (delDrinkInfo) {
    resultHTML = 'Информация о напитке ' + drinkName + ' удалена';
  } else {
    resultHTML = 'Ошибка! Нет такого напитка';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function showDrinksMenu() {
  var showMenuInfo = DrinkStorage.getKeys();
  var resultHTML = '';

  if (showMenuInfo.length) {
    for (var i = 0; i < showMenuInfo.length; i++) {
      resultHTML += (i + 1) + '. ' + showMenuInfo[i] + '<br>';
    }
  } else {
    resultHTML = 'Меню пустое, добавьте напитки.';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function addDish () {
  var dishName = prompt('Введите название напитка', 'Test Drink').toLowerCase().trim();
  var fHash2 = {};

  if (dishName) {
    fHash2.recipe = prompt('Введите рецепт приготовления напитка', 'Test Recipe');
    fHash2.alcohol = confirm('Ваш напиток алкогольный?') ? 'да' : 'нет';

    DrinksStorage.addValue(dishName, fHash2);

    return DrinksStorage.addValue(dishName, fHash2);
  } else {
    alert('Ввод отменен!');
  }
}

function showDishInfo() {
  var drinkName = prompt('Введите название напитка: ','').toLowerCase().trim();
  var getDrinkInfo = (drinkName) ? DishesStorage.getValue(drinkName) : 0;
  var resultHTML = '';

  if (showDishInfo) {
    var print1 = 'Напиток: ' + drinkName + '<br>';
    var print2 = 'Алкогольный: ' + getDrinkInfo.alcohol + '<br>';
    var print3 = 'Рецепт приготовления: ' + getDrinkInfo.recipe + '<br>';

    resultHTML = print1 + print2 + print3;
  } else {
    resultHTML = 'Ошибка! Нет такого блюда';
  }
  document.getElementById('dishInfoDiv').innerHTML = resultHTML;
}

function removeDrink() {
  var drinkName = prompt('Какой блюдо удалить?').toLowerCase().trim();
  DishStorage.deleteValue(drinkName);
  var delDrinkInfo = DishStorage.deleteValue(drinkName);

  var resultHTML = '';

  if (delDishInfo) {
    resultHTML = 'Информация о блюде ' + drinkName + ' удалена';
  } else {
    resultHTML = 'Ошибка! Нет такого блюда';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function showDishMenu() {
  var showMenuInfo = DishesStorage.getKeys();
  var resultHTML = '';

  if (showMenuInfo.length) {
    for (var i = 0; i < showMenuInfo.length; i++) {
      resultHTML += (i + 1) + '. ' + showMenuInfo[i] + '<br>';
    }
  } else {
    resultHTML = 'Меню пустое, добавьте блюда.';
  }
  document.getElementById('message').innerHTML = resultHTML;
}