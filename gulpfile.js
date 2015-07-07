var gulp = require('gulp'),
	path = require('path'),
	fs = require('fs'),
	rimraf = require('rimraf');

gulp.task('build', function(){
	var NwBuilder = require('node-webkit-builder');
	var nw = new NwBuilder({
		files: ['**', '!node_modules/**', '!bower_components/**', '!cache/**'],
		platforms: ['win64']
	});

	var dir = fs.readdirSync('.');
	for (var i = dir.length - 1; i >= 0; i--) {
		if(dir[i] == 'cache'){
			rimraf.sync('cache/');
		}
	};

	// i know but im scared
	for (var i = dir.length - 1; i >= 0; i--) {
		if(dir[i] == 'build'){
			rimraf.sync('build/');
		}
	};


	nw.build().then(function(){
		console.log('DONE');
	}).catch(function(error){
		console.error(error);
	});
});

gulp.task('debug', function(){
	console.log('nothin here');
})