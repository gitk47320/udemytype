export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

//ある関数の返り値の型を取得し、定義する
type ReturnTypeFromAdd = ReturnType<typeof add>;
