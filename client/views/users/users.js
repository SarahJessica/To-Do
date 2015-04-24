'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope){
  console.info('state is', $state.current.name);
  $scope.name = $state.current.name;



  $scope.submit = function(user){
    if ($scope.name === 'register'){
      User.register(user)
      .then(function(data){
        console.info(data);
        $state.go('login');
      })
      .catch(function(err){
        console.error(err);
      });

    } else{
      User.login(user)
      //.then(function(data){
        //$rootScope.activeUser = data;
        //console.info(data);
        //$state.go('home'); // can delete this bit and just have the error
      //})
      .catch(function(err){
        console.error(err);
      });

    }

    //console.info('user', user);
  };
}]);
