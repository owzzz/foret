/*eslint-disable strict */
'use strict';

import Velocity from 'velocity-animate';
import Nav from 'src/js/components/nav';
import Logo from 'src/js/components/logo';

/* Main Class
 *************/

class Main {
	constructor () {
		this.animate();
	}
	animate () {
		var navIcon = new Nav();
		var logo = new Logo();

		$('.ft-wrapper').velocity({opacity: 1}, 2000, () => {
			// Initialise NavIcon
			navIcon.bindEvents();
		});
	}
}

var App = new Main();
