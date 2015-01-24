'use strict';

var fs = require('fs'),
	omni = require('omni.cm')();

var match;
fs.readdirSync(__dirname + '/node_modules')
.forEach(function(moduleName){
	match = moduleName.match(/^omni\.cm-(.+)/);
	if (!match) return;

	omni.loadModule(__dirname + '/node_modules/' + moduleName);
});

omni.listen();
