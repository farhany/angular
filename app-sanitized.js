(function () {
	var app = angular.module('app', []);

	app.controller('familyController', function() {
		this.family = myFamily;
	});
	
	var myFamily = [
		{
			fullname: "X Name",
			relationship: "X Relationship",
			nickname: "X Nickname",
			picture: 'x-pic.jpg'
			
		},
		{	
			fullname: "X Name",
			relationship: "X Relationship",
			nickname: "X Nickname",
			picture: 'x-pic.jpg'
		},
		{
			fullname: "X Name",
			relationship: "X Relationship",
			nickname: "X Nickname",
			picture: 'x-pic.jpg'
			
		}
	];
	
})();
 