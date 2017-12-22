const React = require('react')
const Header = require('../component/Header')
const Footer = require('../component/Footer')

class Prompt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    getLast(e) {
        const dt = new Date()
        /*  引数に有力値をいれると月が返る  */
        if (e) {
            const ret = dt.getMonth() + 1
            return ret
        }
        /*  関数を呼び出すと月末日が返る  */
        const ret = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate()
        return ret
    }

    render() {
        /*  HTML変数とキーとなる変数と月変数 */
        let list = [],
            rKey = 7,
            nKey = 1,
            toDate = this.getLast(1)
        for (let i = 1, l = this.getLast() + 1; i < l; i++) {
            /*  月の日付分タイトルを出力する  */
            list.push(<th className='table_th'>{i}日</th>)
            /*  表を一週間ごとに折り返すようにする  */
            if (i % rKey === 0) {
                /*  th要素で折り返す  */
                list.push(<tr></tr>)
                let n = this.getLast() - i
                /*  最後の週になったとき  */
                if (n < rKey) {
                    i++
                    /*  細かく値を出力する  */
                    for (let g = 0; g < rKey; g++ , nKey++) {
                        list.push(<td><input name={nKey} className='table_td' /></td>)
                    }
                    list.push(<tr></tr>)
                    for (let s = 0; s < n; s++ , i++) {
                        list.push(<th className='table_th'>{i}日</th>)
                    }
                    list.push(<tr></tr>)
                    for (let k = 0; k < n; k++ , nKey++) {
                        list.push(<td><input name={nKey} className='table_td' /></td>)
                    }
                    /*  このifブロックに入った場合ループ終了  */
                    break
                } else {
                    /*  最後の週以外の場合、一週間分の値を順々に出力  */
                    for (let j = 0; j < rKey; j++ , nKey++) {
                        list.push(<td><input name={nKey} className='table_td' /></td>)
                    }
                }
                /*  td要素で折り返す  */
                list.push(<tr></tr>)
            }
        }
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className='prompt'>
                        <div className="main_content">
                            <div className='table_call'>
                                <h3 className='title'>氏名とシフトを入力してください:</h3>
                            </div>
                            <div className='table_call el'>
                                <h3 className='date'>{toDate}月シフト</h3>
                            </div>
                        </div>
                        <table className='main_table'>
                            {list}
                        </table>
                        <div className='chat'>
                            <div className='bar'>
                                <h3 className='people'>氏名:</h3>
                                <textarea className='textInput' rows='5' cols='30' placeholder='備考欄'></textarea>
                                <button className='submitBtn'>送信</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <script src='/scripts/prompt.js'></script>
            </div>
        )
    }
}

Header.defaultProps = { initial: 'シフト入力画面' }

module.exports = Prompt
