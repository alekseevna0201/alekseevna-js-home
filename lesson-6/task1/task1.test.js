

describe('Calculate tips', () => {
  it('John tips', () => {
    var valueJohn = tipCalculator(100);
    expect(valueJohn).toBe();
  });
  it('Mark tips', () => {
    var valueMark = tipCalculatorMark(200);
    expect(valueMark).toBe(18.2);
  });
});

describe('Function Calculating average', () => {
  it('To calculate tips average', () => {
    var aver = averageTipJohn();
    expect(aver).toBe(34.75);
  });
  it('To calculate tips average', () => {
    var average = averageTipMark();
    expect(average).toBe(18.2);
  });
});