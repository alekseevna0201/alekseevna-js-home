/*
describe('String methods', () => {
  it('String', () => {
    const str = 'abc';
    expect(str.toLocaleUpperCase()).toBe('ABC');
  });
});

describe('Number methods', () => {
  it('Number', () => {
    const n = 120;
    expect(n * 2).toBe(240);
  });
});

describe('Boolean methods', () => {
  it('Boolean', () => {
    expect(NaN == NaN).toBe(false);
  });
});

describe('Null methods', () => {
  it('null', () => {
    const n = null;
    expect(n * 1).toBe(0);
  });
});

describe('Undefined', () => {
  it('undefined', () => {
    const x = undefined;
    expect(x == null).toBe(true);
  });
});

describe('Undefined', () => {
  it('undefined', () => {
    const x = undefined;
    expect(x !== null).toBe(false);
  });
});

describe('Object', () => {
  it('object', () => {
    const v = {};
    expect(typeof v).toBe('object');
  });
});

describe('Math methods', () => {
  it('math-addition', () => {
    const v = 100;
    expect(v + 100).toBe(200);
  });
  it('math-subtraction', () => {
    const v = 100;
    expect(v - 100).toBe(0);
  });
  it('math-multiplication', () => {
    const v = 100;
    expect(v * 100).toBe(10000);
  });
  it('math-division', () => {
    const v = 100;
    expect(v / 100).toBe(1);
  });
  it('math-remainder of division', () => {
    const v = 100;
    expect(v % 100).toBe(0);
  });
  it('math-minus', () => {
    const v = 100;
    expect(-v).toBe(-100);
  });
});

describe('Math methods other', () => {
  it('math-other-method', () => {
    let x = 100;
    expect(--x).toBe(99);
  });
  it('math-other-method2', () => {
    let x = 100;
    expect(++x).toBe(101);
  });
  it('math-other-method3', () => {
    let x = 100;
    expect(x--).toBe(100);
  });
  it('math-other-method4', () => {
    let x = 100;
    expect(x*=5).toBe(500);
  });
  it('math-other-method5', () => {
    let x = 100;
    expect(x/=2).toBe(50);
  });
  it('math-other-method6', () => {
    let x = 100;
    expect(x++).toBe(100);
  });
  it('math-other-method7', () => {
    let x = 100;
    expect(x+=5).toBe(105);
  });
  it('math-other-method8', () => {
    let x = 100;
    expect(x-=5).toBe(95);
  });
});

describe('String operations', () => {
  it('string operations', () => {
    const x = 'kitti';
    expect(x + 'cat').toBe('kitticat');
  });
  it('string operations2', () => {
    const x = 'hot';
    expect(x + ' dog').toBe('hot dog');
  });
});

describe('Comparison operation', () => {
  it('comparison operation smaller', () => {
    let n = 'cat';
    expect(n < 'dog').toBe(true);
  });
  it('comparison operation larger', () => {
    let n = 120;
    expect(n > 1).toBe(true);
  });
  it('comparison operation equal or smaller', () => {
    let n = 5;
    expect(n <= 5).toBe(true);
  });
  it('comparison operation equal or larger', () => {
    let n = 'abc';
    expect(n >= 'def').toBe(false);
  });
  it('comparison operation equal', () => {
    const n = 120;
    expect(n === 120).toBe(true);
  });
  it('comparison operation not equal', () => {
    const n = 100;
    expect(n !== 110).toBe(true);
  });
  it('comparison operation identically', () => {
    const x = 10;
    expect(x === 10).toBe(true);
  });
  it('comparison operation not identically', () => {
    const n = 100;
    expect(n !=== 110).toBe(true);
  });
});

describe('Logical operations', () => {
  it('logical operations &', () => {
    const name = 'Masha';
    const age = '18';
    expect((name == 'Alena') && (age == '18')).toBe(false);
  });
  it('logical operations ||', () => {
    expect((name == 'Alena') || (age == '18')).toBe(true);
  });
  it('logical operations !', () => {
    expect(age = !'18').toBe(false);
  });
});

describe('Transformation', () => {
  it('transformation parseInt', () => {
    const val = '-25.8734254263377';
    expect(parseInt(val)).toBe(-25);
  });
  it('transformation parseFloat', () => {
    const val = '-25.8';
    expect(parseFloat(val)).toBe(-25.8);
  });
  it('transformation other', () => {
    const val = '44';
    expect(val * 1).toBe(44);
  });
  it('transformation Number', () => {
    const val = '22';
    expect(Number(val)).toBe(22);
  });
  it('transformation Number negative', () => {
    const val = '30px';
    expect(Number(val)).toBe(NaN);
  });
  it('transformation isNaN', () => {
    const val = '100';
    expect(isNaN(val)).toBe(false);
  });
  it('transformation isFinite', () => {
    const val = '100';
    expect(isFinite(val)).toBe(true);
  });
  it('transformation String', () => {
    const val = 300;
    expect(String(val)).toBe('300');
  });
  it('transformation toString', () => {
    const x = -20;
    expect(x.toString()).toBe('-20');
  });
  it('transformation + empty string', () => {
    const val = 100;
    expect(val + '').toBe('100');
  });
  it('transformation Boolean', () => {
    const val = 300;
    expect(Boolean(val)).toBe(true);
  });
  it('transformation Boolean negative', () => {
    const val = 0;
    expect(Boolean(val)).toBe(false);
  });
  it('transformation !!', () => {
    const val = '100';
    expect(!!val).toBe(true);
  });
});
*/


