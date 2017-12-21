const React = require('react')
const Header = require('../component/Header')

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
                <div className='bg'></div>
                <form className='chat' action='insert' method='post'>
                    <div className='bar'>
                        <h3 className='people'>氏名:</h3>
                        <input className='file' type='file' multiple />
                        <input name="name" className='file noneName' />
                        <input name="img" className='file noneImg' />
                        <input className='textInput' type='text' name="text" />
                        <button className='submitBtn'>送信</button>
                        <i className='i'>
                            <i className="fa fa-picture-o"></i>
                        </i>
                    </div>
                    <div className="main_content"></div>
                    <div className="footer">
                        <div className="owner"></div>
                    </div>
                    <script src="/scripts/chat.js"></script>
                </form>
            </div>
        )
    }
}

Header.defaultProps = { initial: 'チャット画面' }

module.exports = Chat