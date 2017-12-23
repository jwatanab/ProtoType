const React = require('react')

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        /**
         * ## 実現すること
         * ***
         * ### 画像、シフト全てを表示,編集
         * ### 評価グラフを作成
         */
        return (
            <div className='container'>
                <div id='footer'>
                    <div className='link'>
                        <h2 className='title owner'>管理者ログイン</h2>
                        <h2 className='title guide'>利用方法</h2>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Footer