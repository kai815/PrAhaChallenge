### SOLID 原則の各要素の説明

#### S：SRP(Single responsibility principle)、単一責任の原則

あるモジュールやクラスや関数などを、ある 1 つのアクターに対する責任だけで済むように適切に分割しましょうという原則です。あるクラスがユーザ、管理者、の機能を持っていたときに、ユーザの機能を改修した時に、管理者の機能に影響が及ぶかもしれませんので、管理者の機能まで調査する必要があります。ただ、ユーザの機能を持たせていなければ、影響の範囲がユーザまでの調査で済みますので、改修しやすくなります。

#### O：OCP(Open-Closed Principle)、解放閉鎖の原則

拡張に対してはオープンにして、修正に対してクローズドにする原則です。修正に対してクローズドにするというのは、バグなどがあった場合に修正するなという訳ではなく、機能追加のために責任を修正するべきではないということです。既存のコードを修正するのではなく追加するべきで、あるということです。

#### L：LSP(Liskov substitution principle)、リスコフの置換原則

S が T の派生型であれば、プログラム内で T 型のオブジェクトが使われている箇所は全て S 型のオブジェクトで置換可能であるという原則です。S が T を継承をして派生型であるということは、S は T の機能を満たすということなので、T の箇所は全て S に置き換えられるということです。

#### I：ISP(Interface segregation principle)、インタフェース分離の原則

インターフェースの利用者にとって不要なメソッドに依存させてはいけないという法則です。インターフェイス自体を利用用途に応じた最小限の規則にしておくようにすべきとうことです。

#### D：DIP(Dependency inversion principle)、依存性逆転の原則

「抽象」は実装の詳細に依存してはならない。実装の詳細が「抽象」に依存すべきであるという法則です。
(A というモジュールが B というモジュールを読み込む場合、A は B に依存しているといいます。)

### 単一責任の原則と、単純にファイルを細かなファイルに分解することの違い

単一責任の原則はモジュールやクラスに持たせる責任を単一にするのに対して、単純に細かなファイルに分解するのはモジュールやクラスの責任という観点でなくて分けることです。
単一責任の原則に倣った結果、ファイルもそれに伴って細かく分解することはあると思います。

### Open-Closed-Principle の実例を一つ

```ts
interface IFood {
  returnName(): string;
}

class Curry implements IFood {
  returnName = () => "カレー";
}

class Soba implements IFood {
  returnName = () => "蕎麦";
}

class Piza implements IFood {
  returnName = () => "ピザ";
}

const FoodMenus = (foods: IFood[]) => {
  for (let i = 0; i < foods.length; i++) {
    console.log(foods[i].returnName());
  }
};

const foods = [new Curry(), new Soba(), new Piza()];

FoodMenus(foods);
```

### リスコフの置換原則に違反した場合、どのような不都合が生じるか

派生側と基底側で振る舞いが変わる、もしくは派生側が基底側の機能を満たしてないことで、派生側の振る舞いや基底側の振る舞いをチェックする必要があり、コードが複雑になります。
また、継承は基底側の機能を派生側に持たせて、同じコードを書かないようにするためのものですが、継承した意味もなくなってしまいます。

### インターフェースを用いる事で、設計上どのようなメリットがあるか

クラス同士の結合が疎になる、クラスの機能を保証することができる（機能を実装してないとエラーになる）、クラスへの安全なアクセスを提供できるというメリットがあります。

### どんな時に依存性の逆転を用いる必要が生じるか？

変更が頻繁に行われるようなオブジェクトの場合、再利用性、保守性、柔軟性を高めるために用いるべきです。