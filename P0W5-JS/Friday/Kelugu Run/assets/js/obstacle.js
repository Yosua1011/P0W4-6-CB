class Obstacle {
	constructor(ratioWidth, ratioHeight) {
		this.ratioWidth = ratioWidth;
		this.ratioHeight = ratioHeight;
		this.y;
		this.x = Math.floor(Math.random()*this.ratioWidth);

		this.position = this.y + '-' + this.x;
		this.updateObstacleView();
	}

	refresh() {	
		if (this.y < this.ratioHeight) this.y++
		else this.y = 0;

		this.position = this.y + '-' + this.x;

		this.updateObstacleView();
	}

	updateObstacleView() {
		if (this.y > 0) { // reset previous pixel to its color
			let oldCoordinate = (this.y - 1) + '-' + this.x;
			let oldPosition = document.getElementById(oldCoordinate);
			oldPosition.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
			oldPosition.removeAttribute('obstacle');
		}

		if (this.y >= 0 && this.y < this.ratioHeight) {
			let newPosition = document.getElementById(this.position);
			newPosition.style.backgroundColor = '#2c3e50';
			newPosition.setAttribute('obstacle', 'obstacle');
		}
	}
}