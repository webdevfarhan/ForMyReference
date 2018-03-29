"use strict";

let app = require("../app");

let testController = function($route, $scope) {
    let vm = this;
    $scope.test = "This is Test Variable Value";
}

app.controller("testController", testController);

module.exports = app;