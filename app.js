'use strict';

var fs = require('fs');
var config;

if (fs.existsSync(__dirname + '/config.json')){
	config = require(__dirname + '/config.json');
}

var omni = require('omni.cm')(config);

var match, dir = __dirname + '/node_modules';
fs.readdirSync(dir).forEach(function(moduleName){
	match = moduleName.match(/^omni\.cm-(.+)/);
	if (!match) return;
	omni.registerModule(dir + '/' + moduleName);
});

dir = __dirname + '/modules';
if (fs.existsSync(dir)){
	fs.readdirSync(dir).forEach(function(moduleName){
		omni.registerModule(dir + '/' + moduleName);
	});
}

omni.setNavigation(require('./navigation.json'));

omni.listen();
