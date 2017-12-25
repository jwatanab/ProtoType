const that = this

that.onload = () => {
    const request = that.indexedDB.open('prototype', 2)
    request.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore('message', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('shift', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('image', { keyPath: 'idStr', autoIncrement: true })
    }
    /*  Shift Script  */
    $(function () {
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
            $(window).on('wheel', function (e) {
                e.preventDefault()
            })
            $(modal).fadeIn()
            $(bg).fadeIn()
        }

        function window_close(modal, bg) {
            bg.fadeOut()
            modal.fadeOut()
            $(window).off('wheel')
        }
    })
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
                if (validate.name && validate.password) location = '/owner/index'
            }
        }
    })
}