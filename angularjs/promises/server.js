const express = require("express"),
    server = express(),
    lodash = require("lodash"),
    bodyParser = require("body-parser"),
    port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vdn.api+json' }));
server.use(express.static(__dirname + "/project"));

server.get("/api/users", (req, res) => {

    if (req.query.id !== undefined) {
        console.log("Query ID: "+req.query.id);
        res.json({ "name": "Farhan Madani", "state": "Rajasthan" });
    } else {
        let users = [];
        users.push({ "name": "Farhan Madani", "state": "Rajasthan" });
        users.push({ "name": "qweasdqw asdqwe", "state": "uytsdjas" });
        users.push({ "name": "asdqwasd dfgewr", "state": "fdiugykj" });

        let response = {
            "totalCount": users.length,
            "users": users
        };

        res.json(response);
    }
});

server.get("*", (req, res) => {
    res.sendFile(__dirname + "/project/index.html");
});

server.listen(port);
console.log("Server Started on Port : " + port);
