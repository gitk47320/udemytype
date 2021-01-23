export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';  
  }
}

//継承のやり方はJavaとかといっしょ
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    //継承先クラスではsuperを呼び出す
    //親クラスのコンストラクタを示すので
    //親クラスのコンストラクタと同じの引数が必要
    super(name);
    this.speed = speed
  }
  run(): string {
    //親クラスのメソッドをsuper.で実行可能
    return `${super.run()} ${this.speed}km/h` 
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba',80).run());