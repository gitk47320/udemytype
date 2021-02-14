export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

//ある関数の返り値の型を取得し、定義する
type ReturnTypeFromAdd = ReturnType<typeof add>;

//ReturnTypeの定義は以下の通り
//inferは条件の一部としてジェネリクス型を宣言する
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
