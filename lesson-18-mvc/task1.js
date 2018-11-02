'use strict';

var drinkStorage = new tLocalStorage("lsDrink"),
  drinkName = document.getElementById("drinkName"),
  drinkInfo = document.getElementById("drinkInfo"),
  drinkInfoDel = document.getElementById("removeDrink"),
  drinkList = document.getElementById("drinkList"),
  drinkInfoDiv = document.getElementById("drinkInfoP");

  var dishStorage = new tLocalStorage("lsDish"),
  dishName = document.getElementById("dishName"),
  dishInfo = document.getElementById("showDishInfo"),
  dishInfoDel = document.getElementById("removeDish"),
  dishList = document.getElementById("dishList"),
  dishInfoDiv = document.getElementById("drinkInfoDiv");

// работаем с кнопкой сохранить
  var store = document.getElementById("store");

drinkInfoDiv.classList.add("drinkInfoP");
dishInfoDiv.classList.add("drinkInfoP");//устанавливаем готовый css класс


drinkName.onclick = function() {
  var keyP = prompt("напишите название напитка"),
    valueC = {};

  valueC.alcohol = confirm(keyP + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");
  valueC.recipe = prompt("напишите рецепт напитка - " + keyP);
  drinkStorage.addValue(keyP, valueC);
  drinkStorage.store();
};

drinkInfo.onclick = function() {
  var drinkInf = prompt("Напишите название напитка"),
    drinkInfoDiv = document.getElementById("drinkInfoDiv"),
    answer = drinkStorage.getValue(drinkInf);

  if (drinkStorage.getValue(drinkInf) !== undefined) {
    drinkInfoDiv.style.height = "auto";
    drinkInfoDiv.innerHTML = "Название напиток: " + drinkInf +
      "<br>" + "алкогольный: " + (answer.alcohol === true ? "да" : "нет") +
      "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению рецепта нет");
  } else {
    drinkInfoDiv.innerHTML = "В хранилище такого напитка нет!";
  }
};

drinkInfoDel.onclick = function() {
  var drinkInfoDel = prompt("Напишите название напитка"),
    drinkInfoDiv = document.getElementById("drinkInfoDiv");

  if (drinkStorage.deleteValue(drinkInfoDel) === true) {
    drinkInfoDiv.innerHTML = "информация о напитке удалена";
    drinkStorage.store();
  } else {
    drinkInfoDiv.innerHTML = "В хранилище такого напитка нет";
  }
};

drinkList.onclick = function() {
  var drinkInfoDiv = document.getElementById("drinkInfoP");
  drinkInfoDiv.innerHTML = drinkStorage.getKeys();
};

///////////////////////////////////////////////////////
dishName.onclick = function() {
  var keyP = prompt("напишите название блюдо"),
    valueC = {};

  valueC.country = prompt("напишите с какой страны это блюдо - " + keyP);
  valueC.recipe = prompt("напишите рецепт блюдо - " + keyP);
  dishStorage.addValue(keyP, valueC);
  dishStorage.store();
};

dishInfo.onclick = function() {
  var dishInf = prompt("Напишите название блюдо"),
    drinkInfoDiv = document.getElementById("dishInfoDiv"),
    answer = dishStorage.getValue(dishInf);

  if (dishStorage.getValue(dishInf) !== undefined) {
    drinkInfoDiv.style.height = "auto";
    drinkInfoDiv.innerHTML = "Название блюдо: " + dishInf +
      "<br>" + "Страна: " + (answer.country) +
      "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению РЕЦЕПТА НЕТ");
  } else {
    dishInfoDiv.innerHTML = "В хранилище такого блюда нет";
  }
};

dishInfoDel.onclick = function() {
  var dishInfoDel = prompt("Напишите название блюдо"),
    dishInfoDiv = document.getElementById("dishInfoDiv");

  if (dishStorage.deleteValue(dishInfoDel) === true) {
    drinkInfoDiv.innerHTML = "информация о блюдо удалена!";
    dishStorage.store();
  } else {
    drinkInfoDiv.innerHTML = "Такого блюда нет!";
  }
};

dishList.onclick = function() {
  var dishInfoDiv = document.getElementById("dishInfoDiv");
  dishInfoDiv.innerHTML = dishStorage.getKeys();
};