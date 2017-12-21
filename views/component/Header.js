const React = require('react')
const script = require('../../public/scripts/chat')

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
                </head>
                <body>
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
<<<<<<< HEAD
                            <a href="/comfirm" className="nav_a item">
=======
                            <a href="/confirm" className="nav_a item">
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
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