var homeCtr = angular.module('HomeModule', []);

homeCtr.controller('HomeController', ['$scope', '$http', function($scope, $http){

	var latlng = null;
	$scope.response = null;
	$scope.searchTerm = null;
	$scope.searchResponse = null;

	$scope.init = function(){
		console.log('Home Controller INIT');
		getLocation();
	}

	$scope.search = function(){
		console.log($scope.searchTerm);
		$http({
		  	method: 'GET',
		  	url: 'https://api.foursquare.com/v2/venues/explore'+
		  	'?ll='+ latlng +
		  	'&client_id=5HCJD5PKJ2BHRIYQYEIVKBZOZ4GE1DELT3SK5LVQBUZTP5HL'+
		  	'&client_secret=F341GY5WF4GOYKP5I1LZATQANTM02YL13GVWSN1M1PFXNN21'+
		  	'&v=20160321'+
		  	'&query=' + $scope.searchTerm + 
		  	'&sortByDistance=1' 
		}).then(function success(response) {
			$scope.searchResponse = response;
			console.log(JSON.stringify($scope.searchResponse));
		  }, function error(response) {
		    console.log(JSON.stringify(response));
		  });
	}

	function getVenues(){
		$http({
		  	method: 'GET',
		  	url: 'https://api.foursquare.com/v2/venues/explore'+
		  	'?ll='+ latlng +
		  	'&client_id=5HCJD5PKJ2BHRIYQYEIVKBZOZ4GE1DELT3SK5LVQBUZTP5HL'+
		  	'&client_secret=F341GY5WF4GOYKP5I1LZATQANTM02YL13GVWSN1M1PFXNN21'+
		  	'&v=20160321'
		}).then(function success(response) {
			$scope.response = response;
			console.log(JSON.stringify($scope.response));
		  }, function error(response) {
		    console.log(JSON.stringify(response));
		  });
	}

	function getLocation(){
		if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(success, error);
		} else {
			//Default Location
			getVenues('41,-74');
		}
	}

	function success(position){
		latlng = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();
		getVenues();
		console.log(latlng);
	}

	function error(msg){
		return;
	}

}]);