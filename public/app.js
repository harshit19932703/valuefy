(function(angular, $, _) {
    angular.module("myapp", ["oc.lazyLoad", "ui.router", "ui.bootstrap"])
        .config(['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider', '$httpProvider',
            function($stateProvider, $locationProvider, $ocLazyLoadProvider, $urlRouterProvider, $httpProvider) {

                $ocLazyLoadProvider.config({
                    modules: [{
                            name: "ToDo",
                            files: [
                                './modules/Todo.js',
                            ]
                        }

                    ]
                });

                $stateProvider
                    .state('TODO', {
                        url: '/',
                        controller: 'ToDoController',
                        templateUrl: '/templates/todo.html',
                        display: "ToDo Dashboard",
                        resolve: {
                            load: ['$ocLazyLoad', '$rootScope', function($ocLazyLoad, $rootScope) {
                                return $ocLazyLoad.load("ToDo");
                            }]
                        }
                    })


            //    $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }
        ])






        .controller("baseController", ['$scope', '$rootScope', '$q', '$http', '$timeout', '$window',
            function($scope, $rootScope, $q, $http, $timeout, $window) {
              

            }
        ]);





    angular.bootstrap(document, ["myapp"]);
})(window.angular, window.$, window._);
