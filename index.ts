//1. 문자열, 숫자, 불리언, null, undefined

const a = "";
const b: string = "010";

const c: boolean = false;

//2. 배열, 객체
const a1 = [1, "asdas", false, null];

const a2: number[] = [1, 2, 2, 3, 3, 12, 2, 13];

const o = { name: " ", age: 12 };
const o2: { name: string; age: number } = { age: 12, name: "123" };

const a3: { name: string; age: number }[] = [
  { name: "123", age: 12 },
  { name: "123", age: 14 },
];

const a4: Array<number> = [1, 2, 3, 34];
const a5: number[] = [1, 2, 3, 34];

type S = string;

const s1: S = "1";
const s2: S = "boolean";
const s3: S = "null";
const s4: S = "undefined";
const s5: S[] = ["1", "2", "3", "34"];

type Type<M = string> = M;

const t1: Type<number> = 0;

const t2: Type<string> = "0";

const t3: Type<number> = 12;

type OBJ<M = string> = {
  name: string;
  age: number;
  mobile: M;
};
const p1: OBJ = { age: 12, name: "asd", mobile: "01012341234" };
const p2: OBJ<number> = { age: 12, name: "asd", mobile: 12341234 };

const p3: OBJ<number | string | boolean>[] = [p1, { ...p2, mobile: false }];

interface Animal<P = number> {
  name: string;
  id: number;
  price: P;
  age: number;
  isFemale: boolean;
}

const an1: Animal = {
  name: "Dog",
  age: 12,
  isFemale: false,
  price: 1234,
  id: 123434,
};

const an2: Animal<string> = {
  name: "Dog",
  age: 12,
  isFemale: false,
  price: "1234",
  id: 123434,
};

const an3: Animal<string | number>[] = [an1, an2];

const pr1 = Number(an3[0].price) * 12;
const pr2 = Number(an3[1].price) * 12;
