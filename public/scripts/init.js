const that = this

that.onload = () => {

    /*  Reset  */
    //that.indexedDB.deleteDatabase('prototype')

    const reqeust = that.indexedDB.open('prototype')
    request.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore('message', { keyPath: 'idStr', autoIncrement: true })
        db.createObjectStore('shift', { keyPath: 'idStr', autoIncrement: true })
    }
}