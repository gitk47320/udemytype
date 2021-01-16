export {};

//無名関数も以下のように型定義が可能
let bmi = function (height: number, weight: number): number {
  return weight / ( height * height );
}

//bmiそのものに対して型を定義したい場合は以下のようにする
//let bmi: (height: number, weight: number) => number = function(
//  height: number,
//  weight: number
//): number {
//  return weight / ( height * height );
//}

console.log(bmi(1.78, 86));
