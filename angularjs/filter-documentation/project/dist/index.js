(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
let app = angular.module("app", []);

module.exports = app;





},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    let app = require("./app");

    app.directive("documentSection", function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            templateUrl: './app/templates/document-section.html'
        };
    });

    module.exports = app;
}());
},{"./app":1}],3:[function(require,module,exports){
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
},{"./app":1}],4:[function(require,module,exports){
(function () {
    'use strict';
    let app = require("./app");
    require("./document-section");
    require("./filters-controller");
    require("./internal-id-filter");
}());

},{"./app":1,"./document-section":2,"./filters-controller":3,"./internal-id-filter":5}],5:[function(require,module,exports){
(function() {
 'use strict';
    let app = require("./app");
    app.filter("internalId", () => {
        return (input) => {
            let output = 'BGP000'+input+(input*3/2);
            return output;  
        };
    });
    module.exports = app;
}());
},{"./app":1}]},{},[4]);
