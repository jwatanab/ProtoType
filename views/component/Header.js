const React = require('react')

class Header extends React.Component {
    /*  bind_props  */
    constructor(props) {
        super(props)
        /*  init_state  */
        this.state = { initial: this.props.initial }
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
                            <h2>シフト管理</h2>
                        </a>
                        <div className="main_menu">
                            <a href="/confirm" className="nav_a item">
                                <span className=''>シフト確認画面</span>
                            </a>
                            <a href="/prompt" className="nav_b item">
                                <span className=''>シフト投稿画面</span>
                            </a>
                            <a href="/chat" className="nav_c item">
                                <span className=''>チャット画面</span>
                            </a>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Header