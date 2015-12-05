var BASE_URL = 'https://wtpt-alexnixi.c9.io/';

function loadCSS(href){
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = BASE_URL + href;
	link.media = 'all';
	head.appendChild(link)	
};

function loadScript(src){
	var my_awesome_script = document.createElement('script');
	my_awesome_script.setAttribute('src', BASE_URL + src);
	document.head.appendChild(my_awesome_script);	
};

loadCSS('bower_components/ng-dialog/css/ngDialog.css');
loadCSS('bower_components/ng-dialog/css/ngDialog-theme-default.css');
loadCSS('client/myCss.css');

loadScript('client/remote_client.js');



