export {};

//nameはanu型
let name: any = 'Ham';

//lengthはnumber型が入るのが正しいが、型定義がないため、
//文字列'foo'を代入可能。number型のみが入るようにしたい。
let length = name.length
length = 'foo'

//型アサーションを使うことで、正しい型以外のものが代入されると
//コンパイルエラーとなる。
//型アサーションは以下の3パターンの書き方がある
//let length = name.length as number;
//let length = (name as string).length;

////ただし、以下はJSXの書き方とよく似ているので推奨されていない
//let length = (<string>name).length;