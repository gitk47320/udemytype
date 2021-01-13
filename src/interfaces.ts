export {};

type ObjectType = { 
  name: string, 
  age: number
};

//Type aliasesのほかに、interfaceによって独自の方を定義できる
//以下のようにObjectInterface型を定義可能
interface ObjectInterface {
  name: string, 
  age: number
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};