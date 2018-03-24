(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
var app = angular.module("diApp", []);

module.exports = app;
},{}],2:[function(require,module,exports){
'use strict'

let app = require('./app');
let services = require("./services");

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
},{"./app":1,"./services":5}],3:[function(require,module,exports){
let app = require('./app');

var carFactory = function(){
    var service = {};
    service.getMessage = function(car){
        var message = 'No car selected';
        switch(car){
            case "G37": message="This car is infinity"; break;
            case "Jetta": message="This car is VW"; break;
            default: message="Car Not found on Factory"; break;
        };
        return message;
    }
    return service;
};

app.factory("carFactory", carFactory);

},{"./app":1}],4:[function(require,module,exports){
'use strict';

//require js files here
let app = require('./app'),
    controllers = require('./controllers'),
    factory = require('./factory'),
    services = require('./services');
},{"./app":1,"./controllers":2,"./factory":3,"./services":5}],5:[function(require,module,exports){
"use strict";
let app = require('./app');

var carService = function(){
    this.getMessage = function(){
        return "test message";
    }
}

carService.prototype.getMessage2 = function(){
    return "new message";
}

var supraService = function(){
    this.hasTurbp = "Yes it has turbo";
}

supraService.prototype = Object.create(carService.prototype);

app.service("carService", carService);
app.service("supraService", ['carService', supraService]);
},{"./app":1}]},{},[4]);
