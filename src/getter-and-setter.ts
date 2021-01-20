export {};

//以下要件を満たすコードを実装する
// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;
  
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //privateで定義されている変数を
  //getterを定義して、外部から参照する。
  get owner() {
    return this._owner;
  }

  //privateで定義されている変数を
  //setterを定義して、外部から変更する。
  set secretNumber(secretNumber :number) {
    this._secretNumber = secretNumber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
//ownerは変更不可のため、以下コードはエラー。
//card.owner = 'Ham'
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 111111111;
console.log(card.debugPrint());