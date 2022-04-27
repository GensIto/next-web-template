### 始めに
vscodeのプラグインvscode-styled-componentsを導入すると開発が早くなります

### src ディレクトリ以下の構成

- components
  - atomic designで構成しています
    - [Atomic Design入門](https://qiita.com/Kazuhiro_Mimaki/items/3d9a8594064aab5119da#:~:text=Atomic%20Design%E3%81%A8%E3%81%AFUI,%E3%81%AA%E3%82%8B%E3%80%8D%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E6%84%9F%E3%81%98%E3%81%A7%E3%81%99%E3%80%82)
    -  [atomic-design-を分かったつもりになる](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B)

 - styles
   - tailwind cssを採用しています
   - どうしてもcssを書きたくなった時はstyled componentで書いてください
   - ルールとしてはcomponent名のフォルダを作成しそこにindex.jsxとstyled.js(jsx)を作成してください
   - 例外としては著しく可読性が低くならないのならまとめて書いてしまってもいいです

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

    - hooks
      - ここには独自hooksを入れてください
      - media.jsはstyled componentのレスポンシブのhooksです
      - ScrollAnimationはスクロールClient Heightの90％になるとClassName jsActiveが付き下からフェードアップしてきます Active時のアニメーションを変えたければglobal.cssを変更してください

### atomic design内で説明がいると思ったもの
  - Templates & Organisms 配下のDir***.jsx
    - urlに/が入ったときにheaderのロゴが表示されなくなったのでそれの応急処置

