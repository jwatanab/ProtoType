const React = require('react')
const Header = require('../component/Header')
const request = require('superagent')

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="right">
                    <div className="content_date">
                        <span className=''></span>
                    </div>
                </div>
                <div className='bg'>
                    <div className="date">
                        <div className="title">Message Chat</div>
                    </div>
                    <div className="message_zoom"></div>
                </div>
                <div className='chat'>
                    <div className='bar'>
                        <h3 className='people'>氏名:</h3>
                        <input className='file' type='file' multiple />
                        <input className='textInput' type='text' />
                        <button className='submitBtn'>送信</button>
                        <i className='i'>
                            <i className="fa fa-picture-o"></i>
                        </i>
                    </div>
                    <div className="main_content"></div>
                    <div className="footer">
                        <div className="owner"></div>
                    </div>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="/scripts/chat.js"></script>
                </div>
            </div>
        )
    }
}

Header.defaultProps = { initial: 'チャット画面' }

module.exports = Chat