export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);

console.log(taro);

type PersonType = typeof Person;

//以下のようにクラスのconstrutorの引数の型定義から
//新しく型定義が可能。この場合ConstructorParametersを使う
type Profile = ConstructorParameters<PersonType>;

//PersonTypeクラスのconstructorから定義したProfile型で
//以下のようにオブジェクトを定義する
const profile: Profile = ['Ham', 43];

const ham = new Person(...profile);

console.log(ham);
