// ! 리액트에서 prpops-drilling 할때 만약 함수를 전달한다면 그때 쓰면 됨
//! 기초소양교육
type Fn1<T = void> = (name: string) => T;

//! 인자값에 직접타입을 주기, return도 직접 타입주기
const fn1 = (name: string) => {
  console.log("hello", name);
  return name;
};

const fn2: Fn1 = (name: string): string => {
  console.log("name");
  return name;
};
