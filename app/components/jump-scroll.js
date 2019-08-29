import Component from '@ember/component';
import jump from 'jump.js';

export default Component.extend({
	tagName: 'a',
	attributeBindings: ['href'],

	click(e) {
		e.preventDefault();
		jump(this.href);
	}
});
