"use strict"

function mainCtrl($scope, carFactory){
    $scope.controllerName = 'Main Controller Test';
    $scope.car;
    $scope.message;
    $scope.selectCar = function(){
        if($scope.car){
            $scope.message = carFactory.getMessage($scope.car);
        }
    }
}

function secondCtrl($scope, carFactory, supraService){
    $scope.controllerName = 'Second Controller Test';
    $scope.car;
    $scope.message;
    
    $scope.selectCar = function(){
        if($scope.car){
            $scope.message = supraService.getMessage2($scope.car);
        }
    }
}

app.controller("mainCtrl", ['$scope', 'carFactory', mainCtrl]);
app.controller("secondCtrl", ['$scope', 'carFactory', 'supraService', secondCtrl]);

/*
2nd way : 
app.controller("mainCtrl", [$scope, $http, $etc, function($scope, $http, $etc){

}]);

3rd way :
app.controller("mainCtrl", mainCtrl); then declare mainCtrl function and provide dependencies array inside app.module(appname, [$scope, $http, $etc])

4th way :
app.controller("mainCtrl", mainCtrl); then mainCtrl.$inject = ['$scope', '$http', '$etc']

*/