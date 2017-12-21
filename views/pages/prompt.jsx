const React = require('react')
const Header = require('../component/Header')

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
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト入力画面' }

module.exports = Prompt
