export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

//Pickはある型定義から、必要なものだけを型定義として抽出し、
//別の型定義として定義できる。
//以下はDetailedProfileから'name'と'weight'の型定義のみを指定し
//SimpleProfileとして新たに定義している
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

//逆に不要なものを選択できる。この場合はOmitを使う
type SmallProfile = Omit<DetailedProfile, 'height'>;
