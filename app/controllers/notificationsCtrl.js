function notificationsCtrl($announcements) {
	var self = this;

	self.courseAnnouncements = [];
	self.allAnnouncements = [];

	$announcements.get('_3_1').success(function(data) {
		self.courseAnnouncements = data;
	});

	$announcements.getAll().success(function(data) {
		self.allAnnouncements = data;
	});
}

angular.module('course').controller('notificationsCtrl', notificationsCtrl);