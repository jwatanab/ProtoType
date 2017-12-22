const React = require('react')

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { initial: this.props.initial }
    }
    render() {
        /*  思い浮かばなーい  */
        return (
            <div className='footer'></div>
        )
    }
}

module.exports = Footer