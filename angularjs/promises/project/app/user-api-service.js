(function () {
    'use strict';
    let app = require("./app");

    let userApiService = function ($http) {
        this.getCall = function(params){
            return $http.get("/api/users", params);
        };
        this.getUsers = function(){

            let data = {
                users: undefined,
                error: undefined
            };
            
            let successCallback = function (response) {
                data.users = response.data.users;
            };
    
            let errorCallback = function (error) {
                data.error = error;
            };

            this.getCall().then(successCallback, errorCallback);
            return data;
        };

        this.getById = function(userId){
            
            let data = {
                user: undefined,
                error: undefined
            };

            let successCallback = function (response) {
                console.log(response);
                data.user = response.data;
            };

            let errorCallback = function (error) {
                data = error;
            };

            let obj = {
                params:{
                    id: userId
                }
            };
            this.getCall(obj).then(successCallback, errorCallback);
            return data;
        };
    };

    app.service("userApiService", ['$http', userApiService]);
    
}());