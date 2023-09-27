const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server listening at http://${host}:${port}`);
});
app.get("/", (q, res) => {
    res.send("hii");
});
