export {};

//同じクラス名を使いまわしたい場合、namespaceを分けることで対応可能
namespace Japanese {
  //namespaceの中にさらにnamespaceを定義することも可能
  //namespace内で定義されたクラスを外から参照するために
  //exportをつける必要がある
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string, 
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);
const michael = new English.Person('Michael','Joseph','Jackson')
console.log(michael);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);