var http = require('http'),
	fs = require('fs'),
	path = require('path');

var rootDir = Remote.vars.rootDir;

var server = http.createServer(function (req, res){
		res.writeHead(200, {'Content-Type': 'text/html'});
		var indexPath = path.join(rootDir, 'static/index.html');

		fs.readFile(indexPath, function(err, data){
			err? res.end() : res.end(data);
		});
	});

module.exports = server;

module.exports.start = function(_port, _uri){
	var port = (typeof _port === 'undefined') ? 80 : _port,
		uri = (typeof _uri === 'undefined') ? '0.0.0.0' : _uri;

	server.listen(port, uri);

	console.log('Server running at http://'+uri+':'+port+'/');
}