export {};

let name = 'Atsushi';

name = 'Ham';

//constに対してもアサーション設定が可能
let nickname = 'Ham' as const;
//nicknameはconstのため、以下コードはコンパイルエラーとなる。
//nickname = 'Hamtaro';

//constに対するアサーションは
//オブジェクトに対しても可能
let profile ={
  name: 'Atsushi',
  height: 178
} as const;

//以下コードはコンパイルエラーとなる
//profile.name = 'Ham';
//profile.height = 180;