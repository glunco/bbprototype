function announcementsCtrl(announcements) {
	this.all = announcements.data;
}

angular.module('course').controller('announcementsCtrl', announcementsCtrl)