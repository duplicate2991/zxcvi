const express = require('express');
const app = express();
const port = 3000;
var router = require("./router.js");
app.use("/", router);
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the index.ejs template
app.get('/ejs', (req, res) => {
    res.render('index', { items });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app
