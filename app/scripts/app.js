'use strict';

/**
 * Main module of the application.
 */
define([
  "angular",
  "configs/config",
  "services/more/modal",
  "services/service",
  "directives/more/onRendered",
  "directives/directive",
  "filters",
  "../module/app_project/controller",
  ],function(angular){
  window.ThCofAngSeedModule = angular.module('ThCofAngSeed', [
      'ngRoute',
      'ThCofAngSeed.configs',
      'ThCofAngSeed.services.modal',
      'ThCofAngSeed.services',
      'ThCofAngSeed.directives.table',
      'ThCofAngSeed.directives',
      'ThCofAngSeed.filters',
      'ThCofAngSeed.project_ctrl',
  ]).controller("baseCtrl",["$scope", "$http","$rootScope", "$location","$timeout", "$filter","$window",'$route',
      
      function($scope,$http,$rootScope,$location,$timeout,$filter,$window,$route){
        $scope.go = 1;
        var time = setInterval(function(){
          console.log(222)
          $scope.go+=1;
          $scope.$apply();
          if($scope.go==10){
            clearInterval(time);
          }
        },2000)


        $scope.toggleside = function(){
          $("body>.main").toggleClass("minside");
        }
        $scope.breads = window.location.pathname.split("/");
        console.log($scope.breads)
        $scope.current_app = function(t){
          if(('/'+t)==window.location.pathname){
            return 'active';
          }
          return '';
        }
        $rootScope.$on('$locationChangeStart',function(){//每次切换导航时，执行以下选中操作
                        
        })
        $rootScope.$on('locationChangeSuccess', function(){//刷新当前url地址,重新加载本页内容需要重载路由
            $route.reload();
        });

        $scope.$on('$viewContentLoaded',function(){

        })
        
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
