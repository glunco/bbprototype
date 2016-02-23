angular.module('course')
	.filter('cleanText', function() {
		return function(text) {
			return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
		};
	})

	.filter('raw', function($sce) {
	  return function(val) {
	    return $sce.trustAsHtml(val);
	  };
	});