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
        console.log('start')
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
            for (let j in obj) {
                if (!obj[j].img) {
                    details += '<div class="message">' +
                        '<div class="name">' + obj[j].name + '</div>' +
                        '<div class="text"> ' + obj[j].text + '</div>' +
                        '<div class="time">' + obj[j].time + '</div>' +
                        '</div>'

                } else {
                    let url = URL.createObjectURL(obj[j].img);
                    details += '<div class="message">' +
                        '<div class="name">' + obj[j].name + '</div>' +
                        '<div class="text"> ' + obj[j].text + '</div>' +
                        '<div class="img"><img class="mainimg" src="' + url + '"/></div>' +
                        '<div class="time">' + obj[j].time + '</div>' +
                        '</div>'

                }
            }
            $bg.innerHTML = details
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
            return e.preventDefault()
        }
        e.target.parentElement.querySelector('input[type="text"]').value = ''
        const req = that.indexedDB.open('prototype')
        req.onsuccess = (e) => {
            const dt = new Date()
            const h = dt.getHours()
            let m = dt.getMinutes()
            if (m.toString().length !== 2) { m = '0' + dt.getMinutes() }
            const timestamp = h + ':' + m
            const result = e.target.result
            const request = result.transaction(['message'], 'readwrite')
                .objectStore('message')
                .add({ name: chackValue.name, text: chackValue.text, img: chackValue.img, time: timestamp })
            request.onsuccess = () => {
                console.log('success')
                Obj.text = ''
                Obj.img = null
            }
        }
    }
}


//setInterval(() => update(), 1000) 

/*function update() {
    const dt = new Date()
    const h = dt.getHours()
    let m = dt.getMinutes()
    if (m.toString().length !== 2) { m = '0' + dt.getMinutes() }
    this.setState({ date: h + ':' + m })
}*/