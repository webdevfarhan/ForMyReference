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