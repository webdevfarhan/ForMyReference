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