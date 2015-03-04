'use strict';

var fs = require('fs'),
	omni = require('omni.cm')();

var match, dir = __dirname + '/node_modules';
fs.readdirSync(dir).forEach(function(moduleName){
	match = moduleName.match(/^omni\.cm-(.+)/);
	if (!match) return;
	omni.loadModule(dir + '/' + moduleName);
});

dir = __dirname + '/modules';
if (fs.existsSync(dir)){
	fs.readdirSync(dir).forEach(function(moduleName){
		omni.loadModule(dir + '/' + moduleName);
	});
}

omni.listen();
