import { GameManager } from './classes/GameManager';

const playBtn = document.getElementById('play-btn');
const soundBtn = document.getElementById('sound-btn');
const pauseBtn = document.getElementById('pause-btn');
const scoreboardBtn = document.getElementById('scoreboard-btn')


const gameManager: GameManager = new GameManager();

gameManager.play();

playBtn?.addEventListener('click', () => {
  gameManager.play();
});

soundBtn?.addEventListener('click', () => {
  gameManager.toggleSound();
})

pauseBtn?.addEventListener('click', () => {
  gameManager.pauseGame();
})

scoreboardBtn?.addEventListener('click', () => {
  gameManager.showScoreBoard();
})


