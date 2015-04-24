'use strict';

angular.module('checklist')
.factory('User', ['$rootScope', '$state', function($rootScope, $state){
  console.log('User factory loaded');


  function register(user){
      return  $rootScope.afAuth.$createUser(user);
  }
  function login(user){
      return  $rootScope.afAuth.$authWithPassword(user);
  }
  function logout(user){
      return  $rootScope.afAuth.$unauth();
  }
      return {register: register, login: login, logout: logout};

}]);
