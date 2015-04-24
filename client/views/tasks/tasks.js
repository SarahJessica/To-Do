'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.afTasks = Task.init();
  $scope.toggleComplete = function(task){
    task.isComplete = !task.iscomplete;
  };


  console.info('I am a task controller');

  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };
    //console.log(o);
    Task.add(o)
    .then(function(data){
      $scope.task = {};
    });

    // var date = task.dueDate.getTime();
    // task.dueDate = date;
    // Task.add(task)
    // .then(function(data){
    //   console.info('data', data);
    // })

  };

  $scope.updateTask = function(task){
    $scope.task = {};
    task.dueDate = task.dueDate.getTime();
    Task.save(task);
  };

  $scope.toggleComplete = function(task){
    Task.save(task);
  };

  $scope.deleteTask = function(task){
    Task.destroy(task);
  };

  $scope.editTask = function(task){
    task.dueDate = new Date(task.dueDate);
    $scope.task = task;
    // var o = task;
    // o.dueDate =  new Date($scope.task.dueDate);
    // // var d = new Date(0);
    // // d.setUTCSeconds($scope.dueDate);
    // // //moment.utc($scope.dueDate).local();
    // //$scope.dueDate.moment.utc() = d.setUTCSeconds($scope.dueDate);
    //Task.edit(task);
  };



}]);
