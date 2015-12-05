var app = angular.module('app',['ja.qr', 'ngDialog']);
	
var dialogController = app.controller('dialogController', function($scope){
	$scope.val = "";
});

app.run(function(ngDialog, $rootScope){

	var socket = io('http://localhost:8000');
	socket.on('id', function(data){
		ngDialog.open({
		    template: 'client/dialog.html',
		    controller: 'dialogController',
		    data: {
		    	id: data.id,
		    }
		});
		console.log(data.id);
	});
	
	socket.on('next', function(data){
		// manipulate Google Slide to move foreward
	});

	socket.on('previous', function(data){
		// manipulate Google Slides to move backwards
	});
	
});


angular.element(document).ready(function() {
	angular.bootstrap(document, ['app']);
});