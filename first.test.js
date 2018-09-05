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
});*/

describe('Undefined', () => {
  it('undefined', () => {
    const x = undefined;
    expect(x == null).toBe(true);
  });
});