export {};

//要素内の順序通りに型も指定したい。
//しかし(string | number)[]で指定するとそれができない
let profile = ['Ham', 43];
//以下のように入れ替えたやつも許容される
//今回は以下のような入れ替えたやつは不正としたい
profile = [43, 'Ham'];

//tupleがたを使う
let profilet: [string, number] = ['Ham', 43]
//tupleで上記定義した場合、以下は不正となる（コンパイルエラー）
//profilet = [43, 'Ham']