const React = require('react')
const Header = require('../component/Header')

class Comfirm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <h2>ここにはシフト確認画面が入ります</h2>
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト確認画面' }

module.exports = Comfirm