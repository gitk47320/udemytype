export {};

//クラスを利用する場合の型定義は、基本的には
//これまでやってきた型定義の方法でOK
class Person {
  name: string;
  age: number;

  //constructorは何も返さないという言語仕様のため
  //constructorメソッドの返り値への型定義は不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile() {
    return `name: ${this.name}, age: ${this.age} `
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
//let hanako = new Person();