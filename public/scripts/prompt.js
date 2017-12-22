const that = this

that.onload = () => {
    const document = that.document
    const MainParent = document.getElementsByClassName('chat')[0]
    const mainTable = document.getElementsByClassName('main_table')[0]
    const target = mainTable.querySelectorAll('.table_td')

    let Obj = { name: '', remarks: '', ary: [], dateStr: null, check: false }

    MainParent.querySelector('.bar')
        .addEventListener('click', formClick, false)
    MainParent.querySelector('.textInput')
        .addEventListener('change', doStringChange, false)
    MainParent.querySelector('.submitBtn')
        .addEventListener('click', doSubmit, false)

    const doDate = {
        getTime: () => {
            const dt = new Date()
            const h = dt.getHours()
            let m = dt.getMinutes()
            if (m.toString().length !== 2) { m = '0' + dt.getMinutes() }
            /*  hour + minutes string  */
            return (h + ':' + m)
        },
        getDate: () => {
            const dt = new Date()
            const year = dt.getFullYear()
            const month = dt.getMonth() + 1
            /*  dateString  */
            return (year.toString() + month.toString())
        }
    }

    function formClick(e) {
        let tg
        if (e.target.className === 'bar') {
            tg = e.target
        }
        if (e.target.parentElement.className === 'bar') {
            tg = e.target.parentElement
        }
        if (tg.hasAttribute('value')) return
        tg.setAttribute('value', '')
        const name = '氏名:' + window.prompt('名前を入力してください')
        tg.querySelector('h3').innerHTML = name
        Obj.name = name.replace('氏名:', '')
    }

    function doStringChange(e) {
        if (e.target.value) {
            Obj.remarks = e.target.value
        }
    }
    function doSubmit(e) {
        if (!Obj.name) return false
        e.target.parentElement.querySelector('textarea').value = ''
        for (let i = 0; i < target.length; i++) {
            if (!target[i].value) {
                Obj.check = true
            } else {
                Obj.ary.push({ name: target[i].name, value: target[i].value })
                target[i].value = ''
            }
        }
        if (Obj.check) {
            alert('未記入の項目があります、確認を行ってください')
            return false
        } else {
            alert('シフトの送信に成功しました')
            Obj.check = false
        }
        /*  空チェック  */
        const req = that.indexedDB.open('prototype')
        req.onsuccess = (e) => {
            const result = e.target.result
            const request = result.transaction(['shift'], 'readwrite')
                .objectStore('shift')
                .add({ name: Obj.name, remarks: Obj.remarks, ary: Obj.ary, dateStr: doDate.getDate() })
            request.onsuccess = () => {
                console.log('success')
                Obj.ary.length = 0
                Obj.remarks = null
            }
        }
    }
}