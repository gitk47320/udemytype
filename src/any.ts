import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//any型について
//例えばAPIサーバから返ってくるjson型など、typescriptによる型推論ができないケースがある。
//このようなケースはany型とみなされ、コンパイラは型チェックをしない
//jsonデータは様々な型のデータを保持しているため、それに応じた型定義が必要。
//それは以下のようにinterfaceで定義する。

axios.get(url).then(function(response) {
  //例えばjsonがid, title, descriptionという三つの項目を持っている場合
  //まず、以下のようにinterfaceで定義する。
  //idがnumber、title、descriptionがstringである、Article型を定義。
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  //APIのレスポンスデータをArticle型として定義する
  let data: Article[];

  data = response.data;
  console.log(data);
});
