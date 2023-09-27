const express = require('express');
const app = express();
const port = 3000;
app.listen(port);
app.get("/", (q, res) => {
    res.send("hii");
});
