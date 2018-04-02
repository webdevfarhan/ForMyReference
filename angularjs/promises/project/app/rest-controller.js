(function () {
    'use strict';
    let app = require("./app");
    let restController = function ($scope, $http, $timeout, userApiService, promiseService) {
        $scope.process = 'processing...';
        $http({
            method: 'GET',
            url: '/api/users'
        }).then(function (response) {
            $timeout(function () {
                $scope.data = response.data;
                $scope.process = 'processed!!!';
            }, 3000);
        });

        $scope.dataFromService = userApiService.getUsers();
        $scope.singleUser = userApiService.getById(1234);
        $scope.asyncCallExecutedSuccess = false;
        promiseService.asyncCall(true).then(
            function (data) { $scope.asyncCallExecutedSuccess = data; },
            function (error) { $scope.asyncCallExecutedSuccess = error;}
        );
        promiseService.asyncCall(false).then(
            function (data) { $scope.asyncCallExecutedError = data; },
            function (error) { $scope.asyncCallExecutedError = error;}
        );

    };
    app.controller("restController", ['$scope', '$http', '$timeout', 'userApiService', 'promiseService', restController]);
    module.exports = app;
}());