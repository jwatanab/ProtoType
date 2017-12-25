const React = require('react')

class Header extends React.Component {
    /*  bind_props  */
    constructor(props) {
        super(props)
        /*  init_state  */
        this.state = {
            initial: this.props.initial,
            item1: this.props.item1,
            item2: this.props.item2,
            item3: this.props.item3,
            link1: this.props.link1,
            link2: this.props.link2,
            link3: this.props.link3,
            title: this.props.title
        }
    }
    /*  Global_function  */
    render() {
        return (
            <html>
                <head>
                    <title>Docment</title>
                    <link rel='stylesheet' href='/sheets/style.css' />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                </head>
                <body>
                    <div id='modal_bg'></div>
                    <div id='modal_window'>
                        <span className='close'>&times;</span>
                        <div className='login_name'>
                            <h3>ログインを行ってください</h3>
                            <h4 className='caption_name'>Name:</h4>
                            <input className='input_name' />
                        </div>
                        <div className='login_password'>
                            <h4 className='caption_password'>Password:</h4>
                            <input type='password' className='input_password' />
                        </div>
                    </div>
                    <div className="container">
                        <div className="header">
                            <div className="left">
                                <div className="content_title">
                                    <h2 className=''>{this.state.initial}</h2>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="main_title">
                            <h2>{this.state.title}</h2>
                        </a>
                        <div className="main_menu">
                            <a href={this.state.link1} className="nav_a item">
                                <span>{this.state.item1}</span>
                            </a>
                            <a href={this.state.link2} className="nav_b item">
                                <span>{this.state.item2}</span>
                            </a>
                            <a href={this.state.link3} className="nav_c item">
                                <span>{this.state.item3}</span>
                            </a>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

Header.defaultProps = {
    item1: 'シフト確認画面画面',
    item2: 'シフト投稿画面',
    item3: 'チャット画面',
    link1: '/confirm',
    link2: '/prompt',
    link3: '/chat',
    title: 'シフト管理'
}

module.exports = Header