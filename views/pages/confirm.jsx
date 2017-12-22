const React = require('react')
const Header = require('../component/Header')
const Footer = require('../component/Footer')

class Comfirm extends React.Component {
    constructor(props) {
        super(props)
    }
    getLast(e) {
        const dt = new Date()
        /*  引数に有力値をいれると月が返る  */
        if (e) {
            if (typeof e === 'object') {
                const ret = dt.getDate()
                return ret
            } else {
                const ret = dt.getMonth() + 1
                return ret
            }
        }
        /*  関数を呼び出すと月末日が返る  */
        const ret = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate()
        return ret
    }

    render() {
        /*  HTML変数とキーとなる変数と日付変数 */
        let list = [],
            rKey = 7,
            today = this.getLast(new Object),
            r = this.getLast() - today
        list.push(<th>氏名</th>)
        if (r < rKey) {
            for (let i = today, l = today + r + 1; i < l; i++) {
                list.push(<th className='table_th'>{i}日</th>)
            }
        } else {
            for (let i = today, l = today + rKey; i < l; i++) {
                list.push(<th className='table_th'>{i}日</th>)
            }
        }
        list.push(<tr></tr>)
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className='confirm'>
                        <div className="header">
                            <h3 className="date">2017年12月シフト</h3>
                            <h3 className="title">モスバーガーウニクス南古谷店</h3>
                        </div>
                        <table className='main_table'>
                            <div className='table_cell'>{list}</div>
                        </table>
                    </div>
                </div>
                <Footer />
                <script src='/scripts/confirm.js'></script>
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト確認画面' }

module.exports = Comfirm