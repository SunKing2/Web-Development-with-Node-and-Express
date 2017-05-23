const express = require('express')
const app = express()
const ehb = require('express-handlebars')

app.engine('handlebars', ehb({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(3000)
console.log('app.js listening on port 3000')
