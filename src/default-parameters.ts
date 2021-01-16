export {};

//引数の入力がない場合は、デフォルトで関数に設定した値を利用する、
//という実装が可能
const nextYearSalary = (currentSalary: number, rate: number = 1.1):number => {
  return currentSalary * rate;
}

console.log(nextYearSalary(1000, 1.05))
console.log(nextYearSalary(1000))