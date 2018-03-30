(function () {
    'use strict';
    let app = require("./app");
    let filtersController = function ($scope, $filter) {
        $scope.name = "FarHan MaDani";
        $scope.filteredNameUpper = $filter('uppercase')($scope.name);
        $scope.filteredNamelower = $filter('lowercase')($scope.name);
        $scope.amount = 1234;
        $scope.data = [];
        $scope.data.push({id: 1, name: "Farhan", state: "Rajasthan"});
        $scope.data.push({id: 2, name: "Test", state: "uiajs"});
        $scope.data.push({id: 3, name: "bbbbbb", state: "lkjyioh"});
        $scope.data.push({id: 4, name: "bbbbbb", state: "aaaaa"});
    };
    app.controller("filtersController", ['$scope', '$filter', filtersController]);
    module.exports = app;
}());