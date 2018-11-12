"use strict";

function tAJAXStorage(name) {
  var self = this;

  self.hashStorage = {};

  $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
    {
      type: "POST",
      cache: false,
      dataType: "json",
      data: {
          f: "READ",
          n: self.name
      },
      success: readData,
      error: ErrorHandler
    }
  );

  function readData (data) {
    if (data !== " ") {
      self.hashStorage = JSON.parse(data.result);

    } else if (data === " ") {
      $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {
          type: "POST",
          cache: false,
          dataType: "json",
          data:
            {f: "INSERT",
              n: self.name,
              v: JSON.stringify(self.hashStorage)
            },
          success: DataLoadedInsert,
          error: ErrorHandler}
      );
    }
  }

  self.addValue = function(key, value) {
    self.hashStorage[key] = value;

    addValueOnTheServer(self.hashStorage);
  };

  self.getValue = function(key) {
    if (key in self.hashStorage) {
      return self.hashStorage[key];
    } else {
      return undefined;
    }
  };

  self.deleteValue = function(key) {
    if (key in self.hashStorage) {
      delete self.hashStorage[key];
      addValueOnTheServer(self.hashStorage);
      return true;
    } else {
      return false;
    }
  };

  self.getKeys = function() {
    var keys = [];
    for (var key in self.hashStorage) {
      keys.push(" " + key);
    }
    return keys;
  };

  //сохранить изменения
  function addValueOnTheServer(hash) {
    var password = Math.random();

    $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
      {
        type: "POST",
        cache: false,
        dataType: "json",
        data: {
          f: "LOCKGET",
          n: self.name,
          p: password},
        success: DataLoadedLockget,
        error: ErrorHandler
      }
    );

    function DataLoadedLockget (data) {

      $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {
          type: "POST",
          cache: false,
          dataType: "json",
          data: {
            f: "UPDATE",
            n: "TSIK_Drink",
            p: password,
            v: JSON.stringify(hash)},
          success: DataLoadedUpdate,
          error: ErrorHandler}
      );

      function DataLoadedUpdate(data) {
        console.log("DataLoadedUpdate - " + data.result);
      }
    }
  }

  function ErrorHandler(jqXHR, state, error) {
    alert(state + " " + error);
  }
}