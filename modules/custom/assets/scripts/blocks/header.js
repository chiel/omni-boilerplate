'use strict';

var Base = require('builder/blocks/base');

/**
 * Header block
 */
var Header = function(style, data){
	if (!(this instanceof Header)) return new Header();

	this.formSpec = {
		pages: [{ groups: ['group1'] }],
		groups: {
			group1: { fields: [ 'title', 'body' ]}
		},
		fields: {
			title: {
				type: 'text',
				attributes: {
					placeholder: 'Title'
				}
			},
			body: {
				type: 'expanding_textarea',
				attribute: {
					placeholder: 'Body'
				}
			}
		}
	};

	Base.call(this, style, data);
};

require('inherits')(Header, Base);

Header.prototype.meta = Header.meta = {
	type: 'header',
	name: 'Header',
	description: 'Header block',
	constrain: /.*\.header/
};

Header.prototype.getTitle = function(){
	return this.form.fields.title.getValue();
};

module.exports = Header;
