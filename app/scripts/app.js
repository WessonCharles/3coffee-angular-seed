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
  ],function(angular){
  window.ThCofAngSeedModule = angular.module('ThCofAngSeed', [
      'ngRoute',
      'ThCofAngSeed.configs',
      'ThCofAngSeed.services.modal',
      'ThCofAngSeed.services',
      'ThCofAngSeed.directives.table',
      'ThCofAngSeed.directives',
      'ThCofAngSeed.filters'
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

        console.log($("a.md-button").offset());

        /**
         * buttondown example
         */
        var originatorEv;
        $scope.ctrl = {};
        $scope.ctrl.openMenu = function($mdOpenMenu, ev) {
          originatorEv = ev;
          $mdOpenMenu(ev);
        };
        $scope.ctrl.notificationsEnabled = true;
        $scope.ctrl.toggleNotifications = function() {
          $scope.ctrl.notificationsEnabled = !$scope.ctrl.notificationsEnabled;
        };
        $scope.ctrl.redial = function() {
          $mdDialog.show(
            $mdDialog.alert()
              .targetEvent(originatorEv)
              .clickOutsideToClose(true)
              .parent('body')
              .title('Suddenly, a redial')
              .content('You just called a friend; who told you the most amazing story. Have a cookie!')
              .ok('That was easy')
          );
          originatorEv = null;
        };
        $scope.ctrl.checkVoicemail = function() {
          // This never happens.
        };



        /**
         * tables
         */
        $scope.toggleSearch = false;   
        $scope.headers = [
          {
            name:'',
            field:'thumb'
          },{
            name: 'Name', 
            field: 'name'
          },{
            name:'Description', 
            field: 'description'
          },{
            name: 'Last Modified', 
            field: 'last_modified'
          }
        ];
        
        $scope.content = [
          {
            thumb:'https://lh3.googleusercontent.com/-5NfcdlvGQhs/AAAAAAAAAAI/AAAAAAAAABY/ibGrApGYTuQ/photo.jpg', 
            name: 'Bruno Mars', 
            description: 'Human',
            last_modified: 'Jun 5, 2014'
          },{
            thumb:'http://www.otakia.com/wp-content/uploads/V_1/article_3573/7405.jpg', 
            name: 'AT-AT', 
            description: 'Robot',
            last_modified: 'Jun 5, 2014'
          },{
            thumb:'https://speakerdata.s3.amazonaws.com/photo/image/774492/Mark-Ronson-r24.jpg', 
            name: 'Mark Ronson', 
            description: 'Human',
            last_modified: 'Jun 5, 2014'
          },{
            thumb:'http://25.media.tumblr.com/61ebf04c3cc7a84944aa0246e902f2a7/tumblr_mm35b87dGz1qmwrnuo1_1280.jpg', 
            name: 'Daft Punk', 
            description: 'Human-Robot',
            last_modified: 'Jun 5, 2014'
          },{
            thumb:'http://thatgrapejuice.net/wp-content/uploads/2014/03/lady-gaga-that-grape-juice-televisionjpg.jpg', 
            name: 'Lady Gaga', 
            description: 'Undefined',
            last_modified: 'Jun 5, 2014'
          }
        ];
        
        $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
        $scope.sortable = ['name', 'description', 'last_modified'];
        $scope.thumbs = 'thumb';
        $scope.count = 3;
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
