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
                <div className='container'>
                    <h2>ここには確認画面が入ります</h2>
                </div>
                <Footer />
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト確認画面' }

module.exports = Comfirm