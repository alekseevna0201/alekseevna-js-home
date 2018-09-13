describe('String methods', () => {
  it('String', () => {
    const str = 'abc';
    expect(str.toLocaleUpperCase()).toBe('ABC');
  });
});

describe('String methods', () => {
  it('String', () => {
    const str = 'abc';
    expect(str.toLocaleLowerCase()).toBe('abc');
  });
});

describe('Number methods', () => {
  it('Number', () => {
    let n = 120;
    expect(n * 2).toBe(240);
  });
});

describe('Boolean methods', () => {
  it('Boolean', () => {
    let  x = NaN;
    expect(x === NaN).toBe(false);
  });
  it('Boolean', () => {
    let x = NaN;
    expect(x !== NaN).toBe(true);
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
    let x;
    expect(x).toBe(undefined);
  });
});

describe('Undefined', () => {
  it('undefined', () => {
    const x = undefined;
    expect(x !== null).toBe(true);
  });
});

describe('Object', () => {
  it('object', () => {
    const v = {};
    expect(typeof v).toBe('object');
  });
});

describe('Typeof', () => {
  it('typeof', () => {
    const v = 100;
    expect(typeof 100).toBe('number');
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
  it('comparison operation smaller negative', () => {
    let n = 'auto';
    expect(n > 'bmw').toBe(false);
  });
  it('comparison operation larger', () => {
    let n = 120;
    expect(n > 1).toBe(true);
  });
  it('comparison operation larger', () => {
    let n = 120;
    expect(n > 200).toBe(false);
  });
  it('comparison operation equal or smaller', () => {
    let n = 5;
    expect(n <= 5).toBe(true);
  });
  it('comparison operation equal or larger negative', () => {
    let n = 'abc';
    expect(n >= 'def').toBe(false);
  });
  it('comparison operation equal or larger', () => {
    let n = 'abc';
    expect(n >= 'abc').toBe(true);
  });
  it('comparison operation equal', () => {
    const n = 120;
    expect(n === 120).toBe(true);
  });
  it('comparison operation equal negative', () => {
    const n = 5;
    expect(n === 120).toBe(false);
  });
  it('comparison operation not equal', () => {
    const n = 100;
    expect(n !== 110).toBe(true);
  });
  it('comparison operation not equal negative', () => {
    const n = 100;
    expect(n !== 100).toBe(false);
  });
  it('comparison operation identically', () => {
    const x = 10;
    expect(x === 10).toBe(true);
  });
  it('comparison operation not identically', () => {
    const n = 100;
    expect(n !== 110).toBe(true);
  });
});

describe('Logical operations', () => {
  it('logical operations &', () => {
    const name = 'Masha';
    const age = '18';
    expect((name == 'Alena') && (age == '18')).toBe(false);
  });
  it('logical operations ||', () => {
    const name = 'Masha';
    const age = '18';
    expect((name == 'Dariya') || (age == '18')).toBe(true);
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

describe('Math objects', () => {
  let x = 5;
  let y = 10;
  let z = 5.7;
  let a = 25;
  it('math objects PI', () => {
    expect(Math.PI).toBe(3.141592653589793);
  });
  it('math objects', () => {
    expect(Math.abs(-y)).toBe(10);
  });
  it('math objects', () => {
    expect(Math.max(x,y)).toBe(10);
  });
  it('math objects', () => {
    expect(Math.min(x,y)).toBe(5);
  });
  it('math objects', () => {
    expect(Math.round(z)).toBe(6);
  });
  it('math objects', () => {
    let z = 5.7;
    expect(Math.ceil(z)).toBe(6);
  });
  it('math objects', () => {
    expect(Math.floor(z)).toBe(5);
  });
  it('math objects', () => {
    expect(Math.sqrt(a)).toBe(5);
  });
  it('math objects', () => {
    expect(Math.sin(Math.PI/2)).toBe(1);
  });
  it('math objects', () => {
    expect(Math.cos(Math.PI)).toBe(-1);
  });
  it('math objects', () => {
    expect(Math.tan(Math.PI/2)).toBe(16331239353195370);
  });
});

describe('String methods', () => {
  it('string length', () => {
    const str = 'гитара гитара';
    expect(str.length).toBe(13);
  });
  it('string []', () => {
    const str = 'гитара гитара';
    expect(str[1]).toBe('и');
  });
  it('string sub', () => {
    const str = 'гитара гитара';
    expect(str.substr(10)).toBe('ара');
  });
  it('string sub2', () => {
    const str = 'javascript';
    expect(str.substr(5, 7)).toBe('cript');
  });
  it('string slice', () => {
    const str = 'javascript';
    expect(str.slice(3, 8)).toBe('ascri');
  });
  it('string split', () => {
    let str = 'pigs';
    expect(str.split('')).toBe["p", "i", "g", "s"];
  });
  it('string lower', () => {
    const str = 'PIGS';
    expect(str.toLowerCase()).toBe('pigs');
  });
  it('string index negative', () => {
    const str = 'гитара гитара';
    expect(str.indexOf('а', 20)).toBe(-1);
  });
  it('string upper', () => {
    const str = 'гитара гитара';
    expect(str.toUpperCase()).toBe('ГИТАРА ГИТАРА');
  });
  it('string index', () => {
    const str = 'when pigs fly';
    expect(str.indexOf('p')).toBe(5);
  });
  it('string replace', () => {
    const str = 'when pigs fly';
    expect(str.replace('when', 'wow')).toBe('wow pigs fly');
  });
  it('string trim', () => {
    let S=' \n\r\t\v pigs \n\r\t\v ';
    expect(S.trim()).toBe('pigs');
  });
});

describe('Array methods',  () => {
  let A = ['black', 'red', 'white'];
  let B = ['orange', 'grey'];
  it('array length', () => {
    expect(A.length).toBe(3);
  });
  it('array concat', () => {
    expect(A.concat(B)).toBe['black', 'red', 'white', 'orange', 'grey'];
  });
  it('array join', () => {
    expect(A.join('*')).toBe('black*red*white');
  });
  it('array push', () => {
    expect(A.push('pink')).toBe['black', 'red', 'white', 'pink'];
  });
  it('array pop', () => {
    expect(A.pop()).toBe('pink');
  });
  it('array unshift', () => {
    expect(A.unshift('green')).toBe['green','black', 'red', 'white'];
  });
  it('array shift', () => {
    let A = ['black', 'red', 'white'];
    expect(A.shift()).toBe('black');
  });
  it('array slice' , () => {
    let N =['black', 'red', 'white', 'orange', 'grey'];
    expect(N.slice(2,3)).toBe['white', 'orange'];d
  });
});

describe('Array methods', () => {
  it('array splice', () => {
    let N = ['l', 'i', 'u', 'b', 'o', 'u'];
    expect(N.splice(4, 2)).toBe['o', 'u'];
  });
});

describe('Array reverse', () => {
  it('array reverse', () => {
    let X =['A', 'B', 'C'];
    expect(X.reverse()).toBe['C', 'B', 'A'];
  });
});

describe('Array sort', () => {
  it('array sort', () => {
    let X = ['c', 'b', 'a'];
    expect(X.sort()).toBe['a', 'b', 'c'];
  });
});

describe('Array sort function', () => {
  it('array sort', () => {
    let Y = ['110', '100', '200'];
    expect(Y.sort(function CompareX(A,B) {return B - A;})).toBe['100', '110', '200'];
  });
});