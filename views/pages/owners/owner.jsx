const React = require('react')
const Header = require('../../component/Header')
const Footer = require('../../component/Footer')

class Owner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <div class=''></div>
                <Footer />
            </div>
        )
    }
}

Header.defaultProps = {
    initial: '  オーナー',
    item1: 'メッセージ確認画面',
    item2: 'シフト確認画面',
    item3: 'チャット画面',
    item4: '予定表投稿画面',
    link1: '/confirm',
    link2: '/prompt',
    link3: '/chat',
    link4: '/plans',
    title: 'シフト管理'
}

module.exports = Owner