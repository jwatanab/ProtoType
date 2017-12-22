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
        today = getLast(new Object),
        lastDay = getLast(),
        r = getLast() - today

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
            /*  配列をループ(2)  */
            for (let i in result) {
                /*  3つの配列の年月が合わない場合には処理をスキップ  */
                if (result[i].dateStr !== doDate.getDate()) continue
                /*  年月が合致した場合には配列の中のシフトをループ  */
                console.log(result[i])
                for (let l in result[i].ary) {
                    /*  配列の中の配列のシフトが現在日と一致した場合  */
                    if (result[i].ary[l].name == today) {
                        let details = '<td class="table_td">' + result[i].name + '</td>'
                        let number = Number(result[i].ary[l].name - 1)
                        /*  7日分DOMに追加  */
                        for (let k = number, o = number + 7; k < o; k++) {
                            details += '<td class="table_td">' + result[i].ary[k].value + '</td>'
                        }
                        startShift(details)
                    }
                }
            }
        }
    }
}