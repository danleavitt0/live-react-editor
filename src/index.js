var React = require('react')
var AceEditor = require('react-ace')
require('brace/mode/java')
require('brace/theme/github')

function onChange (newValue) {
  console.log('change', newValue)
}
React.render(
  <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
  />,
  document.getElementById('example')
);
