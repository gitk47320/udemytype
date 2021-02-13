export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//SomeTypesからある型を除外したい場合
//Exclude<残したい型, 除外したい型>とすると、
//残したい型が生き残る
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
//SomeTypes型から関数型をすべて除外することができる
//SomeTypesにDebugType以外の関数型が定義された場合でも
//除外される。
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//逆に、SomeTypesからある型のみを抽出したい場合は
//Extractを使う。使い方はExtract<抽出したい型, 抽出したくない型>
//となる
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

//ある型から、nullやundefinedという型を除外したい場合
//NonNullableTypesを使う。使い方はNonNullable<nullやundefinedが含まれている型>
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
