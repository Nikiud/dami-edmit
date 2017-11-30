'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view3.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$location','UserService',function($scope,$http,$location,UserService) {
  // $http.jsonp('http://localhost/boot/get-users.php?jsonp_callback=JSON_CALLBACK')
  //     .then(function (res) {
  //         console.log(res);
  //         $scope.users=res.data;
  //     })
  //   $http.get('http://localhost/boot/admin/get-cors.php')
  //       .then(function (res) {
  //           console.log(res);
  //           $scope.users=res.data;
  //       });
    $scope.users = UserService.getUsers();
    if(!$scope.users){
        UserService.all().then(function(){
            $scope.users=UserService.getUsers();
        });
    }
    $scope.addUser=function(){
        $location.path('/view1.editUser');
    }

}]);

