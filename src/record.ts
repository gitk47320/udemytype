export {};

//型引数を二つ受け取る
//Record<K, T>

//以下に共通のデータ型を持たせたい
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

//県名漢字と感染者数の定義
type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

//covid19japanというオブジェクトを定義したい。
//同時に型チェックも行う場合、１オブジェクト毎に
//以下のような型定義を追加する必要があるがこれはよろしくない
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
//   Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
//   (errorコード)Shiga: { kanji_name: '滋賀', confirmed_cases: true },
// };

//以下のようにRecord型を定義する。
//Prefecturesで定義された値に対してCovid19InfectionInfo型のオブジェクトを
//定義する、という意味となる。
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 },
};
