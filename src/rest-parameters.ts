export {};

//javascriptでrest parameterというものがあるが、これに対する型定義は以下の通り
const sum: (...values: number[]) => number = (...values: number[]) => {
  return values.reduce(reducer);
}

const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue
}

console.log(sum(1,2,3,4,5));
