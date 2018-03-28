"use strict";

let app = require("../app");

app.directive("controllerScope", () => {
    return {
        restrict: 'AE',
        templateUrl: "./app/directives/templates/scope-test.html"
    };
}).directive("isolatedScope", () => {
    return {
        restrict: 'AE',
        scope: {

        },
        templateUrl: "./app/directives/templates/scope-test.html"
    };
}).directive("attributeScope", () => {
    return {
        restrict: 'AE',
        scope: {
            form: '=',
            form2: '=title'
        },
        templateUrl: "./app/directives/templates/scope-test.html"
    };
}).directive("atAttributeScope", () => {
    return {
        restrict: 'AE',
        scope: {
            form: '@',
            form2: '@title'
        },
        templateUrl: "./app/directives/templates/scope-test.html"
    };
}).directive("sendFunction", () => {
    return {
        restrict: 'AE',
        scope: {
            form: '&',
            form2: '&title'
        },
        templateUrl: "./app/directives/templates/scope-function-test.html"
    };
});

module.exports = app;