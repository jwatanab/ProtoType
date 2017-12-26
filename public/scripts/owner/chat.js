const that = this

that.onload = () => {
    if (!that.sessionStorage.loginKey) that.location = '/'
    const document = that.document
    const showReq = indexedDB.open('prototype', 2)
    showReq.onsuccess = (e) => {
        const result = e.target.result
        const request = result.transaction(['message'], 'readonly')
            .objectStore('message')
            .getAll()
        request.onsuccess = (e) => {
            const result = e.target.result
            const done = result.map(it => { })
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