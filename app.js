'use strict';

var fs = require('fs');
var config;

if (fs.existsSync(__dirname + '/config.json')){
	config = require(__dirname + '/config.json');
}

var omni = require('omni.cm')(config);

// load generic omni modules
var dir = __dirname + '/node_modules';
fs.readdirSync(dir).forEach(function(moduleName){
	if (/^omni\.cm-.+/.test(moduleName)){
		omni.registerModule(dir + '/' + moduleName);
	}
});

// load cms-specific modules
dir = __dirname + '/modules';
if (fs.existsSync(dir)){
	fs.readdirSync(dir).forEach(function(moduleName){
		omni.registerModule(dir + '/' + moduleName);
	});
}

omni.setNavigation(require('./navigation.json'));

omni.listen();
