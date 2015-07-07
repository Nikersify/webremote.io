var gulp = require('gulp'),
	fs = require('fs'),
	del = require('del'),
	minimist = require('minimist');

gulp.task('build', ['clean'] ,function(){
	var NwBuilder = require('node-webkit-builder');
	var nw = new NwBuilder({
		files: [
			'**', 
			'!bower_components/**', 
			'!cache/**', 
			'!build/**', 
			'!node_modules/nw/**',
			'!node_modules/bower/**',
			'!node_modules/node-webkit-builder/**'
			],
		platforms: ['win64'],
		buildDir: './bin'
	});

	return nw.build().then(function(){
		// do something maybe meh
	}).catch(function(error){
		console.error(error);
	});
});

gulp.task('clean', function(cb) {
	del(['bin'], cb);
});

gulp.task('debug', function(){
	console.log(minimist(process.argv.slice(2)));
});