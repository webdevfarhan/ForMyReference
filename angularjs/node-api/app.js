const express = require("express"),
    app = express(),
    lodash = require("lodash"),
    bodyParser = require("body-parser"),
    port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vdn.api+json' }));
app.use(express.static(__dirname + "/app"));

app.get("/api/users", (req, res) => {
    let users = [
        { name: "Farhan", age: 24 },
        { name: "satdyua ts", age: 24 }
    ];
    res.json(users);
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/app/index.html");
});

app.listen(port);
console.log("Server Started on Port : " + port);
