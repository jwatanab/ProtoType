const that = this

that.onload = () => {
    const document = that.document
    const MainParent = document.getElementsByClassName('chat')[0]
    const $bg = $('.message_zoom')[0]
    let Obj = { name: '', text: '', img: null }

    /*  Reset  */
    //that.indexedDB.deleteDatabase('prototype')

    const showReq = that.indexedDB.open('prototype')
    showReq.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore('message', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('shift', { keyPath: 'idStr', autoIncrement: true })
    }
    showReq.onsuccess = (e) => {
        const db = e.target.result
        const request = db.transaction('message')
            .objectStore('message')
            .getAll()
        request.onsuccess = (e) => {
            const obj = e.target.result
            let details = new String()
            const dateStr = doDate.getDate()
            for (let j in obj) {
                if (dateStr !== obj[j].date) continue
                if (!obj[j].img) {
                    details += '<div class="message">' +
                        '<div class="name">' + obj[j].name + '</div>' +
                        '<div class="text"> ' + obj[j].text + '</div>' +
                        '<div class="textTime">' + obj[j].time + '</div>' +
                        '</div>'

                } else {
                    let url = URL.createObjectURL(obj[j].img);
                    details += '<div class="message">' +
                        '<div class="name">' + obj[j].name + '</div>' +
                        '<div class="text"> ' + obj[j].text + '</div>' +
                        '<div class="imgTime">' + obj[j].time + '</div>' +
                        '<div class="img"><img class="mainImg" src="' + url + '"/></div>' +
                        '</div>'
                }
                setDOM(details)
            }
        }
    }


    MainParent.querySelector('.bar')
        .addEventListener('click', formClick, false)
    MainParent.querySelector('.i')
        .addEventListener('click', doPass, false)
    MainParent.querySelector('.file')
        .addEventListener('change', doFileChange, false)
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
            return (h + ':' + m)
        },
        getDate: () => {
            const dt = new Date()
            const year = dt.getFullYear()
            const month = dt.getMonth() + 1
            const date = dt.getDate()
            /*  dateString  */
            return (year.toString() + month.toString() + date.toString())
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
        if (e.target.parentElement.parentElement.className === 'bar') {
            tg = e.target.parentElement.parentElement
        }
        if (tg.hasAttribute('value')) return
        tg.setAttribute('value', '')
        const name = '氏名:' + window.prompt('名前を入力してください')
        tg.querySelector('h3').innerHTML = name
        valueInput(name)
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
            if (Obj.img === null && Obj.text === '') return
            return Obj
        }
        else {
            Obj.text = e
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
            valueInput(blob)
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
        e.target.parentElement.querySelector('input[type="text"]').value = ''
        const req = that.indexedDB.open('prototype')
        req.onsuccess = (e) => {
            /*  timeStamp  */
            const timestamp = doDate.getTime()
            /*  CheckToday  */
            const dateStr = doDate.getTime()
            const result = e.target.result
            const request = result.transaction(['message'], 'readwrite')
                .objectStore('message')
                .add({ name: chackValue.name, text: chackValue.text, img: chackValue.img, time: timestamp, date: dateStr })
            request.onsuccess = () => {
                console.log('success')
                Obj.text = ''
                Obj.img = null
            }
        }
    }
    function doScale(e) {
        if (!e.target.style.maxHeight || e.target.style.maxHeight === '250px') {
            e.target.style.maxHeight = '100%'
            e.target.style.maxWidth = '100%'
        } else {
            e.target.style.maxHeight = '250px'
            e.target.style.maxWidth = '250px'
        }
    }
    function setDOM(str) {
        $bg.innerHTML = str
        const EventDoc = $bg.querySelectorAll('.mainImg')
        for (let i = 0; i < EventDoc.length; i++) {
            EventDoc[i].addEventListener('click', doScale, false)
        }
    }
}