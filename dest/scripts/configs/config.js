// (function(){
	'user strict';
	/*formDataObject*/
	define(["angular"],function(angular){
		window.ThCofAngSeedConfig = angular.module('ThCofAngSeed.configs', ['ngMaterial']);
		window.ThCofAngSeedConfig.config(['$mdThemingProvider',function($mdThemingProvider){
			$mdThemingProvider.theme('default')
		    .primaryPalette('cyan')
		    .accentPalette('red');
		}])
		return window.ThCofAngSeedConfig;
	})
// }());