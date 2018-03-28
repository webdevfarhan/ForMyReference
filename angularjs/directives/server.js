const express = require("express"),
    server = express(),
    lodash = require("lodash"),
    bodyParser = require("body-parser"),
    port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vdn.api+json' }));
server.use(express.static(__dirname + "/project"));

server.get("/api/users", (req, res) => {
    let users = [
        { name: "Farhan", age: 24 },
        { name: "satdyua ts", age: 24 }
    ];
    res.json(users);
});

server.get("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(port);
console.log("Server Started on Port : " + port);
