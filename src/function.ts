export {};

//Javascriptと同じノリで関数を定義できる
//引数、戻り値に型定義が可能。以下のような形
//function 関数名(引数: 型, 引数： 型, ...): 戻り値の型 {
//  処理を書く
//}

function bmi(height: number, weight: number): number {
  return weight / ( height * height );
}

console.log(bmi(1.78, 86));

