import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { projects, socials } from '../utils/data';

export default class ApplicationController extends Controller {
	@service
	media;

	constructor() {
		super(...arguments);
		this.projects = projects;
		this.socials = socials;
	}

	@computed('media.isDesktop')
	get leftToBottom() {
		return this.media.isDesktop ? 'bottom' : 'left';
	}

	@computed('media.isDesktop')
	get rightToBottom() {
		return this.media.isDesktop ? 'bottom' : 'right';
	}
}
