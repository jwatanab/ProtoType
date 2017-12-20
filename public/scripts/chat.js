const that = this

that.onload = () => {
    const document = that.document
    const MainParent = document.getElementsByClassName('chat')[0]
    let Obj = { name: '', text: '', img: '' }

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
        if (e.indexOf('blob:') === 0) {
            Obj.img = e
            return
        } else if (e.indexOf('氏名:') === 0) {
            Obj.name = e.replace('氏名:', '')
            return
        }
        else if (e === "完了しました^-^") {
            if (Obj.img === '' && Obj.text === '') return
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
        const fr = new FileReader()
        fr.onload = () => {
            const u8 = new Uint8Array(fr.result)
            const blob = new Blob([u8], { type: "image/jpeg" })
            const url = URL.createObjectURL(blob)
            valueInput(url)
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
        e.target.parentElement.querySelector('.noneName').value = chackValue.name
        e.target.parentElement.querySelector('.noneImg').value = chackValue.img
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