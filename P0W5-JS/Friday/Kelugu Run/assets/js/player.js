class Player {
	constructor(ratioWidth, ratioHeight) {
		this.ratioWidth = ratioWidth;
		this.ratioHeight = ratioHeight;

		this.position = (ratioHeight - 1) + '-' + (Math.ceil(ratioWidth / 2) - 1);
		this.updatePlayerView();
	}

	left() {
		this.move(-1);
	}

	right() {
		this.move(1);
	}

	move(num) {
		let oldPosition = document.getElementById(this.position);
		oldPosition.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
		oldPosition.style.backgroundImage = 'none';

		let coordinate = this.position.split('-');
		let newX = Number(coordinate[1]) + num;

		if (newX >= 0 && newX < this.ratioWidth) coordinate[1] = newX.toString();

		this.position = coordinate.join('-');
		this.updatePlayerView();
	}

	updatePlayerView() {
		let newPosition = document.getElementById(this.position);
		newPosition.style.backgroundColor = '#f1c40f';
		newPosition.style.backgroundImage = "url('assets/images/Logo_Fox.png')";
		newPosition.style.backgroundSize = 'cover';
	}

	hit() {
		let newPosition = document.getElementById(this.position);
		return (newPosition.hasAttribute('obstacle')) ? true : false;
	}
}