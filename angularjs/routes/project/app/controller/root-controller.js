"use strict";

let app = require("../app");

let rootController = function($scope) {
    let vm = this;
    $scope.root = "This is Root Variable Value";
}

app.controller("rootController", rootController);

module.exports = app;