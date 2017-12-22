const React = require('react')
const Header = require('../component/Header')
const Footer = require('../component/Footer')

class Prompt extends React.Component {
    constructor(props) {
        super(props)
        this.state = { i: 'i' }
    }
    render() {
        return (
            <div>
                <Header />
                <h2>ここではシフト入力画面が入ります</h2>
                <Footer />
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト入力画面' }

module.exports = Prompt
