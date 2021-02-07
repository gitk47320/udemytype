export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

//any型にstring型は代入可能
//これを型の互換性があるという。

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

//string型にnumber型の値を代入しようとしている
//これはエラー（型の互換性がない）
//fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

//string型に文字列リテラル型を代入可能（互換性あり）
//文字列リテラル型はstring型の一部のため。
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

//number型に数値リテラル型を代入可能（互換性あり）
//数値リテラル型はnumber型の一部のため。
fooNumber = fooNumberLiteral

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

//上記AnimalとPersonは全く関連性がない
//オブジェクトについても型の互換性チェックがある。
//代入されるオブジェクトのメンバーが代入するオブジェクトのメンバーに
//存在するか、また、そのメンバーの型に互換性があるか。というチェックがある。
//これを「構造的部分型」という。
let me: Animal;
me = new Person(43, 'HamSan');