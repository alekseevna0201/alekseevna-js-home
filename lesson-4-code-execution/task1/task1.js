'use strict';

function getBest(obj) {
  let tasksCompleted = {
    'Anna': 15,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
  };
  let tasks = 0;
  let bestWorker = '';
  for (let person in obj) {
    if (obj[person] > tasks) {
      tasks = obj[person];
      bestWorker = person;
    }
  }
  return bestWorker;
}

module.exports = getBest;