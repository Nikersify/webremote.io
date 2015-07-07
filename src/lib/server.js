var Remote = require('./remote');

var http = require('http'),
	fs = require('fs'),
	path = require('path');

var rootDir = Remote.vars.rootDir;

Remote.Settings.server = {};
Remote.Settings.server.port = 80;
Remote.Settings.server.uri = '0.0.0.0';

var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

var serve = serveStatic('src/web', {'index': ['index.html']});

var server = http.createServer(function (req, res){
	// res.writeHead(200, {'Content-Type': 'text/html'});
	// var indexPath = path.join(rootDir, 'src/web/static/index.html');

	// fs.readFile(indexPath, function(err, data){
	// 	err? res.end() : res.end(data);
	// });
	
	var done = finalhandler(req, res);
	serve(req, res, done);
});

module.exports = exports = server;

module.exports.start = function(_port, _uri){
	var port = (typeof _port === 'undefined') ? 80 : _port,
		uri = (typeof _uri === 'undefined') ? '0.0.0.0' : _uri;

	server.listen(port, uri);

	console.log('Server running at http://'+uri+':'+port+'/');
}