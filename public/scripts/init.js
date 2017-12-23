const that = this

that.onload = () => {

    /*  Reset  */
    //that.indexedDB.deleteDatabase('prototype')

    const request = that.indexedDB.open('prototype')
    request.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore('message', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('shift', { keyPath: 'idStr', autoIncrement: true })
    }
    const document = that.document
    const Footer = document.getElementById('footer')

    Footer.querySelector('.owner')
        .addEventListener('click', locationOwner, false)
    Footer.querySelector('.guide')
        .addEventListener('click', locationGuide, false)

    function locationOwner(e) {
        console.log(e.target)
    }

    function locationGuide(e) {
        console.log(e.target)
    }
}