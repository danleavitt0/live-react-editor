import React from 'react'
import AceEditor from 'react-ace'
import $ from 'jquery'
var Babel = require('babel')
require('brace/mode/jsx')
require('brace/theme/monokai')

class Home extends React.Component {
  render () {
    return(
      <div>
        <button onClick={this._save.bind(this)}> save </button>
        <AceEditor
          mode="jsx"
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          ref="editor"
        />
      </div>
    )
  }
  _save () {
    var value = this.refs.editor.editor.getValue()
    var transformed = Babel.transform(value).code
  }
}
console.log('hello')
$(document).ready(function(){
  React.render(<Home />, document.getElementById('container'))
})