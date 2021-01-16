export {};

//dayOfTheWeekには曜日しか入れたくないという場合、以下のように定義可能
//このような定義をliteral型とよぶ
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木'| '金' | '土' = '日';
dayOfTheWeek = '月'
//以下はコンパイルエラー
//dayOfTheWeek = '31'

//literal型は数字にも使える
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
//以下はコンパイルエラー
//month = 13

//実用性はないがbooleanでも一応できる
let TRUE: true = true;
//以下はコンパイルエラー
//TRUE = false