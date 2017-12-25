const React = require('react')

class Bar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: this.props.placeholder
        }
    }
    render() {
        return (
            <div className='chat'>
                <div className='bar'>
                    <h3 className='people'>氏名:</h3>
                    <input className='file' type='file' multiple />
                    <textarea className='textInput' title='メッセージ' placeholder={this.state.placeholder}></textarea>
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
        )
    }
}

module.exports = Bar