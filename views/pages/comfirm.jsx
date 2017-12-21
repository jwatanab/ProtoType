const React = require('react')
const Header = require('../component/Header')

class Comfirm extends React.Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
=======
        this.state = {}
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
    }
    render() {
        return (
            <div>
                <Header />
<<<<<<< HEAD
                <h2>ここではシフト確認画面が入ります</h2>
=======
                <h2>ここにはシフト確認画面が入ります</h2>
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト確認画面' }

module.exports = Comfirm