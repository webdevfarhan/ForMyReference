"use strict";

let app = require("../app");

app.directive("controllerTest", () => {
    return {
        restrict: 'E',
        scope: {
            count: '@',
        },
        templateUrl: './app/directives/templates/controller-test.html',
        controller: function ($scope) {
            $scope.listOfNames = [];
            for (let i = 1; i <= $scope.count; i++) {
                $scope.listOfNames.push('Name Created #' + i);
            }
        }
    };
});

module.exports = app;