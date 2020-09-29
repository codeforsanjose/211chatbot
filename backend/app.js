const express = require('express')
const app = express()
const port = 8008

app.get('/', (req, res) => {
  res.send('Welcome to the 211 backend👋')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})