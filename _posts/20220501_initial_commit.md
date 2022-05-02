---
title: initial commit
createdAt: "2022-05-01"
updatedAt: ""
tags: [info]
---
## はじめに
初カキコ...ども...。

matsubyといいます。仕事ではTSとかReactをメインで触りつつ、Goとかk8sとかgRPCとかGraphQLとかCDKとか色々と触っています。

春になって暖かくなってきたので5年ぶりぐらいにブログを始めました。当時はSSGという言葉が俄に持て囃され始め、JekyllとかHugoとかが軽く流行っていた印象。自分は[Hexo](https://github.com/hexojs/hexo)と、適当に拾ったejsのテンプレートを使って遊んでました。この頃はまだ現場でPHPとJavaを書くことが多く、レガシーなフレームワークの利用への閉塞感を感じ、サイ本を頑張って読みながら敬虔なJSerになる夢を見ていたと記憶しています。

3日坊主にならないように、張り切りすぎて疲弊しないように、緩めのアウトプットを頑張っていきたいです。デザインはちょっとずつ更新とか出来ればいいなと思う。タイトルは一旦これで...。

## 使っているもの
Next.jsとChakra UIを中心に作っています。
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Next.js](https://github.com/vercel/next.js): SSG。いつの間にかSSGが主流になってる感
- [Chakra UI](https://github.com/chakra-ui/chakra-ui): レイアウトなど全体の装飾に
- [styled-jsx](https://github.com/vercel/styled-jsx): マークダウン内部の装飾に
- [gray-matter](https://github.com/jonschlinkert/gray-matter): マークダウンのメタデータ保持
- [remark/rehype](https://github.com/remarkjs/remark): マークダウン/HTMLパイプライン的なエコシステム
- [highlight.js](https://github.com/highlightjs/highlight.js): コード部分のシンタックスハイライト

## 以下、動作確認
typescript
```ts
import hoge from "./hoge";

(() => {
  const a: number = 42;
  const b = "test" as const;
  console.log(a, b);
})();
```

golang
```golang
package main

import "fmt"

func main() {
	var a int32 = 42
	b := "test"
	fmt.Println(a, b)
}
```

> blockquote
> あいうえお

**aiueio**
_kakikukeko_
~~sasisuseso~~