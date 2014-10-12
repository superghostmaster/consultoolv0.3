// public/js/services/NerdService.js
angular.module('SubmService', []).factory('Subm', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			return $http.get('/api/subms');
		},

		// call to POST and create a new geek
		create : function(submData) {
			return $http.post('/api/subms', submData);
		},

		// call to DELETE a geek
		delete : function(id) {
			return $http.delete('/api/subms/' + id);
		}
	}
	
}]);
