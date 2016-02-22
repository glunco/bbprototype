angular
.module('course', ['ui.router'])
	.factory('$announcements', function($http) {return {
			get: function(id) {
				return $http.get('/fixtures/' + id + '.json')
			},

			getAll: function() {
				return $http.get('/fixtures/all.json')
			}
		}
	});