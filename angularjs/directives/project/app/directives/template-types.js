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