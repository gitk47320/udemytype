export {};

//nullは型推論できず、anyとなる。
//そのため、nullのみを扱う場合はnull型を定義する。
let absence: null = null;
//以下のようなnull以外の値は代入できない
//absence = 'hello';

//undefinedもnull同様、anyとなる。
//そのため、undefinedのみを扱う場合はundefined型を定義する。
let data = undefined;
//以下のようなundefined以外の値は代入できない
//data = 123