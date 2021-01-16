export {};

//ある変数に対して、複数の型を定義可能
//以下のようにすると、数値型と文字列型両方代入可能となる。
let value: number | string = 1;
value = 'foo';
value = 100;