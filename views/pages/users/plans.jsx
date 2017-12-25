const React = require('react')
const Header = require('../../component/Header')
const Footer = require('../../component/Footer')

class Flont extends React.Component {
    constructor(props) {
        super(props)
        this.state = { initial: this.props.initial }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="front">
                        <div class="title">
                            <h2>確定シフト</h2>
                        </div>
                        <div className="shift_image">
                            <div class="imgComponent">
                                <p class='inner_text'>12/24</p>
                                <img src='/img/24068420_1762809334021436_6727881327246584918_o.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
                <script src='/scripts/plans.js'></script>
                <Footer />
            </div >
        )
    }
}

Header.defaultProps = {
    initial: '予定表確認画面',
    home: '/',
    item1: 'シフト確認画面画面',
    item2: 'シフト投稿画面',
    item3: 'チャット画面',
    item4: '予定表確認画面',
    link1: '/users/confirm',
    link2: '/users/prompt',
    link3: '/users/chat',
    link4: '/users/plans',
    title: 'シフト管理'
}

module.exports = Flont