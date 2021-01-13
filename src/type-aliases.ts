export {};

//型定義についてaliasを設定できる
//例えば以下のようにするとMojiretsu型をstringと同義とできる
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: '43'
};

//以下のようにC言語とかの構造体ちっくに設定もできる
type Profile = {
  name: string;
  age: string;
};

//Profile型のexample2のデータ
const example2: Profile = {
  name: 'Ham',
  age: '43'
};

//example2の型定義を別の型定義として利用可能
//example1の型定義をProfile2の型定義としている
type Profile2 = typeof example1;