import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import VanillaTilt from 'vanilla-tilt';

const optionProps = [
	'reverse',
	'max',
	'startX',
	'startY',
	'perspective',
	'scale',
	'speed',
	'transition',
	'axis',
	'easing',
	'glare',
	'max-glare',
	'glare-prerender',
	'mouse-event-element',
	'full-page-listening',
	'gyroscope',
	'gyroscopeMinAngleX',
	'gyroscopeMaxAngleX',
	'gyroscopeMinAngleY',
	'gyroscopeMaxAngleY',
	'gyroscopeSamples'
];

export default class TiltElement extends Component {
	@tracked options;

  constructor() {
		super(...arguments);
		this.options = {};

		this._setDefaults();
	}

	@action
	initializeVanillaTilt(element) {
		VanillaTilt.init(element, this.options);
	}

	get reverse() {
		return this.args.reverse || false;
	}

	get max() {
		return this.args.max || 35;
	}

	get startX() {
		return this.args.startX || 0;
	}

	get startY() {
		return this.args.startY || 0;
	}

	get perspective() {
		return this.args.perspective || 1000;
	}

	get scale() {
		return this.args.scale || 1;
	}

	get speed() {
		return this.args.speed || 300;
	}

	get transition() {
		return this.args.transition || true;
	}

	get axis() {
		return this.args.axis || null;
	}

	get reset() {
		return this.args.reset || true;
	}

	get easing() {
		return this.args.easing || "cubic-bezier(.03,.98,.52,.99)";
	}

	get glare() {
		return this.args.glare || false;
	}

	get "max-glare"() {
		return this.args["max-glare"] || 1;
	}

	get "glare-prerender"() {
		return this.args["glare-prerender"] || false;
	}

	get "mouse-event-element"() {
		return this.args["mouse-event-element"] || null;
	}

	get "full-page-listening"() {
		return this.args["full-page-listening"] || false;
	}

	get gyroscope() {
		return this.args.gyroscope || true;
	}

	get gyroscopeMinAngleX() {
		return this.args.gyroscopeMinAngleX || -45;
	}

	get gyroscopeMaxAngleX() {
		return this.args.gyroscopeMaxAngleX || 45;
	}

	get gyroscopeMinAngleY() {
		return this.args.gyroscopeMinAngleY || -45;
	}

	get gyroscopeMaxAngleY() {
		return this.args.gyroscopeMaxAngleY || 45;
	}

	get gyroscopeSamples() {
		return this.args.gyroscopeSamples || 10;
	}

  _setDefaults() {
		optionProps.forEach(option => {
			this.options[option] = this[option];
		});
	}
}
