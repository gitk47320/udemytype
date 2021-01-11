export {};

//typescriptの場合基本的にreturnされる前提（何も返らなくてもreturn undefinedとなる）
//しかし、例外発生時のように。そのメソッドに返らず処理が続行されるケースがある。
//このケースに対応するために、never型をメソッドに定義する。
//never型は例外を発生差せる関数の場合には必ず定義することを心がける

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

//void型の場合はreturnされる値がないが、必ず（undefinedが）返る。
let foo: void = undefined;
//never型の場合はそもそもreturnしない。以下のコードは不正
//let bar: never = undefined;

//ただ、以下のようにnever型のみが代入可能
let bar: never = error('only me!');