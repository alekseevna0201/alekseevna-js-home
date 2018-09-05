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
*/

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




