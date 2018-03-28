(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

let app = angular.module("myApp", []);

module.exports = app;
},{}],2:[function(require,module,exports){
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
},{"../app":1}],3:[function(require,module,exports){
"use strict";

let app = require("../app");

let createDirective = (level)=>{
    return ()=>{
        return{
            restrict: 'E',
            controller: ['$scope', ($scope)=>{
                console.log("test "+level+" controller");
            }],
            compile: () => {
                console.log("Compile test: -> "+level);
                return{
                    pre: (scope, element, attrs)=>{
                        console.log("pre : Compile Test -> "+level);
                    },
                    post: (scope, element, attrs)=>{
                        console.log("post : Compile Test -> "+level);
                    }
                };
            }
        };
    };
};

app.directive("compileTestOne", createDirective(" ONE "))
.directive("compileTestTwo", createDirective(" TWO "));

module.exports = app;
},{"../app":1}],4:[function(require,module,exports){
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
},{"../app":1}],5:[function(require,module,exports){
"use strict"

let app = require("../app");

app.directive("elementTest", () => {
    return {
        restrict: 'E',
        template: '<div>This messsage came from element directive</div>'
    };
}).directive("attributeTest", () => {
    return {
        restrict: 'A',
        template: '<div>This messsage came from attribute directive</div>'
    };
}).directive("classTest", () => {
    return {
        restrict: 'C',
        template: '<div>This messsage came from class directive</div>'
    };
}).directive("commentTest", () => {
    return{
        restrict: 'M',
        replace: true,
        template: '<div>This messsage came from comment directive</div>'
    };
});

module.exports = app;
},{"../app":1}],6:[function(require,module,exports){
"use strict";

let app = require("../app");

app.directive("documentSection", function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        templateUrl: './app/directives/templates/document-section.html'
    };
});

module.exports = app;
},{"../app":1}],7:[function(require,module,exports){
"use strict";

let app = require("../app");

app.directive("linkTest", ()=> {
    return{
        restrict: 'E',
        templateUrl: './app/directives/templates/link-test.html',
        controller: ['$scope', ($scope)=>{
            $scope.calls = [];
            $scope.calls.push("Call from the controller");
        }],
        link: (scope, element, attrs)=>{
            scope.calls.push("Call from the link");
            let userData = element.find('user-data');
            userData.replaceWith('<div>User-count has value of : ' + attrs.userCount + '</div>');
            scope.userCount = attrs.userCount;
        }
    };
});

module.exports = app;
},{"../app":1}],8:[function(require,module,exports){
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
},{"../app":1}],9:[function(require,module,exports){
"use strict";

let app = require("../app");

app.directive("templateTest", ()=>{
    return{
        restrict: 'EA',
        template: '<div>This message comes from template</div>'

    };
}).directive("templateUrlTest", ()=>{
    return{
        restrict: 'EA',
        templateUrl: './app/directives/templates/template-url-test.html'
    };
});

module.exports = app;
},{"../app":1}],10:[function(require,module,exports){
"use strict";

let app = require("../app");

app.directive("noTransclude", ()=>{
    return {
        restrict: 'E',
        scope: {

        },
        template: '<div> This is the text generated by a directive</div>'
    };
}).directive("usingTransclude", ()=>{
    return {
        restrict: 'E',
        transclude: true,
        scope: {

        },
        template: '<div> This is the text generated by a directive <br><span ng-transclude></span></div>'
    };
});
},{"../app":1}],11:[function(require,module,exports){
"use strict";

let app = require("./app");
//constrollers
require("./controllers/forms-controller");
//directives
require("./directives/document-section");
require("./directives/directive-types");
require("./directives/template-types");
require("./directives/scope-test");
require("./directives/transclude-test");
require("./directives/controller-test");
require("./directives/link-test");
require("./directives/compile-test");
},{"./app":1,"./controllers/forms-controller":2,"./directives/compile-test":3,"./directives/controller-test":4,"./directives/directive-types":5,"./directives/document-section":6,"./directives/link-test":7,"./directives/scope-test":8,"./directives/template-types":9,"./directives/transclude-test":10}]},{},[11]);
