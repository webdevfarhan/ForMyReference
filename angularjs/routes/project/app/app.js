let app = angular.module("app", ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider.when("/", {
        templateUrl: './app/templates/root.html',
        controller: 'rootController',
        controllerAs: 'vm'
    }).when("/test", {
        templateUrl: './app/templates/test.html',
        controller: 'testController',
        controllerAs: 'vm'
    }).otherwise({
        redirectTo: "/"
    });
});

module.exports = app;




