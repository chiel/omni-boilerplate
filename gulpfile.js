'use strict';

var fs = require('fs'),
	gulp = require('gulp'),
	omniGulp = require('omni.cm/gulp'),
	config = require('omni.cm/gulp/config'),
	readCssDir = require('omni.cm/gulp/readcssdir'),
	readJsDir = require('omni.cm/gulp/readjsdir'),
	readImg = require('omni.cm/gulp/readimg');

config.nodemon.watch.push(__dirname);

var match, modulePath, dir = __dirname + '/node_modules';
fs.readdirSync(dir).forEach(function(moduleName){
	match = moduleName.match(/^omni\.cm-(.+)/);
	if (!match) return;

	modulePath = dir + '/' + moduleName;

	config.nodemon.watch.push(modulePath);

	readCssDir(modulePath + '/assets/styles', match[1]);
	readJsDir(modulePath + '/assets/scripts', match[1]);
	readImg(modulePath + '/assets/images', match[1]);

	if (fs.existsSync(modulePath + '/gulpfile.js')){
		require(modulePath + '/gulpfile')(gulp, config);
	}
});

dir = __dirname + '/modules';
fs.readdirSync(dir).forEach(function(moduleName){
	modulePath = dir + '/' + moduleName;
	console.log('reading dir', modulePath);

	config.nodemon.watch.push(modulePath);

	readCssDir(modulePath + '/assets/styles', moduleName);
	readJsDir(modulePath + '/assets/scripts', moduleName);
	readImg(modulePath + '/assets/images', moduleName);

	if (fs.existsSync(modulePath + '/gulpfile.js')){
		require(modulePath + '/gulpfile')(gulp, config);
	}
});

omniGulp(gulp);
