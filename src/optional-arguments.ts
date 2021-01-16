export {};

//関数の引数に対して、ある引数の入力を必須としない場合
//その引数の末尾に?をつける。
//例：以下のようなbmi関数を実装する
//bmi(身長,体重. console.logで出力するかどうか?)
//身長、体重は必須だが、最後のconsole.logで出力するかどうかはなくてもいい。
//実行のされ方は以下の３パターンを想定
//bmi(1.78, 86, true); -> console.logにbmi値を出す
//bmi(1.78, 86, false); -> console.logにbmi値を出さない
//bmi(1.78, 86); -> console.logにbmi値を出さない
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.78,86,true);
bmi(1.78,86,false);
bmi(1.78,86);