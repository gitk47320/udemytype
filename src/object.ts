export {};

//object型はjson形式のデータを定義できる
let profile1: object = { name: 'Ham' };
//ただ、object内のプロパティについては上記では定義されていない
//そのため、以下のように書き換えることができてしまう
profile1 = { birthYear: 1976 };

//上記を防ぐために、以下のように型を定義する
//{}でobject型そのものの定義をする
let profile2: {
  //さらに、プロパティに対して型の定義をする
  //以下はnameというstring型のプロパティを定義している
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'Nimo'};