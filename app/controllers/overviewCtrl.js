function overviewCtrl(announcements) {
	this.announcements = announcements.data;
}

angular.module('course').controller('overviewCtrl', overviewCtrl)