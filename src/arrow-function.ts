export {};

//アロー関数に対する型定義は以下のようになる。
//bmi関数そのものに型定義をすることが可能。
//やり方はanonymous-function.tsと同じような具合。
//そして、return文の省略も可能。
//https://qiita.com/kumakuma112/items/98781f4a71ea1dfc6e04
let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));