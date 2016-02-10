
import {Velocity} from 'velocity-animate';
import $ from 'jquery';

export default class Nav {
	constructor (el) {
	}
	bindEvents () {
		$(document).ready(() => {
			let $rect = $('rect');
			let $navLink = $('.ft-nav a');

			$rect
				.eq(0)
				.velocity({ width: 0}, {
					progress: (elements, complete, remaining, start, tweenValue) => {
						$(elements).attr('x', this.calculateXAxis(50, elements[0].getBBox().width));
					},
					delay: 0,
					loop: 1,
					duration: 400
				});

			$rect
				.eq(1)
				.velocity({ width: 0}, {
					progress: (elements, complete, remaining, start, tweenValue) => {
						$(elements).attr('x', this.calculateXAxis(50, elements[0].getBBox().width));
					},
					delay: 60,
					loop: 1,
					duration: 400
				});

			$rect
				.eq(2)
				.velocity({ width: 0}, {
					progress: (elements, complete, remaining, start, tweenValue) => {
						$(elements).attr('x', this.calculateXAxis(50, elements[0].getBBox().width));
					},
					delay:  90,
					loop: 1,
					duration: 400
				});


			$rect
				.eq(3)
				.velocity({ width: 0}, {
					progress: (elements, complete, remaining, start, tweenValue) => {
						$(elements).attr('x', this.calculateXAxis(50, elements[0].getBBox().width));
					},
					delay:  120,
					loop: 1,
					duration: 400
				});

			$navLink.on('mouseenter', (e) => {
				$(e.target).velocity({
					translateX: '18px'
				});
				$(e.target).siblings('.ft-stroke').velocity({
					translateY: '-2px',
					opacity: 1
				});
			});

			$navLink.on('mouseleave', (e) => {
				$(e.target).velocity({
					translateX: '0px'
				});
				$(e.target).siblings('.ft-stroke').velocity({
					translateY: '4px',
					opacity: 0
				});
			});

			$('.ft-nav-icon').on('click', () => {
				$rect.velocity({width: 0}, {
					progress: (elements, complete, remaining, start, tweenValue) => {
						$(elements).attr('x', this.calculateXAxis(50, elements[0].getBBox().width));
					}
				});
			});
		});
	}
	calculateXAxis (containerWidth, elementWidth) {
		return containerWidth - elementWidth;
	}
}
