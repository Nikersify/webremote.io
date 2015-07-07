// hi

// require require raewafgxvb

Remote = {
	vars: {},
	Settings: {},
	Fluff: {},
	Events: new require('events').EventEmitter
};

Remote.vars.rootDir = process.cwd();

global.Remote = Remote;

// fileserver to serve static files to a client
Remote.Fluff.fileserver = require('./lib/fileserver');

Remote.Fluff.io = require('./lib/io');

fileserver.start(80, '0.0.0.0');