let obj = {
  className: 'open menu',
};

function deleteClassName(obj, cls) {
  let classArray = obj.className ? obj.className.split(' ') : [];
  for (i = 0; i <= classArray.length -1; i++) {
    if (classArray[i] !== cls) {
      delete classArray.open;
    } else {
      return;
    }
  }
  console.log(obj.className.split(' '));
}

deleteClassName(obj, 'open');
