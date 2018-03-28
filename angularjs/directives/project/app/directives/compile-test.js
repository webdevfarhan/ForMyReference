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