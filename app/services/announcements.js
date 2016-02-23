function $announcements($http, endpoint) {
	return {
		get: function(id) {
			return $http.get(endpoint + '/announcements/' + id);
		},

		getAll: function() {
			return $http.get(endpoint + '/announcements/all')
		}
	}
}

angular.module('course').factory('$announcements', $announcements);