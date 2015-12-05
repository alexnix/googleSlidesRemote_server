var concat = require('concatenate-files');

var files = [
        __dirname + '/bower_components/jquery/dist/jquery.min.js',
        __dirname + '/bower_components/socket.io-client/socket.io.js',
        __dirname + '/bower_components/angular/angular.js',
        __dirname + '/bower_components/qrcode.js/lib/qrcode.min.js',
        __dirname + '/bower_components/angular-qr/angular-qr.min.js',
        __dirname + '/bower_components/ng-dialog/js/ngDialog.min.js',
        __dirname + '/client/main.js',
    ];

concat(files, __dirname + '/client/remote_client.js', { separator: '\n' }, function(err, result) {
    if(!err)
        console.log('Done');
    else
        console.log(err);
});

