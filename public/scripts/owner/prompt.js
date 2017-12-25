const that = this

that.onload = () => {
    if (!that.sessionStorage.loginKey) that.location = '/'
    const document = that.document
    const MainParent = document.getElementsByClassName('chat')[0]
    const bg = document.getElementsByClassName('message_zoom')[0]
    let Obj = { date: '', check: '', img: null }


    /*  チャット機能付加  */
    MainParent.querySelector('h3').innerHTML = '氏名:管理者'
    MainParent.querySelector('.i')
        .addEventListener('click', doPass, false)
    MainParent.querySelector('.file')
        .addEventListener('change', doFileChange, false)
    MainParent.querySelector('.textInput')
        .addEventListener('change', doStringChange, false)
    MainParent.querySelector('.submitBtn')
        .addEventListener('click', doSubmit, false)

    /*  機能関数  */
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
            const date = dt.getDate()
            return (year.toString() + month.toString() + date.toString())
        },
        /*  表示用  */
        getMonth: () => {
            const dt = new Date()
            const month = dt.getMonth() + 1
            const day = dt.getDate()
            return (month.toString() + '/' + day.toString())
        },
        /*  年度月日確認  */
        getFulldate: () => {
            const dt = new Date()
            const year = dt.getFullYear()
            const month = dt.getMonth() + 1
            return (year.toString() + month.toString())
        }
    }
    function preview(url) {
        const pre = document.getElementsByClassName('preview_src')[0]
        pre.src = url
        pre.style.display = 'block'
    }
    function valueInput(e) {
        if (typeof e === 'object') {
            Obj.img = e
            return
        } else if (e.indexOf('氏名:') === 0) {
            Obj.name = e.replace('氏名:', '')
            return
        }
        else if (e === "完了しました^-^") {
            if (Obj.img === null || Obj.date === '') {
                window.alert('シフト日付、シフト画像を両方入力してください')
                return
            }
            window.alert('画像、日付の入力に成功しました')
            return Obj
        }
        else {
            Obj.date = e
            Obj.check = doDate.getFulldate()
            return
        }
    }
    function doPass(e) {
        const img = e.target.parentElement.parentElement.querySelector('input')
        img.click()
    }
    function doFileChange(e) {
        const file = e.target.files[0]
        if (file === undefined) {
            console.log('再度クリックしてください')
            return
        }
        const fr = new FileReader();
        fr.onload = () => {
            const u8 = new Uint8Array(fr.result)
            const blob = new Blob([u8], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob)
            valueInput(blob)
            preview(url)
        }
        fr.readAsArrayBuffer(file)
    }

    function doStringChange(e) {
        if (e.target.value) {
            valueInput(e.target.value)
        }
    }
    function doSubmit(e) {
        const chackValue = valueInput("完了しました^-^")
        if (!chackValue) {
            return false
        }
        e.target.parentElement.querySelector('textarea').value = ''
        const insertReq = indexedDB.open('prototype', 2)
        insertReq.onsuccess = (e) => {
            const result = e.target.result
            const request = result.transaction(['image'], 'readwrite')
                .objectStore('image')
                .add({ img: Obj.img, date: Obj.date, check: Obj.check })
            request.onsuccess = () => {
                console.log('success')
                const inner = document.getElementsByClassName('inner')[0]
                inner.innerHTML = '送信された画像,日付 ' + Obj.date
                Obj.check = ''
                Obj.date = ''
                Obj.img = null
            }
        }
    }
    $(function () {
        /*  Footer Script  */
        const $Footer = $('#footer')
        $Footer.find('.owner').on('click', locationOwner)
        $Footer.find('.guide').on('click', locationGuide)
        function locationOwner(e) {
            window.sessionStorage.loginKey = undefined
            window.location = '/'
        }
        function locationGuide(e) {
            /*  推移  */
            return
        }
    })
}