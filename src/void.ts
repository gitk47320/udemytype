export {};

//何も返却値がない関数でも、必ずreturnを書く必要がある。
//ただ、何も返却値がない場合、いちいちreturnを書くのは煩わしく、本筋でもない（返す値がないのにreturnというのは気持ちが悪い
//そのため、この場合は関数にvoid型を定義する。
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());