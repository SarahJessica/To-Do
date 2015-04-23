'use strict';

angular.module('checklist')
.factory('User', ['$rootScope', function($rootScope){
  console.log('User factory loaded');

  function register(user){
      return  $rootScope.afAuth.$createUser(user);
  }
  return {register: register};
}]);
