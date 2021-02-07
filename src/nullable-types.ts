export {};

// let profile: { name: string; age: number; } = {
//   name: 'Ham',
//   //typescriptのコンパイルオプションによってはageにnullやundefinedを設定するとエラーとなる
//   //具体的にはts-config.json内の「strictNullChecks: true」の場合はエラーとなる
//   //これをfalseにすると、nullやundefinedが代入できる。(が推奨しない)
//   //age: null
// };

//ts-config.json内の「strictNullChecks: true」でも、null以外の型定義されている
//メンバーにnullを入れたい場合ユニオン型でnull許容をする。
let profile: { name: string; age: number | null; } = {
  name: 'Ham',
  age: null
};