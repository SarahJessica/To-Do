'use strict';

angular.module('checklist', ['firebase', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/home/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/home/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/home/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html' , controller: 'UsersCtrl'}) // these two are
  .state('login', {url: '/login', templateUrl: '/views/users/users.html' , controller: 'UsersCtrl'}) //using the same file
  .state('tasks', {url: '/tasks', templateUrl: '/views/tasks/tasks.html' , controller: 'TasksCtrl'}); //using the same file
}])
.run(['$rootScope', '$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl){
    $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
    $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);


// 'use strict';
//
// angular.module('angular-prototype', ['ui.router', 'ngMessages', 'satellizer'])
// .config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider){
//   $urlRouterProvider.otherwise('/');
//
//   $stateProvider
//     .state('home', {url:'/', templateUrl:'/views/general/home.html'})
//     .state('faq', {url:'/faq', templateUrl:'/views/general/faq.html'})
//     .state('contact', {url:'/contact', templateUrl:'/views/general/contact.html'})
//
//     .state('vacations', {url:'/vacations', templateUrl:'/views/vacations/vacations.html', abstract:true})
//     .state('vacations.list', {url:'', templateUrl:'/views/vacations/vacations_list.html', controller:'VacationsListCtrl'})
//     .state('vacations.new', {url:'/new', templateUrl:'/views/vacations/vacations_new.html', controller:'VacationsNewCtrl'})
//     .state('vacations.show', {url:'/{vacationId}', templateUrl:'/views/vacations/vacations_show.html', controller:'VacationsShowCtrl'})
//
//     .state('register', {url:'/register', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
//     .state('login', {url:'/login', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
//     .state('profile', {url:'/profile', templateUrl:'/views/users/profile.html', controller:'UsersProfileCtrl'});
//
//   $authProvider.github({clientId:'09953be0d1b0653a75e9'});
//   $authProvider.twitter({url: '/auth/twitter'});
// }])
// .run(['$rootScope', '$window', '$auth', function($rootScope, $window, $auth){
//   if($auth.isAuthenticated()){
//     $rootScope.user = JSON.parse($window.localStorage.user);
//   }
// }]);
