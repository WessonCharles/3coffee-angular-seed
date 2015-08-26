'use strict';

define(['angular'],function(angular){
	return angular.module("ThCofAngSeed.project_ctrl",[])
	.controller('projectctrl',['$rootScope','$scope','$http','$timeout','$location','$window','$filter',
		function($rootScope, $scope, $http,$timeout, $location, $window, $filter){
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

	        /**
	         * open one table content
	         */
	        $("md-table").delegate("table tbody tr", 'click', function() {
	          var t = $(this),
	          l = t[0].getBoundingClientRect().left,
	          to = t[0].getBoundingClientRect().top,
	          w = t[0].offsetWidth,
	          h = t[0].offsetHeight;
	          t.addClass("bl-expand-tr");
	          var se = $('<section style="left:'+l+'px;top:'+to+'px;width:'+w+'px;height:'+h+'px"></section>');
	          t.append(se);
	          setTimeout(function(){
	              var bl = $(".bl-main")[0].getBoundingClientRect().left,
	                  bt = $(".bl-main")[0].getBoundingClientRect().top,
	                  bw = $(".bl-main")[0].offsetWidth,
	                  bh = $(".bl-main")[0].offsetHeight;
	              if( !se.data( 'open' ) ) {
	                // $(".bl-main").addClass( 'bl-expand-item' );//section's parent 
	                se.css({
	                  left:bl+'px',
	                  top:bt+'px',
	                  width:bw+'px',
	                  height:bh+'px'
	                })
	                se.data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
	              }
	          },100)
	        })
		}
	])
})