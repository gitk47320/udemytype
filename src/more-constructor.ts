export {};

class Person {
  //コンストラクタの引数で、アクセス修飾子をつけることができる
  //これにより、クラス内における変数の定義やコンストラクタの定義を
  //簡略化できる。
  constructor(public name: string, protected age: number) {
  }

  //上記のコードは以下と同じ。
  //public name: string;
  //protected age: number;

  //constructor(name: string, age: number, nationality: string) {
  //  this.name = name;
  //  this.age = age;
  //}

}

const me = new Person('はむさん', 43);
console.log(me);