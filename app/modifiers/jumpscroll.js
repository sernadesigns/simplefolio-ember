import { modifier } from 'ember-modifier';
import jump from 'jump.js';

export default modifier(function jumpscroll(element) {
	const handler = (e) => {
		e.preventDefault();
		jump(element.getAttribute('href'));
	}

	element.addEventListener('click', handler);

	return () => {
		element.removeEventListener('click', handler);
	}
});
