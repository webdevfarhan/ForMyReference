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