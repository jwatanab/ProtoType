## Docment
***
### ReactView in Express

- 弱点
  -  setStateは使えない
  -  複数のscriptファイルは読み込めない(1つだけ)
  -  onClick等のイベントハンドラは使えない
  -  グローバル環境がReactなのでdocument等使えない
- 利点
  - コンポーネントを外部に公開すればどこでも利用できる(この場合にはViewのみ)
  - jsx側で(<'div'></'div'>)等の明確なVisual DOM追加ができる
  - propsをうまく使えば動的なHTMLコンポーネントが生成できる
  - jsonでうまく渡せれば完全に要素分だけ要素を生成できる
```js
    this.state = {
        item:this.state.item
    }
    {(()=>{
        if(this.state.item){
            return (
                <a>{this.state.item}</a>
            )
        }
    })()}
```