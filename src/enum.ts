export {};

//グループを作成して、要素を複数持たせることができる
//例えば以下のように1~12月をMonthsというグループで定義できる
enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  Decenber
}

//上記にはそれぞれ、0始まりで番号が振られている
//以下は、Monthsの各要素にアクセスしているが、それぞれ
//0始まりで振られた番号を表示する。
console.log(Months.January);
console.log(Months.February);
console.log(Months.Decenber);

//番号を振る際の始まりを変更できる。
//以下のように最初の要素であるJanuaryを0始まりでなく、1始まりで
//採番することも可能。
enum Months1 {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  Decenber
}

console.log(Months1.January);
console.log(Months1.February);
console.log(Months1.Decenber);


//ハッシュのような形で要素を持たせることも可能
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

//途中で以下のように要素を追加することも可能
enum COLORS {
  YELLOW = '#FFFF00'
}

COLORS.YELLOW;