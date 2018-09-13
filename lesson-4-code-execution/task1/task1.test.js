const bestWorker = require('./task1');

describe('Math.max', () => {
  it('max value', () => {
    let tasksCompleted = {
      'Anna': 15,
      'Serg': 35,
      'Elena': 1,
      'Anton': 99
    };
    let result = Math.max(tasksCompleted[value]);
    expect(result).toBe(99);
  });
});