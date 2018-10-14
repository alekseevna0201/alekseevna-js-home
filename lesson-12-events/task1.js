var DragManager = new function() {
  var dragObject = {};
  var self = this;

  function onMouseDown(EO) {
    EO = EO || window.event;
    var elem = EO.target.closest('img');
    dragObject.elem = elem;

    // запомним, что элемент нажат на текущих координатах pageX/pageY
    dragObject.downX = EO.pageX;
    dragObject.downY = EO.pageY;

    return false;
  }

  function onMouseMove(EO) {

    if (!dragObject.avatar) {

      // начинаем перенос
      dragObject.avatar = createAvatar(EO); // создать аватар
      if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
        dragObject = {};
        return;
      }

      //вспомогательные свойства shiftX/shiftY
      var coord = getCoord(dragObject.avatar);
      dragObject.shiftX = dragObject.downX - coord.left;
      dragObject.shiftY = dragObject.downY - coord.top;

      Drag_Start(EO);
    }

    // отобразить перенос объекта при каждом движении мыши
    dragObject.avatar.style.left = EO.pageX - dragObject.shiftX + 'px';
    dragObject.avatar.style.top = EO.pageY - dragObject.shiftY + 'px';

    return false;
  }

  function onMouseUp(EO) {
    if (dragObject.avatar) { // если перенос идет
      Drag_Stop(EO);
    }

    dragObject = {};
  }

  function Drag_Stop(EO) {
    var dropElem = findDroppable(EO);

    if (!dropElem) {
      self.onDragCancel(dragObject);
    } else {
      self.onDragEnd(dragObject, dropElem);
    }
  }

  function createAvatar(EO) {

    // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
    var avatar = dragObject.elem;
    var old = {
      position: avatar.position,
      left: avatar.left ,
      top: avatar.top,
      zIndex: avatar.zIndex
    };

    // отмена переноса
    avatar.rollback = function() {
      avatar.style.position = old.position;
      avatar.style.left = old.left;
      avatar.style.top = old.top;
      avatar.style.zIndex = old.zIndex
    };

    return avatar;
  }

  function  Drag_Start(EO) {
    var avatar = dragObject.avatar;

    // инициировать начало переноса
    document.body.appendChild(avatar);
    avatar.style.zIndex = 9999;
    avatar.style.position = 'absolute';
  }

  function findDroppable(event) {
    var elem = document.elementFromPoint(event.clientX, event.clientY);
    return elem.closest('img');
  }

  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;
  document.onmousedown = onMouseDown;

  this.onDragEnd = function(dragObject, dropElem) {};
  this.onDragCancel = function(dragObject) {};
};

function getCoord(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}