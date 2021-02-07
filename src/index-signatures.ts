export {};

// //以下のようにoptionalなプロパティを持つオブジェクトを考える。
// let profile: { name?: string } = {};

// profile.name = 'Ham'
// //例えば、ageというものを代入したいが、その場合、profileオブジェクトにageを定義する必要がある。
// //プロパティが増えるたびにprofileオブジェクトの定義に追加するのは現実的ではない。。。
// profile.age = 43

//というわけで、index-signatureでプロパティと型を定義する。
//オブジェクトのキーに対して、型を指定する。
//オブジェクト定義時に、以下を書いてもいいが、冗長になるので、
//interfaceとして以下のように切り出す。
interface Profile {
  name: string;
  underTwenty: boolean;
  // { [ index: typeForIndex ]: typeForValue }のような形で以下の通り、型を指定する
  //任意のkeyがstring型でそれに対するvalueがstring,number,booleanのいずれかの型となる
  [ index: string ]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
profile.underTwenty = true;