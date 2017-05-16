const express = require ('express')
const app = express()
const ehb = require('express-handlebars')

app.engine('handlebars', ehb({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: getFortune() })
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

function getFortune() {
  const fortunes = [
    'Conquer your fears or they will conquer you.',
    'Rivers need springs.',
    'Do not fear what you don\'t know.',
    'You will have a pleasant surprise.',
    'Whenever possible, keep it simple.'
  ]
  return fortunes[Math.floor(Math.random() * fortunes.length)]
}
