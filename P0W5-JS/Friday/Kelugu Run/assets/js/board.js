class Road {
	constructor(height, ratioWidth, ratioHeight) {
		this.arr = [];

		this.ratioWidth = ratioWidth;
		this.ratioHeight = ratioHeight;

		this.height = height;
		this.width = this.height / ratioHeight * ratioWidth;

		this.el = document.createElement('div');
		this.el.style.height = this.height + 'px';
		this.el.style.width = this.width + 'px';
		this.el.setAttribute('class', 'road');

		this.appendChild();
	}

	appendChild() {
		for (let i = 0; i < this.ratioHeight; i++) {
			this.arr[i] = [];
			for (let j = 0; j < this.ratioWidth; j++) {
				let identifier = i + '-' + j;
				this.arr[i][j] = identifier;
				this.el.appendChild((new Pixel(identifier, this.width, this.ratioWidth)).el)
			}
		}
	}
}


class Pixel {
	constructor(identifier, parentWidth, ratioWidth) {
		this.identifier = identifier;
		this.parentWidth = parentWidth;
		this.ratioWidth = ratioWidth;

		this.el = document.createElement('div');

		this.el.id = this.identifier;
		this.el.setAttribute('class', 'pixel');
		
		let margin = 5;
		this.el.style.margin = margin + 'px';
		this.el.style.width = (Math.floor(this.parentWidth / this.ratioWidth) - (margin * 2)) + 'px';
		this.el.style.height = this.el.style.width;
	}
}