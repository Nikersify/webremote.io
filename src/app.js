// hi

// require require raewafgxvb

Remote = {
	vars: {},
	Settings: {},
	Fluff: {},
	Events: new require('events').EventEmitter
};

Remote.vars.rootDir = __dirname;

global.Remote = Remote;

// fileserver to serve static files to client
var fileserver = require('./lib/fileserver');

Remote.Fluff.fileserver = fileserver;

Remote.Fluff.io = require('./lib/io');

fileserver.start(80, '0.0.0.0');