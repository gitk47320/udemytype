export {};

//静的メンバーとは？
//newをせずにインスタンスを参照できるクラス内のメンバーのこと。

class Me {
  //静的メンバーにしたい場合はstaticをつける
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  //メソッドに対してもstaticをつけることが可能
  static work() {
    //return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`
  }
}

//通常のインスタンス生成からの呼び出しは
//staticがついた変数に対してはできない（エラー）
//let me = new Me();
//console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());