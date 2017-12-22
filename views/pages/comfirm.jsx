const React = require('react')
const Header = require('../component/Header')
const Footer = require('../component/Footer')

class Comfirm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <h2>ここではシフト確認画面が入ります</h2>
                <Footer />
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト確認画面' }

module.exports = Comfirm