const express = require('express');
const app = express();
const port = 3000;

// Sample data (items)
const items = ['Item 1', 'Item 2', 'Item 3'];

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index', { items });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app
