'use strict';

angular.module('myApp.view1.editUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1.editUser', {
    templateUrl: 'edit-user/edit.html',
    controller: 'EditUserCtrl'
  });
}])

.controller('EditUserCtrl', ['$scope','$http','$location','UserService',function($scope,$http,$location,UserService) {

  // $scope.user=UserService.one($routeParams.name);
  // $scope.action= $scope.user? '更新用户':'新增用户';
  $scope.onSubmit=function(){
      // console.log($scope.user);
      $http.post('http://localhost/boot/edit-user.php',$scope.user)
          .then(function(res){
              // console.log(res);
              var result=res.data;
              if(result.success){

                  UserService.setUsers(result.data);
               console.log(UserService.getUsers());
                // console.log($scope.users);
                  $location.path('/view1');

              }else{
                  alert('保存失败，请重试')
              }
          })
  }
    
}]);
