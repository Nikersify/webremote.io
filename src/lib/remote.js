var EventEmitter = require('events').EventEmitter;

function Remote() {
	this.vars = {};
	this.Settings = {};
	this.Fluff = {};
	this.Events = new EventEmitter;
}

module.exports = exports = new Remote();