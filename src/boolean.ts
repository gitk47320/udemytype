export {};
//exportがないとグローバル空間に変数を定義する
//例えば、exportがない状態でname変数を定義するとエラー扱いとなる。
//理由はすでに他のモジュールでname変数が定義されており、変数がかぶるため
//exportを使えば、グローバルではなく、ローカル（モジュール化されたこのファイル）で
//定義されるのでOK

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
//isFinished = 1;
console.log({ isFinished });