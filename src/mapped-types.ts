export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
//Profile内の全プロパティの型を
//文字列リテラルのユニオン型として取得する
type PropertyTypes = keyof Profile;

//以下のように書けば既存の型に対して、追加で型を指定することができる。
type Optional<T> = { [P in keyof T]?: T[P] | null };

type OptionalProfile = Optional<Profile>;