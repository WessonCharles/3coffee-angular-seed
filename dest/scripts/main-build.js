'use strict';

require.config({
	paths:{
		angular:'libs/angular/angular.min',
		// angular:'http://cdn.bootcss.com/angular.js/1.4.3/angular.min',
		jquery:'http://cdn.bootcss.com/jquery/2.1.4/jquery.min',
		angularRoute:'libs/angular-route/angular-route.min',
		angularAnimate:'libs/angular-animate/angular-animate.min',
		angularAria:'libs/angular-aria/angular-aria.min',
		angularMaterial:'http://cdn.bootcss.com/angular-material/0.10.1/angular-material.min',
		angularResource:'libs/angular-resource/angular-resource.min'
	},
	shim:{
		'angular' : {'exports' : 'angular'},
        'jquery': {'exports': 'jquery'},
        'angularResource':['angular'],
        'angularRoute': ['angular'],
        'angularAnimate':['angular'],
        'angularAria':['angular'],
        'angularMaterial':['angular','angularAria'],
	}
})

require([
	'angular',
	'angularRoute',
	'angularAnimate',
	'angularAria',
	'angularMaterial',
	'scripts/app',
	'scripts/configs/config',
	],function(angular){
		angular.element().ready(function() {
            angular.bootstrap(document, ['ThCofAngSeed']);
        });
	})