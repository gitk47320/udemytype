export {};

//定義のみを書くクラスを抽象クラス、抽象メソッドとよぶ
//abstractをつけると抽象クラス、抽象メソッドを作成できる
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr'
  }
}