'use strict';

function tLocalStorage (nameStorage) {
  var self = this;
    self.pLocal = {};

  if (localStorage.getItem(lsKeyName)) {
    if (lsKeyName === "lsDish") {
      var myObject = JSON.parse(localStorage.lsDish);
      self.pLocal = myObject;
    }
    if (lsKeyName === "lsDrink") {
      myObject = JSON.parse(localStorage.lsDrink);
      self.pLocal = myObject;
    }
  }

  self.addValue = function(key, value) {
    self.pLocal[key] = value;
  };

  self.getValue = function(key) {
    return pLocal[key];
  };

  self.deleteValue = function(key) {
    return delete pLocal[key];
  };

  self.getKeys = function() {
    return (Object.keys(pLocal));
  };

  self.store = function() {
    localStorage.setItem(name, JSON.stringify(self.pLocal));
  }
}