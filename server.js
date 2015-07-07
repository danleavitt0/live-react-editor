var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.get('*', function (req, res) {
  res.send('./' + req.url)
})

app.listen(process.env.PORT || 3000)
