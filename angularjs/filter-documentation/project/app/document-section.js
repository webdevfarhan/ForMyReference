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