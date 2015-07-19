'use strict';

var deepMixIn = require('mout/object/deepMixIn');
var fs = require('fs');
var config = {};

if (fs.existsSync(__dirname + '/config.json')){
	deepMixIn(config, require(__dirname + '/config.json'));
}

if (fs.existsSync(__dirname + '/config-local.json')){
	deepMixIn(config, require(__dirname + '/config-local.json'));
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
