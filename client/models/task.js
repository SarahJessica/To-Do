'use strict';

angular.module('checklist')
.factory('Task', ['$rootScope','$firebaseArray', function($rootScope, $firebaseArray){
  var fbTasks;
  var afTasks;

  console.info('I am a task model');

  function init(){
    fbTasks = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/tasks');
    afTasks = $firebaseArray(fbTasks);
    return afTasks;
  }

  function save(task){
    return afTasks.$save(task);
  }

  function add(task){
    init();
    return afTasks.$add(task);
  }

  function destroy(task){
    return afTasks.$remove(task);
  }

  // function edit(task){
  //   return afTasks.$save(task);
  // }

  return {add: add, init: init, destroy: destroy, save: save, edit: edit};
}]);
