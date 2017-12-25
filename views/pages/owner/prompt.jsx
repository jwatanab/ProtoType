const React = require('react')
const Header = require('../../component/Header')
const Footer = require('../../component/Footer')
const Bar = require('../../component/Bar')

class OwnerPrompt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <div className='owner_prompt'>
                    <div className='container'>
                        <h3>完成したシフト予定表と日付を入力して送信してください</h3>
                    </div>
                    <div className='preview'>
                        <h3 className='inner'>プレビュー画像が表示されます</h3>
                        <img className='preview_src' src='' alt='予定表' />
                    </div>
                    <Bar />
                </div>
                <script src='/scripts/ownerprompt.js'></script>
                <Footer />
            </div>
        )
    }
}
Header.defaultProps = {
    /*  Custom */
    initial: '予定表送信画面',
    title: '管理者ログイン',
    /*  init  */
    home: '/owner/index',
    item1: '確定予定表送信',
    link1: '/owner/prompt'
}

Bar.defaultProps = {
    placeholder: '日付'
}

Footer.defaultProps = {
    /*  init  */
    item1: 'ホームに戻る',
    item2: '利用方法'
}

module.exports = OwnerPrompt