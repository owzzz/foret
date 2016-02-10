import $ from 'jquery';

let Paper = window.paper;

export default class Logo {
	constructor () {
		window.onload = () => {
			// Get a reference to the canvas object
			let canvas = document.getElementById('myCanvas');

			// Create an empty project and a view for the canvas:
			Paper.setup(canvas);

			console.log(Paper.view.bounds.topLeft);
			console.log(Paper.view.center);

			Paper.project.importSVG('images/foret-music.svg', {
				onLoad: (group) => {
					group.scale(0.62);
					console.log(Paper.project.activeLayer);
					console.log(Paper.project.activeLayer.children[0].segments);
					console.log(Paper.project.activeLayer.children.paths);
					group.position = new Paper.Point(Paper.view.center);
					group.onMouseMove = this.onMouseMove;
				}
			});

			Paper.view.draw();
		};
	}
	getPathData (path) {
		if (path) {
			return window.fetch(path);
		}
	}
	onMouseMove (e) {
		console.log(e);
	}
	createPath (pathData, pointData) {
		if (pathData && pointData.length > 1) {
			let path = new Paper.Path(pathData);
			let startPoint = path.add(new Paper.Point(pointData));

			path.fillColor = '#FFF';
			path.strokeColor = '#FFF';
		}
	}
	animate (e) {
		console.log(e);
	}
}
