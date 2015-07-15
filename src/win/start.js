$(document).ready(function(){
	
	var jade = require('jade');

	opts = {
		debug: false
	};

	var content = jade.compileFile('src/jade/content.jade', opts);
	
	vars = {};
	var compiled = content(vars);
	$('#content').html(compiled);
	
	win.show();
});