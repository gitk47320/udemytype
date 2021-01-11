export {};

//numbers1,2ともに意味は同じ
let numbers1: number[] = [1,2,3];

let numbers2: Array<number> = [1,2,3];

//Array<>はインタフェースとして抽象化されいて
//自由に配列の方を設定できる。例えば以下のように文字列の配列、とか
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: Array<String> = ['TypeScript', 'Javascript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

//配列内要素に型が複数存在する場合は例えば以下のようにする
//なお、順番は任意でよい（この順に要素の型が合致する必要はない）
let hairetsu: (string | number | boolean)[]= [1, false, 'Japan'];