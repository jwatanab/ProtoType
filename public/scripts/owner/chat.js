const that = this

that.onload = () => {
    if (!that.sessionStorage.loginKey) that.location = '/'
    const document = that.document

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