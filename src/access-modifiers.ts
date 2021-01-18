export {};

//アクセス修飾子の適用が可能
//public・・・参照可能
//private・・・外部からの参照不可(ただし、同じインスタンス内であれば参照可能)
//protected・・・サブクラスから参照可能
//修飾子がない場合はpublic扱いで参照可能
//基本的には、private,protectedしたいものだけ記述し,publicは明示的に記述しない
class Person {
  //age,nationalityについてPersonクラスを継承したAndroidクラスから参照させたい
  //ただ、privateでは、サブクラスからの参照ができない
  //そのため、protectedで定義する
  public name: string;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile() {
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}
let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
///console.log(taro.age);
//let hanako = new Person();