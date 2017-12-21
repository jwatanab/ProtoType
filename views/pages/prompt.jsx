const React = require('react')
const Header = require('../component/Header')

class Prompt extends React.Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
        this.state = { i: 'i' }
=======
        this.state = {}
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
    }
    render() {
        return (
            <div>
                <Header />
<<<<<<< HEAD
                <h2>ここではシフト入力画面が入ります</h2>
=======
                <h2>ここにはシフト入力画面が入ります</h2>
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト入力画面' }

<<<<<<< HEAD
module.exports = Prompt
=======
module.exports = Prompt
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
