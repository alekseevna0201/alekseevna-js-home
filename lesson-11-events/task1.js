'use strict';

(function () {

var doc = document;

var elementsField = [
  {legend: "Для внесения вашего сайта в каталог, заполните форму"},
  {label: "Разработчики:", type: "text",width: 450},
  {label: "Название сайта:", type: "text", width: 450},
  {label: "URL сайта:", type: "text", width: 300},
  {label: "Дата запуска сайта:", type: "date", width: 150},
  {label: "Посетителей в сутки:", type: "number", width: 150},
  {label: "E-mail для связи:", type: "text", width: 250},
  {label: "Рубрика каталога:",
    type: "select",
    options: ["здоровье", "домашний уют", "бытовая техника"]},
  {label: "Размещение:", type: "radio", name: "radio", items: ["бесплатное", "платное", "VIP"]},
  {label: "Разрешить отзывы:", type: "checkbox"},
  {label: "Описание сайта:", type: "textarea", name: "description", width: 600, rows: 15},
  {type: "submit", value: "Опубликовать"}
];

  function makeForm(arr, id) {
    var form = doc.forms[id];
    var field = doc.createElement("fieldset");

    for (var i = 0; i < arr.length; i++) {
      var br = doc.createElement('br');

      if ('legend' in arr[i] === true) {

        function createLegend () {
          var legend = doc.createElement('legend');
          field.appendChild(legend);
          var text = doc.createTextNode(arr[i].legend);
          legend.appendChild(text);
        }
        createLegend();
      }

      function addElement () {
        Elem.name = arr[i].name;
        Elem.style.width = arr[i].width + "px";
        Elem.style.marginTop = "10px";
        field.appendChild(Elem);
        field.appendChild(br);
      }

      if ('label' in arr[i] === true) {

        var label = document.createElement('label');
        var text = document.createTextNode(arr[i].label);
        label.appendChild(text);
        label.style.width = arr[i].width;
        field.appendChild(label);
      }

      if (arr[i].type === "radio") {

        function createRadio () {
          for (var k = 0; k < arr[i].items.length; k++) {
            Elem = document.createElement('input');
            Elem.type = arr[i].type;
            var textRadio = document.createTextNode(arr[i].items[k]);
            field.appendChild(Elem);
            field.appendChild(textRadio);
            field.appendChild(br);
          }
        }

        createRadio();

      } else if (arr[i].type === "checkbox") {

          Elem = document.createElement('input');
          Elem.type = arr[i].type;
          Elem.checked = true;

        addElement();

      } else if (arr[i].type === "select") {

        var Elem = document.createElement('select');
        for (var k = 0; k < arr[i].options.length; k++) {
          var option = document.createElement('option');
          option.value = k;
          var options = document.createTextNode(arr[i].options[k]);
          option.appendChild(options);
          Elem.appendChild(option);
        }
        addElement();

      } else if (arr[i].type === "textarea") {

        Elem = document.createElement('textarea');
        Elem.rows = arr[i].rows;
        Elem.style.display = "block";
        addElement();

      } else if (arr[i].type === "submit") {

        Elem = document.createElement('input');
        Elem.type = arr[i].type;
        Elem.value = arr[i].value;
        addElement();

      } else {

        Elem = document.createElement('input');
        Elem.type = arr[i].type;
        addElement();
      }
    }
    form.appendChild(field);
  }
  makeForm(elementsField, "addSiteForm");
})();