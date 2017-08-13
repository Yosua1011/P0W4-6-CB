const leftKey = 37;
const rightKey = 39;
const enterKey = 13;

const pixelWidth = 5;
const pixelHeight = 7;
const gameSpeed = 100;

let gameEl = document.getElementById('game-wrapper');
let road = new Road(450, pixelWidth, pixelHeight);
gameEl.appendChild(road.el)
let player = new Player(pixelWidth, pixelHeight);
let scoreEl = document.getElementById('score');
let score = 0;
let highScoreEl = document.getElementById('high-score');
let highScore = 0;
let gameWrapper = document.getElementById('game-wrapper');

let obstacles = [];

let playId = 0;
let play = () => {
	score = 0;
	gameWrapper.style.backgroundColor = '#2c3e50';


	playId = setInterval(() => {
		score++
		if (Math.random() >= 0) obstacles.push(new Obstacle(pixelWidth, pixelHeight));

		for (let i = 0; i < obstacles.length; i++) {
			obstacles[i].refresh();

			if (player.position == obstacles[i].position) gameOver();

			if (obstacles[i].y >= pixelHeight) {
				obstacles.splice(i, 1);
				i--
			}
		};

		scoreEl.innerHTML = score;
		player.updatePlayerView();
	}, gameSpeed);
}

document.addEventListener('keydown', (e) => {
	if (e.keyCode === leftKey) {
		player.left();
		if (player.hit()) gameOver()
	}
	else if (e.keyCode === rightKey) {
		player.right()
		if (player.hit()) gameOver()
	}
	else if (e.keyCode === enterKey && playId === 0) play();
})

let gameOver = () => {
	gameWrapper.style.backgroundColor = '#e74c3c';
	clearInterval(playId);
	playId = 0;

	highScore = (score > highScore) ? score : highScore;
	highScoreEl.innerHTML = highScore;
}