export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Ham', 43);

//あるメソッドの引数の型を取得する場合
//Parametersを用いる
type Profile = Parameters<typeof debugProfile>;

//以下のProfileはdebugProfileメソッドの引数で
//定義した型が定義され、値もその型に従う必要がある
const profile: Profile = ['Gloria', 76];

//上記で設定した値をdebugProfileに以下のように与えると
//正常に出力される
debugProfile(...profile);
