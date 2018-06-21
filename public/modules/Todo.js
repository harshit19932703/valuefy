  angular.module("ToDo", [])
    .controller("ToDoController", ['$scope', '$rootScope', '$interval', '$window', '$http','$filter',
      function($scope, $rootScope, $interval, $window, $http,$filter) {
        if($window.localStorage.getItem('mystorage')){
          console.log("THERE",JSON.parse($window.localStorage.getItem('mystorage')))
          $scope.todos=JSON.parse($window.localStorage.getItem('mystorage'))

        }
        else{
          $scope.todos=[];
          console.log("NO")
        }


        //Member Functions
        $scope.addToDo = function() {

          $scope.todos.push({
            text: $scope.todoText,
            done: false
          });
          $scope.todoText = '';
          $window.localStorage.setItem('mystorage',JSON.stringify($scope.todos));
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
          console.log($scope.todos);
          $window.localStorage.setItem('mystorage',JSON.stringify($scope.todos));
        }
        $scope.edit = function(x) {
          $scope.h=x;
        }
        $scope.comp=function(){
        //  alert("click")
          $window.localStorage.setItem('mystorage',JSON.stringify($scope.todos));
        }
        $scope.setupdate=function(){
            $window.localStorage.setItem('mystorage',JSON.stringify($scope.todos));
        }
        $scope.sortcompleted=function(){
       $scope.todos = $filter('orderBy')($scope.todos, 'done');
        }
        // $scope.update=function(x){
        //  _.each($scope.todos,function(d){
        //    d.text=x.text;
        //  })
        // }



      }
    ])
