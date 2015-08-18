// (function(){
	
// }());
'use strict';

/**
 * Main module of the application.
 */
define(["angular","angularResource","angularRoute","angularAnimate","angularMaterial"],function(angular){
  window.ThCofAngSeedModule = angular.module('ThCofAngSeed', [
      'ngResource',
      'ngRoute',
      'ngAnimate',
      'ngAria',
      'ngMaterial',
      'ThCofAngSeed.configs'
    	// 'ThCofAngSeed.directives',
    	// 'ThCofAngSeed.services',
    	// 'ThCofAngSeed.filters'
    ]).controller("baseCtrl",["$scope", "$http","$rootScope", "$location","$timeout", "$filter","$window",
      function($scope,$http,$rootScope,$location,$timeout,$filter,$window){
        $scope.go = 1;
        var time = setInterval(function(){
          console.log(222)
          $scope.go+=1;
          $scope.$apply();
          if($scope.go==10){
            clearInterval(time);
          }
        },2000)
  }])
  return window.ThCofAngSeedModule;
    // .config(function ($routeProvider) {
    //   $routeProvider
    //     .when('/', {
    //       templateUrl: 'views/main.html',
    //       controller: 'MainCtrl',
    //       controllerAs: 'main'
    //     })
    //     .otherwise({
    //       redirectTo: '/'
    //     });
    // });
});  
