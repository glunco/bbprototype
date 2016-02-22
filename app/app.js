angular.module('course', ['ui.router', 'angularMoment'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/overview');

	$stateProvider
		.state('overview', {
			url: "/overview",
			templateUrl: 'include/overview.html'
		})
		
		.state('announcements', {
			url: "/announcements",
			templateUrl: 'include/announcements.html'
		})
		
		.state('discussion', {
			url: "/discussion",
			templateUrl: 'include/discussion.html'
		})
		
		.state('syllabus', {
			url: "/syllabus",
			templateUrl: 'include/syllabus.html'
		})
		
		.state('resources', {
			url: "/resources",
			templateUrl: 'include/resources.html'
		})

		.state('assignments', {
			url: "/assignments",
			templateUrl: 'include/assignments.html'
		})
});

$(document).foundation();