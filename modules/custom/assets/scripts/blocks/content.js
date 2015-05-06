'use strict';

var Base = require('builder/blocks/base');

/**
 * Content block
 */
var Content = function(style, data){
	if (!(this instanceof Content)) return new Content();

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

require('inherits')(Content, Base);

Content.prototype.meta = Content.meta = {
	type: 'content',
	name: 'Content',
	description: 'Content block'
};

Content.prototype.getTitle = function(){
	return this.form.fields.title.getValue();
};

module.exports = Content;
