export {};


const kansu = (): number => 43;

let numberAny: any = kansu();
//当該変数にどの型が入るかわからない場合、any型では型安全にならないので
//unknown型で定義しておく。
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
//unknown型のものに対して、適切に処理をさせる場合は
//unknown型に代入されている値が何型かで判定させ、処理する
//なお、unknown型のものに、any型やjavascriptと同じようなノリで（＝型安全でない）処理させようとすると
//コンパイルエラーとなる。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
