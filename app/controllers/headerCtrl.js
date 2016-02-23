function headerCtrl($announcements, $users) {
	var self = this;

	self.user = {};

	self.courseAnnouncements = [];
	self.allAnnouncements = [];

	$announcements.get('_3_1').success(function(data) {
		self.courseAnnouncements = data;
	});

	$announcements.getAll().success(function(data) {
		self.allAnnouncements = data;
	});

	$users.get().success(function(data) {
		self.user = data;
	});

}

angular.module('course').controller('headerCtrl', headerCtrl);