import Component from '@ember/component';
import ScrollReveal from 'scrollreveal';
import { computed } from '@ember/object';

const optionProps = [
	'delay',
	'distance',
	'duration',
	'easing',
	'interval',
	'opacity',
	'origin',
	'rotate',
	'scale',
	'cleanup',
	'container',
	'desktop',
	'mobile',
	'reset',
	'useDelay',
	'viewFactor',
	'viewOffset',
	'afterReset',
	'afterReveal',
	'beforeReset',
	'beforeReveal'
];

export default Component.extend({
	tagName: 'div',

	init() {
		this._super(...arguments);
		
		ScrollReveal({ reset: false });
	},

	didReceiveAttrs() {
		this._setDefaults();
	},

	didInsertElement() {
		ScrollReveal().reveal(this.element, this.options);
	},

	delay: 0,
	distance: '0px',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotateX: 0,
	rotateY: 0,
	rotateZ: 0,
	scale: 1,
	cleanup: false,
	container: window.document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffsetTop: 0,
	viewOffsetRight: 0,
	viewOffsetBottom: 0,
	viewOffsetLeft: 0,

	rotate: computed('rotateX', 'rotateY', 'rotateZ', function () {
		return { x: this.rotateX, y: this.rotateY, z: this.rotateZ };
	}),
	viewOffset: computed('viewOffsetTop', 'viewOffsetRight', 'viewOffsetBottom', 'viewOffsetLeft', function () {
		return { top: this.viewOffsetTop, right: this.viewOffsetRight, bottom: this.viewOffsetBottom, left: this.viewOffsetLeft };
	}),

	afterReset() {},
	afterReveal() {},
	beforeReset() {},
	beforeReveal() {},

	_setDefaults() {
		let options = {};
		optionProps.forEach(option => {
			options[option] = this[option];
		});

		this.options = options;
	}
});
