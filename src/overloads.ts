export {};

//関数をオーバーロードしたい場合、型安全をどう担保するか。
//シグネチャを宣言し、そこで型定義のうえ、関数を実装する.

//シグネチャの宣言。double関数はnumberとstring以外は許容しない
function double(value: number): number;
function double(value: string): string;

//関数の実装。こちらはany型だが、型安全である。
//シグネチャで事前に型定義をしているため。
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go'));