'use strict';

var fs = require('fs'),
	gulp = require('gulp'),
	omniGulp = require('omni.cm/gulp'),
	config = require('omni.cm/gulp/config'),
	readCssDir = require('omni.cm/gulp/readcssdir'),
	readJsDir = require('omni.cm/gulp/readjsdir');

var match;
fs.readdirSync(__dirname + '/node_modules')
.forEach(function(moduleName){
	match = moduleName.match(/^omni\.cm-(.+)/);
	if (!match) return;

	readCssDir(__dirname + '/node_modules/' + moduleName + '/assets/stylesheets', match[1]);
	readJsDir(__dirname + '/node_modules/' + moduleName + '/assets/scripts', match[1]);

	if (fs.existsSync(__dirname + '/node_modules/' + moduleName + '/gulpfile.js')){
		require(moduleName + '/gulpfile')(gulp, config);
	}
});

omniGulp(gulp);
