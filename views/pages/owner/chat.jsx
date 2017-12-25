const React = require('react')
const Header = require('../../component/Header')
const Footer = require('../../component/Footer')

class OwnerChat extends React.Comnponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <div classNam='container'>
                    <h3>ここでは管理者チャット画面が入ります</h3>
                </div>
            </div>
        )
    }
}