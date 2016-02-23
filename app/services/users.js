function $users($http, endpoint) {
	return {
		get: function() {
			return $http.get(endpoint + '/user');
		}
	}
}

angular.module('course').factory('$users', $users);