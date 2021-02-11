export {};

//一度定義した型定義について、
//その定義内のプロパティの型をオプショナルとしたい
//※オプショナル・・・必須項目ではないプロパティ
type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

//以下のようにPartialを用いる
type PartialType = Partial<Profile>;

//逆もある。
//以下についてすべて必須としたい。
type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};

type RequiredType = Required<Profile>;
