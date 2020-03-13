import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ScrollReveal from 'scrollreveal';

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

export default class XScrollReveal extends Component {
	@tracked options;
	@tracked rotateX = 0;
	@tracked rotateY = 0;
	@tracked rotateZ = 0;
	@tracked viewOffsetTop = 0;
	@tracked viewOffsetRight = 0;
	@tracked viewOffsetBottom = 0;
	@tracked viewOffsetLeft = 0;

  constructor() {
		super(...arguments);
		this.options = {};
		
		this._setDefaults();
		ScrollReveal({ reset: false });
	}

	@action
	initializeScrollReveal(element) {
		ScrollReveal().reveal(element, this.options);
	}

	get delay() {
		return this.args.delay || 0;
	}

	get distance() {
		return this.args.distance || '0px';
	}

	get duration() {
		return this.args.duration || 600;
	}

	get easing() {
		return this.args.easing || 'cubic-bezier(0.5, 0, 0, 1)';
	}

	get interval() {
		return this.args.interval || 0;
	}

	get opacity() {
		return this.args.opacity || 0;
	}

	get origin() {
		return this.args.origin || 'bottom';
	}

	get rotateX() {
		return this.args.rotateX || 0;
	}

	get rotateY() {
		return this.args.rotateY || 0;
	}

	get rotateZ() {
		return this.args.rotateZ || 0;
	}


	get scale() {
		return this.args.scale || 1;
	}

	get cleanup() {
		return this.args.cleanup || false;
	}

	get container() {
		return this.args.container || window.document.documentElement;
	}

	get desktop() {
		return this.args.desktop || true;
	}

	get mobile() {
		return this.args.mobile || true;
	}

	get reset() {
		return this.args.reset || false;
	}

	get useDelay() {
		return this.args.useDelay || 'always';
	}

	get viewFactor() {
		return this.args.viewFactor || 0.0;
	}

	get rotate() {
		return { x: this.rotateX, y: this.rotateY, z: this.rotateZ };
	}

	get viewOffset() {
		return { top: this.viewOffsetTop, right: this.viewOffsetRight, bottom: this.viewOffsetBottom, left: this.viewOffsetLeft };
	}

	afterReset() {}
	afterReveal() {}
	beforeReset() {}
	beforeReveal() {}

	_setDefaults() {
		optionProps.forEach(option => {
			this.options[option] = this[option];
		});
	}
}
