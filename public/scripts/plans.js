const that = this

that.onload = () => {
    const document = that.document
    that.sessionStorage.loginKey = ''
    const MainParent = document.getElementsByClassName('shift_image')[0]
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
    const showReq = that.indexedDB.open('prototype', 2)
    showReq.onsuccess = (e) => {
        const db = e.target.result
        const request = db.transaction(['image'], 'readonly')
            .objectStore('image')
            .getAll()
        request.onsuccess = (e) => {
            const result = e.target.result
            result.map(it => {
                const url = URL.createObjectURL(it.img)
                MainParent.innerHTML += '<div class="imgComponent"><p class="inner_text">' + it.date + '</p>' + '<img src ="' + url + '" /></div>'
            })
            runScript()
        }
    }
    /*  Shift Script  */
    function runScript() {
        const img = $('.imgComponent')
        $('#modal_window_image').find('.close').on('click', function () {
            window_close($('#modal_window_image'), $('#modal_bg'))
        })

        img.on('click', function (e) {
            scl($('#modal_window_image'), $('#modal_bg'), e.target)
        })
        function scl(modal, bg, target) {
            /*  set imgeObject  */
            const source = $(target).attr('src')
            $(modal).find('img').attr({ src: source, height: '100%', width: '100%' })
            /*  set position  */
            const top = $(window).height() / 2 - $(modal).height() / 2
            const left = $(window).width() / 2 - $(modal).width() / 2
            $(modal).css({ top: Math.floor(top), left: Math.floor(left) })
            $(modal).fadeIn()
            $(bg).fadeIn()
        }

        function window_close(modal, bg) {
            bg.fadeOut()
            modal.fadeOut()
            $(window).off('wheel')
        }
    }
    /*  Footer Script  */
    $(function () {
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
            /*  location  */
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
                    location = '/owner/index'
                    window.sessionStorage.loginKey = 'on'
                }
            }
        }
    })
}