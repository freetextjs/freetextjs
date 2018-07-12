import {
  Equal, EqualWithResult,
  Find, FindKey,
  Omit, OmitStrict,
  Override,
  Overwrite, OverwriteStrict,
  Remove, RemoveKey,
} from './';

declare const unknownValue:
  | null | undefined
  | number | string | boolean | object
  | ((...args: Array<any>) => any)
  ;
declare const definedUnknownValue:
  | number | string | boolean | object
  | ((...args: Array<any>) => any)
  ;

enum TestEnum0 {
  first = 0,
  second = 1,
}
enum TestEnum1 {
  E = 'E',
  O = 'O',
}

type TestType0 = {
  valueOf: number;
  world: string;
};
type TestType1 = number;
type TestType2 = {
  [key: string]: any;
};
type TestType3 = {
  [K in 'a' | 'b' | 'c']: object;
};
type TestType4 = Record<TestEnum0, string>;
type TestType5 = {
  [K in TestEnum1]: {
    [KK in K]: KK;
  };
};

interface TestInterface0 {
  key: string;
  lock: boolean;
}

interface TestInterface1 {
  [key: string]: number;
}

const omit00: Omit<TestType0, TestType1> = {
  valueOf: 5,
  world: '20',
};
const omit01: Omit<TestType0, 'valueOf'> = {
  world: 'abc',
};
// $ExpectError
const omit02: Omit<TestType0, 'valueOf'> = {};
const omit03: Omit<TestType1, never> = 3;
const omit04: Omit<TestType1, any> = 2;
const omit05: Omit<TestType1, any> = definedUnknownValue;
const omit06: Omit<TestType1, keyof TestType1> = 5;
const omit07: Omit<TestType1, keyof TestType1> = definedUnknownValue;
// $ExpectError
const omit08: Omit<TestType1, never> = '123';
const omit09: Omit<TestType2, never> = {
  a: 5,
  'abc-def': 'word',
  [0]: [1, 2, 3],
};
const omit10: Omit<TestType2, string> = {
  [0]: 5,
  [1]: 'my code',
};
const omit11: Omit<TestType2, string> = {
  // $ExpectError
  abc: 'ef',
};
const omit12: Omit<TestType2, 'key'> = {
  key: 'ef',
};
const omit13: Omit<TestType2, 'key'> = {
  other: 'value',
};
const omit14: Omit<TestType2, string | number> = definedUnknownValue;
const omit15: Omit<TestType3, 'a' | 'b'> = {
  c: {},
};
const omit16: Omit<TestType3, string> = definedUnknownValue;
const omit17: Omit<TestType3, string> = undefined as any as TestType2;
const omit18: Omit<TestType3, string> = undefined as any as TestInterface1;
const omit19: Omit<TestInterface0, 'lock'> = {
  key: 'heart',
};
const omit20: Omit<TestInterface0, 'key' | 'lock'> = definedUnknownValue;
const omit21: Omit<TestInterface0, string> = definedUnknownValue;
const omit22: Omit<TestInterface0, string> = undefined as any as TestType2;
const omit23: Omit<TestInterface1, string> = {
  [0]: 5,
};
const omit24: Omit<TestInterface1, string> = {
  // $ExpectError
  a: 4,
};
const omit25: Omit<TestInterface1, any> = definedUnknownValue;
const omit26: Omit<TestType4, 0> = {
  [TestEnum0.second]: 'jqewo',
};
const omit27: Omit<TestType4, TestEnum0.second> = {
  0: 'qlpqgq',
};
const omit28: Omit<TestType4, TestEnum0> = definedUnknownValue;
const omit29: Omit<TestType4, TestEnum0> = undefined as any as TestType2;
const omit30: Omit<TestType5, 'abc'> = {
  [TestEnum1.E]: {
    [TestEnum1.E]: TestEnum1.E,
  },
  [TestEnum1.O]: {
    [TestEnum1.O]: TestEnum1.O,
  },
};
const omit31: Omit<TestType5, TestEnum1.O> = {
  [TestEnum1.E]: {
    [TestEnum1.E]: TestEnum1.E,
  }
};
const omit32: Omit<TestType5, TestEnum1> = definedUnknownValue;
const omit33: Omit<TestType5, TestEnum1> = undefined as any as TestType2;

// $ExpectError
const omitStrict00: OmitStrict<TestType0, ''> = undefined as any;
const omitStrict01: OmitStrict<TestType0, never> = {
  valueOf: 21,
  world: 'is mine',
};
const omitStrict02: OmitStrict<TestType0, 'valueOf'> = {
  world: 'strict',
};
// $ExpectError
const omitStrict03: OmitStrict<TestType0, string> = undefined as any;
const omitStrict04: OmitStrict<TestType0, any> = definedUnknownValue;
const omitStrict05: OmitStrict<TestType1, 'valueOf'> = 3;
const omitStrict06: OmitStrict<TestType1, keyof number> = definedUnknownValue;
// $ExpectError
const omitStrict07: OmitStrict<TestType1, ''> = undefined as any;
const omitStrict08: OmitStrict<TestType2, string> = {
  [5]: [12, 3],
};
// $ExpectError
const omitStrict09: OmitStrict<TestType3, 'd'> = undefined as any;
const omitStrict10: OmitStrict<TestType3, 'a' | 'c'> = {
  b: undefined as any,
};
// $ExpectError
const omitStrict11: OmitStrict<TestInterface0, 'kye'> = undefined as any;
const omitStrict12: OmitStrict<TestInterface0, 'lock'> = {
  key: '213',
};
const omitStrict13: OmitStrict<TestInterface0, 'key' | 'lock'> = definedUnknownValue;
const omitStrict14: OmitStrict<TestInterface1, number> = {
  haskell: 2010,
};
const omitStrict15: OmitStrict<TestInterface1, string | number> = definedUnknownValue;
// $ExpectError
const omitStrict16: OmitStrict<TestInterface1, keyof any> = undefined as any;
const omitStrict17: OmitStrict<TestInterface1, 'abc'> = {
  abc: 312,
};
const omitStrict18: OmitStrict<TestInterface1, 'abc'> = {
  ddf: 100,
};

const overwrite00: Overwrite<TestType0, {}> = {
  valueOf: 556,
  world: 'over',
};
