### 始めに
vscodeのプラグインvscode-styled-componentsを導入すると開発が早くなります

### src ディレクトリ以下の構成

- components
  - atomic designで構成しています
    - [Atomic Design入門](https://qiita.com/Kazuhiro_Mimaki/items/3d9a8594064aab5119da#:~:text=Atomic%20Design%E3%81%A8%E3%81%AFUI,%E3%81%AA%E3%82%8B%E3%80%8D%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E6%84%9F%E3%81%98%E3%81%A7%E3%81%99%E3%80%82)
    -  [atomic-design-を分かったつもりになる](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B)

 - styles
   - tailwind cssを採用しています
   - component内にcssを書き示せるため保守・管理・運用がしやすそうなので,,,
   - どうしてもcssを書きたくなった時はstyled componentで書いてください
   - ルールとしてはcomponent名のフォルダを作成しそこにcomponentName.jsxとstyled.js(jsx)を作成してください
   - 例外としては著しく可読性が低くならないのならまとめて書いてしまってもいいです(50行以下程度)
   - 参考URLs
     - [styled-componentsを使ってCSS Animationを実装する方法](https://qiita.com/ku1987/items/89ef25c8c59286d9a181)
     - [Next.jsでstyled-componentsを使うときに最初に設定しておくこと【完全版】](https://zenn.dev/nbr41to/articles/c0c691653e3d55)
     - [styled-components でもカスタムデータ属性を使うと綺麗にかけて便利](https://qiita.com/elzup/items/cecabc55a12103215d03)

### styled conponentの例
    ├── components
    │   ├──  Atom
    │   │   ├── Button
     |    │   │     ├── Button.jsx 👈 ひとつにまとめていい例
     |    │   │     ├── ArrowButton.jsx 👈 ひとつにまとめていい例
     |    │   │     
     |    │
    │   ├──  Molecules
    │   │   ├── Hamburger 👈 分割する例
     |    │   │     ├── Hamburger.jsx
     |    │   │     ├── styled.jsx
     ```


### swiperについて
  - 参考urls
    - [Next.js+Typescript Swiperでカルーセルを作成する](https://qiita.com/Hiiisan/items/9561cabb7d125a431df7)
    - [Next.js+Typescript Swiperで作成したカルーセルのCSSを変更する](https://qiita.com/Hiiisan/items/64783ecace30ade32411)


### atomic design内で説明がいると思ったもの
  - Templates & Organisms 配下のDir***.jsx
    - urlにroot/aboutになったときにheaderのロゴが表示されなくなったのでそれの応急処置

### hooks
ここには独自hooksを入れてください
media.jsはstyled componentのレスポンシブのhooksです
ScrollAnimationはスクロールClient Heightの90％になるとClassName jsActiveが付き下からフェードアップしてきます Active時のアニメーションを変えたければglobal.cssを変更してください



