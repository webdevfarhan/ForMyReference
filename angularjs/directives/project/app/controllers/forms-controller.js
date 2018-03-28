"use strict";
let app = require("../app");
let formsController = function($scope){
    $scope.form = {
        carType: '',
        hasTurbo: true,
        
    };
    
    $scope.formDisabled = {
        name: '',
        disableName: false
    }

    $scope.formSubmit = {
        name: '',
        hasId: true,
        error: undefined
    }

    $scope.checkbox = {};
    $scope.checkbox.cb1 = true;
    $scope.checkbox.cb2 = "Y";
    $scope.checkbox.cb3 = "Going";

    $scope.dropdownArray = [
        {key:1, value:"This is one (Array)"},
        {key:2, value:"This is two (Array)"},
        {key:3, value:"This is three (Array)"}
    ];

    $scope.default = {
        manual: '2',
        fromArray: $scope.dropdownArray[2],
        singleValueFromArray: 2
    };

    $scope.validateForm = function(){
        $scope.formSubmit.error = undefined;
        if(!$scope.formSubmit.hasId){
            $scope.formSubmit.error = 'No Id';
        }
    }

    $scope.printMessage = (message) => {
        alert(message);
    }
};

app.controller("formsController", ['$scope', formsController]);