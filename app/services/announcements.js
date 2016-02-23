function $announcements($http) {
	return {
		get: function(id) {
			return $http.get('fixtures/' + id + '.json')
		},

		getAll: function() {
			return $http.get('fixtures/all.json')
		}
	}
}

angular.module('course')
.factory('$announcements', $announcements);