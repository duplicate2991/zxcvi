const express = require('express');
const app = express();
const port = 3000;
var router = require("./router.js");
app.use("/", router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app
