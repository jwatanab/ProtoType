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
                <div className='footer'>
                    <div className='link'>
                        <h3 className='title'>管理者ログイン</h3>
                        <h3 className='title'>利用方法</h3>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Footer