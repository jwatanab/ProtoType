const React = require('react')
const Header = require('../../component/Header')
const Footer = require('../../component/Footer')

class OwnerConfirm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <h3>ここでは管理者入力画面が入ります</h3>
                </div>
                <Footer />
            </div>
        )
    }
}

module.exports = OwnerConfirm