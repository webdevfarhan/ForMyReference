(function() {
 'use strict';
    let app = require("./app");
    let promiseService = function($q){

        this.asyncCall = function(isSuccess){
            let deferred = $q.defer();
            if(isSuccess || isSuccess === undefined){
                deferred.resolve("It worked fine");
            } else{
                deferred.reject("Something went wrong on your call.");
            }
            return deferred.promise;
        }

    };
    app.service("promiseService", ['$q', promiseService]);
}());