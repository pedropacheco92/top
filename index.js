const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// rotas
app.get('*', (req, res) => res.send('top'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app