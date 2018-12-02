'use strict';

function tLocalStorage (nameStorage) {
  var self = this;
    self.pLocal = {};

  function reset() {
    pLocal = JSON.parse(localStorage[nameStorage]);
  }

  function saveHash() {
    localStorage[name] = JSON.stringify(pLocal);
  }

  self.addValue = function(key, value) {
    self.pLocal[key] = value;
  };

  self.getValue = function(key) {
    return pLocal[key];
  };

  self.deleteValue = function(key) {
    pLocal = JSON.parse(window.localStorage.getItem(value));
    delete pLocal[key];
    window.localStorage.setItem(value, JSON.stringify(pLocal));
  };

  self.getKeys = function() {
    return (Object.keys(pLocal));
  };

  self.store = function() {
    localStorage.setItem(name, JSON.stringify(self.pLocal));
  }
}