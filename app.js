(function () {

    /**
    * Main App File
    *
    * This file initiates the main module for the app, configures it with routes
    * to view-controller pairs, sets up app metadata in moduleSettings, and
    * configures the controller for the main HTML shell of the app
    */


    var _moduleSettings = {
        title: 'my app',
        version: '1.0'
    };


    var myApp = angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);
    // square brackets are for listing other Angular module dependencies


    // create routes for this module
    var router = function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                controller: 'personsController',
                templateUrl: 'Client_App/views/persons.html'
            })
            .when('/person/:personId',
            {
                controller: 'personController',
                templateUrl: 'Client_App/views/person.html'
            })
            .when('/help',
            {
                controller: 'HelpController',
                templateUrl: 'Client_App/views/help.html'
            })
            .when('/about',
            {
                controller: 'AboutController',
                templateUrl: 'Client_App/views/about.html'
            })
            .when('/_admin',
            {
                // TODO: see about loading this route conditionally, based on Admin access
                // see: https://groups.google.com/forum/#!topic/angular/mrcy_2BZavQ
                // the current approach, however, does not pose a security threat as the user will not have
                // access to data from the server for the admin view unless the user has admin access, which
                // will be verified by the server before sending the JSON data
                controller: 'AdminController',  // will only exist if retrieved from _Admin URL
                templateUrl: '_Admin/_admin.html'  // will require NWIC admin access
            })
            .otherwise({ redirectTo: '/' });
    };

    router.$inject = ['$routeProvider'];
    // .$inject used to avoid dependency-injection problems caused by script minification


    var MainController = function ($scope, $location, BreadcrumbFactory) {
        //$scope.breadcrumbs = BreadcrumbFactory.getBreadcrumbs($location);

        $scope.$on('$routeChangeSuccess', function () {  // update breadcrumb trail on route change
            $scope.breadcrumbs = BreadcrumbFactory.getBreadcrumbs($location);
        });
    };

    MainController.$inject = ['$scope', '$location', 'BreadcrumbFactory'];


    var _rootScopeRun = function ($rootScope, moduleSettings) {
        $rootScope.moduleSettings = moduleSettings;
    };

    _rootScopeRun.$inject = ['$rootScope', 'moduleSettings'];


    myApp  // add these features to the main module
        .config(router)
        .value('moduleSettings', _moduleSettings)
        .run(_rootScopeRun)
        .controller('MainController', MainController);

}());
