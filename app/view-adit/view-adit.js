'use strict';

angular.module('myApp.viewEdit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2.viewEdit', {
    templateUrl: 'view2/view-adit.html',
    controller: 'ViewEditCtrl'
  });
}])

.controller('ViewEditCtrl', [function() {

}]);