function loadScript(src){
	var BASE_URL = 'https//localhost:8000/';
	var my_awesome_script = document.createElement('script');
	my_awesome_script.setAttribute('src', BASE_URL + src);
	document.head.appendChild(my_awesome_script);	
}

loadScript('bower_components/jquery/dist/jquery.min.js');
loadScript('bower_components/socket.io-client/socket.io.js');
loadScript('bower_components/angular/angular.js');
loadScript('bower_components/qrcode.js/lib/qrcode.min.js');
loadScript('bower_components/angular-qr/angular-qr.min.js');
loadScript('bower_components/ng-dialog/js/ngDialog.min.js');
loadScript('client/main.js');



