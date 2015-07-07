// hi

// require require raewafgxvb

var Remote = require('./lib/remote');

Remote.vars.rootDir = process.cwd();

// server to serve static files to a client
Remote.Fluff.server = require('./lib/server');

Remote.Fluff.io = require('./lib/io');



Remote.Events.on('start_server', function(){
	Remote.Fluff.server.start(Remote.Fluff.server.port, Remote.Fluff.server.uri);
});