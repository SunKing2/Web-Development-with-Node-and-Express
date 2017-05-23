yarn add express express-handlebars
cat > app.js <<EOL
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>')
})

app.listen(3000)
console.log('app.js listening on port 3000')
EOL
node app.js
#open your browser to localhost:3000
#control-c to stop
