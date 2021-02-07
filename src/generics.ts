export {};

//以下のコードをまとめて一つのメソッドとして定義したい
// const echo = (arg: number): number  => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

//ジェネリクス関数として以下のようにする
const echo = <T>(arg: T): T => {
  return arg;
};

//<T>で定義された部分には、メソッド使用時に
//以下の通り型といっしょに値を代入する
console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

//ジェネリクスはクラスにも使える
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello,generics!').echo());
console.log(new Mirror<boolean>(true).echo());