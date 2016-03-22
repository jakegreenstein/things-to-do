var modules = [
	'HomeModule',
];

var app = angular.module('ThingsToDo', modules, function($interpolateProvider){
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});