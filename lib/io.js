var io = require('socket.io')(Remote.Fluff.fileserver);

io.on('connection', function(socket) {
	socket.on('message', function(data){
		console.log(data);
	});
});

console.log('socket.io probably started');

module.exports = exports = io;