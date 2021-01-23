export {};

class VisaCard {
  //readonlyをつけるとその変数を別の値に更新することはできない
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさん')
console.log(myVisaCard.owner)
//以下コードはエラーになる
//myVisaCard.owner = 'ベーコン'