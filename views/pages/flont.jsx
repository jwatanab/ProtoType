const React = require('react')
const Header = require('../component/Header')

class Flont extends React.Component {
    constructor(props) {
        super(props)
        this.state = { initial: this.props.initial }
    }
    render() {
        return (
            <div>
                <Header />
                <h3>ダミーテキスト<br /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, diam sed ullamcorper consequat, libero urna rhoncus sem, et faucibus orci est at justo. Vestibulum mattis urna eget odio rutrum egestas. Sed rutrum id felis ut consectetur. Nam laoreet nibh placerat scelerisque dapibus. Quisque pretium congue lorem, vitae vestibulum justo dictum quis. Duis scelerisque sodales imperdiet. Vestibulum ac leo vel ipsum rhoncus pellentesque. Cras pharetra id tellus quis maximus. Nam consequat quam feugiat nulla finibus, et pretium est tristique. Praesent mi sapien, euismod rutrum vehicula ac, rhoncus sed arcu. Sed interdum ullamcorper neque, eu lacinia lectus convallis porttitor. Phasellus imperdiet mauris eu mi tincidunt convallis. Curabitur ut varius purus.

Cras ultricies dolor in eros lobortis ornare. Pellentesque vel sem eleifend, placerat turpis eget, luctus sem. Donec in nisl cursus, rhoncus felis eu, viverra nulla. Mauris sagittis felis luctus nisl ullamcorper auctor. Nullam condimentum urna imperdiet lacus semper, quis scelerisque ipsum volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sit amet finibus sem. Aliquam metus lorem, interdum at pellentesque eget, sagittis at risus.

Sed id nulla risus. Integer aliquam, urna eget feugiat ullamcorper, lorem turpis lobortis sapien, nec euismod risus nibh a lorem. Integer eu blandit nisi, nec pharetra lorem. Morbi eget nisi nec magna dignissim consectetur. Pellentesque mattis, sem id fringilla mattis, felis odio lobortis mauris, vel aliquet nisl eros eu nibh. Nunc vel tortor neque. Sed justo elit, accumsan non laoreet sit amet, hendrerit eget diam. Donec id lorem cursus, vulputate nunc non, sollicitudin lectus. Donec feugiat elit vel mi hendrerit, a fringilla felis bibendum. Aliquam erat volutpat.

Nulla rutrum ligula vel odio rhoncus, non commodo mauris pretium. Sed non scelerisque sem. Nunc at porta ex, at facilisis nulla. Proin vel cursus sem. Praesent ut ipsum sed ex imperdiet sodales a in tortor. In id scelerisque leo. Phasellus porta purus sed tellus lacinia semper. Duis suscipit id magna pretium facilisis. Aenean imperdiet libero vel erat tristique, id pretium felis tempor. Mauris tempor ligula ligula, sit amet hendrerit ex sodales vitae. Vestibulum posuere augue quis interdum sagittis. Pellentesque viverra, orci et cursus laoreet, ipsum lectus porta sapien, at pellentesque nibh orci et lacus. Ut convallis viverra velit non volutpat. Etiam eget maximus lectus, non aliquam velit. Morbi auctor mi ac lectus viverra, vitae condimentum nunc accumsan.

Suspendisse ligula turpis, ullamcorper quis aliquet a, congue eget velit. Integer non elementum mi. Duis vel mauris ut urna suscipit facilisis. Nunc eu venenatis elit. Quisque id mollis magna, nec hendrerit justo. Aliquam in sem nec risus ullamcorper tincidunt quis vel orci. Phasellus consequat magna nec tellus commodo, nec egestas ipsum dignissim. Aliquam tempus id dolor ac auctor. Morbi facilisis, metus ac sodales cursus, nibh dui accumsan augue, molestie vulputate velit elit in tellus.</p>
            </div>
        )
    }
}

Header.defaultProps = { initial: 'フロント' }

module.exports = Flont