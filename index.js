var discord = require("discord.js");
var app = require("express")();
app.listen(3000);
app.get("/", (q, res) => {
	res.send("Hii");
});
