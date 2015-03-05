'use strict';

var fs = require('fs'),
	gulp = require('gulp'),
	omniGulp = require('omni.cm/gulp'),
	config = require('omni.cm/gulp/config'),
	readModule = require('omni.cm/gulp/lib/read_module');

config.nodemon.watch.push(__dirname);

var match, dir = __dirname + '/node_modules';
fs.readdirSync(dir).forEach(function(moduleName){
	match = moduleName.match(/^omni\.cm-(.+)/);
	if (!match) return;

	readModule(dir + '/' + moduleName, match[1]);
});

dir = __dirname + '/modules';
fs.readdirSync(dir).forEach(function(moduleName){
	readModule(dir + '/' + moduleName, moduleName);
});

omniGulp(gulp);
