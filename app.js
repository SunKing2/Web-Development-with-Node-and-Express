const express = require ('express')
const app = express()
const ehb = require('express-handlebars')
const fortune = require ('./lib/fortune')

app.engine('handlebars', ehb({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})

app.use((req, res) => {
  res.render('404')
})

app.use((err, req, res, next) => {
  console.error('oopsie:\n' + err.stack)
  res.status(500)
  res.render('500')
})

app.listen(3000)

console.log('app.js listening on port 3000')
