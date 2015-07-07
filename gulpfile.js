var gulp = require('gulp'),
	fs = require('fs'),
	rimraf = require('rimraf'),
	minimist = require('minimist');

gulp.task('build', function(){
	var NwBuilder = require('node-webkit-builder');
	var nw = new NwBuilder({
		files: ['**', '!bower_components/**', '!cache/**'],
		platforms: ['win64']
	});

	var dir = fs.readdirSync('.');

	// remove old builds
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
	console.log(minimist(process.argv.slice(2)));
});