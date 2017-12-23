const that = this

that.onload = () => {
    const document = that.document
    const MainParent = document.getElementsByClassName('main_table')[0]

    /*  Reset  */
    //that.indexedDB.deleteDatabase('prototype')

    const doDate = {
        getTime: () => {
            const dt = new Date()
            const h = dt.getHours()
            let m = dt.getMinutes()
            if (m.toString().length !== 2) { m = '0' + dt.getMinutes() }
            return (h + ':' + m)
        },
        getDate: () => {
            const dt = new Date()
            const year = dt.getFullYear()
            const month = dt.getMonth() + 1
            return (year.toString() + month.toString())
        }
    }
    const getLast = (e) => {
        const dt = new Date()
        if (e) {
            if (typeof e === 'object') {
                const ret = dt.getDate()
                return ret
            } else {
                const ret = dt.getMonth() + 1
                return ret
            }
        }
        const ret = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate()
        return ret
    }
    let rKey = 7,
        r = getLast() - getLast(new Object)
    function startShift(e) {
        MainParent.innerHTML += e;
    }
    const showReq = that.indexedDB.open('prototype')
    showReq.onsuccess = (e) => {
        const db = e.target.result
        const request = db.transaction(['shift'], 'readonly')
            .objectStore('shift')
            .getAll()
        request.onsuccess = (e) => {
            const result = e.target.result
            /*  配列をループ  */
            for (let i in result) {
                /*  配列の年月が合わない場合には処理をスキップ  */
                if (result[i].dateStr !== doDate.getDate()) continue
                /*  年月が合致した場合には配列の中のシフトをループ  */
                for (let l in result[i].ary) {
                    /*  配列内配列のシフトと現在日が一致した場合  */
                    if (result[i].ary[l].name == getLast(new Object)) {
                        let details = '<td class="table_td">' + result[i].name + '</td>'
                        let number = Number(result[i].ary[l].name - 1)
                        if (r < rKey) {
                            /*  月の残りが1週間切っている場合には調整  */
                            for (let k = number, o = number + r + 1; k < o; k++) {
                                details += '<td class="table_td">' + result[i].ary[k].value + '</td>'
                            }
                        } else {
                            /*  7日分DOMに追加  */
                            for (let k = number, o = number + 7; k < o; k++) {
                                details += '<td class="table_td">' + result[i].ary[k].value + '</td>'
                            }
                        }
                        startShift(details)
                    }
                }
            }
        }
    }
    $(function () {
        /*  Footer Script  */
        const $Footer = $('#footer')
        const $modal_bg = $('#modal_bg')
        const $modal_window = $('#modal_window')
        let validate = { name: false, password: false }

        $Footer.find('.owner').on('click', locationOwner)
        $Footer.find('.guide').on('click', locationGuide)
        /*  Login Script  */
        $modal_window.find('.close').on('click', window_close)
        $modal_window.find('input').on('change', valueChange)

        function window_close() {
            $modal_bg.fadeOut()
            $modal_window.fadeOut()
            $(window).off('wheel')
        }

        function locationOwner(e) {
            setScreen($modal_window)
            $modal_bg.fadeIn()
            $modal_window.fadeIn()
        }

        function locationGuide(e) {
            /*  推移  */
            window.location = '/'
        }

        function setScreen(e) {
            const top = $(window).scrollTop() + (e.height() / 4)
            const left = ($(window).width() / 2) - (e.width() / 2)
            e.css({ top: top, left: left })
            $(window).on('wheel', function (e) {
                e.preventDefault()
            })
        }
        function valueChange(e) {
            if (e.target.value) {
                if (e.target.className === 'input_name') {
                    if (e.target.value === 'root') validate.name = true
                }
                if (e.target.className === 'input_password') {
                    if (e.target.value === 'pass') validate.password = true
                }
                if (validate.name && validate.password) location = '/'
            }
        }
    })
}