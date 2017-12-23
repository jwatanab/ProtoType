const React = require('react')
const Header = require('../component/Header')
const Footer = require('../component/Footer')

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const dt = new Date()
        const date = dt.getDate()
        return (
            <div>
                <Header />
                <div className='chat'>
                    <div className="right">
                        <div className="content_date">
                            <span className=''></span>
                        </div>
                    </div>
                    <div className='bg'>
                        <div className="date">
                            <div className="title">Message Chat</div>
                            <div className="show_date">{date}日</div>
                        </div>
                        <div className="message_zoom"></div>
                    </div>
                    <div className='bar'>
                        <h3 className='people'>氏名:</h3>
                        <input className='file' type='file' multiple />
                        <textarea className='textInput' title='メッセージ' placeholder='メッセージ'></textarea>
                        <button className='submitBtn'>送信</button>
                        <i className='i'>
                            <i className="fa fa-picture-o"></i>
                        </i>
                    </div>
                    <div className="main_content"></div>
                    <div className="footer">
                        <div className="owner"></div>
                    </div>
                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="/scripts/chat.js"></script>
                <Footer />
            </div>
        )
    }
}

Header.defaultProps = { initial: 'チャット画面' }

module.exports = Chat