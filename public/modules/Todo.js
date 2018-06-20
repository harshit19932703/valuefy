  angular.module("ToDo", [])
    .controller("ToDoController", ['$scope', '$rootScope', '$interval', '$window', '$http',
      function($scope, $rootScope, $interval, $window, $http) {
        $scope.todos = [{
            "id": 1,
            "text": "learn Angular",
            "done": true
          },
          {
            "id": 2,
            "text": "build Angular app",
            "done": false
          },
          {
            "id": 3,
            "text": "show off Angular app",
            "done": false
          }
        ];


        //Member Functions
        $scope.addToDo = function() {

          $scope.todos.push({
            text: $scope.todoText,
            done: false
          });
          $scope.todoText = '';
        //  $window.localStorage.setItem('mystorage',JSON.stringify($scope.todos));
        };

        $scope.remaining = function() {
          var count = 0;
          angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };

        $scope.remove = function(x) {
          $scope.todos = _.reject($scope.todos, function(d) {
            return x == d;
          });
          console.log($scope.todos)
        }
        $scope.edit = function(x) {
          $scope.h=x;
        }
        // $scope.update=function(x){
        //  _.each($scope.todos,function(d){
        //    d.text=x.text;
        //  })
        // }



      }
    ])
