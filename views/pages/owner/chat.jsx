const React = require('react')
const Header = require('../../component/Header')
const Footer = require('../../component/Footer')

class OwnerChat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <h3>ここでは管理者チャット画面が入ります</h3>
                </div>
                <script src='/scripts/owner/chat.js'></script>
                <Footer />
            </div>
        )
    }
}

Header.defaultProps = {
    /*  Custom */
    initial: 'チャット画面',
    title: '管理者ログイン',
    /*  init  */
    home: '/owner/index',
    item1: '確定予定表送信',
    link1: '/owner/prompt',
    item2: '管理者シフト確認',
    link2: '/owner/confirm',
    item3: '管理者メッセージ確認',
    link3: '/owner/chat'
}

Footer.defaultProps = {
    item1: 'ホームに戻る',
    item2: '利用方法'
}

module.exports = OwnerChat