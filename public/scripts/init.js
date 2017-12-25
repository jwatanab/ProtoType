const that = this

that.onload = () => {

    /*  Reset  */
    //that.indexedDB.deleteDatabase('prototype')

    const request = that.indexedDB.open('prototype', 2)
    that.sessionStorage.loginKey = ''
    request.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore('message', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('shift', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('image', { keyPath: 'idStr', autoIncrement: true })
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