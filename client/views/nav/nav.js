'use strict';

angular.module('checklist')
.controller('NavCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){


  $scope.afAuth.$onAuth(function(authData) {
    if (authData) {
      $rootScope.activeUser = authData;
    }else{
      $rootScope.activeUser = null;
    }
    $state.go('home');
  });

  $scope.logout = function(){
    console.log('yes I logged out');
    User.logout();
  };
}]);
