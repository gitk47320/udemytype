export {};

//TypeScriptは単一継承のみ可能。多重継承はできない。
//ただ複数のインターフェースは継承可能。
//よって多重継承を疑似的に実現できる。

//interfaceを定義
interface Kenja {
  //メソッドは定義するのみ。メソッドの実装は継承先クラスに任せる
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//複数のinterfaceを継承するclassを作成
class Jiro implements Kenja, Senshi {
  //継承元interfaceで定義されたメソッドは必ず継承先で実装する必要がある
  //実装をしないとコンパイルエラー扱いとなる
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();

//抽象クラスとの違いについて
//interfaceは抽象クラスとなんとなく似ているような気がするが
//抽象クラスは多重継承することができない。
//多重継承のようなことを実現したい場合はinterfaceを使うことになる。