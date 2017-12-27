const that = this

that.onload = () => {
    const document = that.document
    that.sessionStorage.loginKey = ''
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
            return (h + ':' + m)
        },
        getDate: () => {
            const dt = new Date()
            const year = dt.getFullYear()
            const month = dt.getMonth() + 1
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
        for (let i = 0; i < target.length; i++) {
            if (!target[i].value) {
                Obj.check = true
                break
            }
            Obj.ary.push({ name: target[i].name, value: target[i].value })
            e.target.parentElement.querySelector('textarea').value = ''
            Obj.check = false
        }

        if (Obj.check) {
            alert('未記入の項目があります、確認を行ってください')
            Obj.ary.length = 0
            return false
        } else {
            alert('シフトの送信に成功しました')
            Obj.check = false
            for (let i = 0; i < target.length; i++) {
                target[i].value = ''
            }
        }
        const req = that.indexedDB.open('prototype')
        req.onsuccess = (e) => {
            const result = e.target.result
            const request = result.transaction(['shift'], 'readwrite')
                .objectStore('shift')
                .add({ name: Obj.name, remarks: Obj.remarks, ary: Obj.ary, dateStr: doDate.getDate() })
            request.onsuccess = () => {
                Obj.ary.length = 0
                Obj.remarks = null
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
            const top = $(window).scrollTop() + (e.height() / 2)
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
                if (validate.name && validate.password) {
                    window.sessionStorage.loginKey = 'on'
                    location = '/owner/index'
                }
            }
        }
    })
}