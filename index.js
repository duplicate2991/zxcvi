const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Rk Host Will Going To Host Here')
})
app.get("/redirect", (req, res) => {
  res.redirect("https://rk-host.uk.to");
});

module.exports = app
