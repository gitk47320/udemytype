export {};

//例えばthrowingSpeedをもつPitcher1と
//battingAverageをもつBatter1を定義する

type Pithcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

//ここで、throwingSpeedとbattingAverageの両方を
//プロパティとして持つ型を定義したい場合、以下のようになる
// type TwowayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

//上記のように定義するのは、色々とスマートではない。
//そこでintersectionという方法で定義すると以下のようになる
type TwowayPlayer = Pithcher1 & Batter1;

const OtaniSHouhei: TwowayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}