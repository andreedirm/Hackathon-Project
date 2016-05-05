(function () {
    'use strict'

    // define top-level module container
    var app = angular.module('app', ['ui.router'])
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('mashapeHttpInterceptor')
    });

    // additional configuration goes here

    app.config(function($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    
        // Now set up the states
        $stateProvider
        .state('main', {
          url: "/main",
          templateUrl: "app/partials/main.html"
        })
        .state('main.state1', {
          url: "/state1",
          templateUrl: "app/partials/state1.html"
        })
        .state('main.state1.list', {
          url: "/list",
          templateUrl: "app/partials/state1.list.html",
              controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
              }
        })
        .state('main.state2', {
          url: "/state2",
          templateUrl: "app/partials/state2.html"
        })
        .state('main.state2.list', {
          url: "/list",
          templateUrl: "app/partials/state2.list.html",
              controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
              }
        });
    });
    

})();