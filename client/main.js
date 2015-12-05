var app = angular.module('app',['ja.qr', 'ngDialog']);
	
var dialogController = app.controller('dialogController', function($scope){
	$scope.val = "";
});

app.run(function(ngDialog, $rootScope){
	//console.log('sallllll');
	var socket = io('https://wtpt-alexnixi.c9.io/');
	socket.on('id', function(data){
		ngDialog.open({
		    template: 'https://wtpt-alexnixi.c9.io/client/dialog.html',
		    controller: 'dialogController',
		    data: {
		    	id: data.id,
		    }
		});
		console.log(data.id);
	});
	
	socket.on('next', function(data){
		// manipulate Google Slide to move foreward
		$('body > div.punch-full-screen-element.punch-full-window-overlay > iframe').contents().find("body > div:nth-child(15) > div.punch-viewer-container").click();
	});

	socket.on('previous', function(data){
		// manipulate Google Slides to move backwards
	});
	
});


angular.element(document).ready(function() {
	angular.bootstrap(document, ['app']);
});