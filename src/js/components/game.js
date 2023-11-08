
const gameChar = document.querySelector('.game__char');
const gameVillian = document.querySelector('.game__villian');
const scoreDisplay = document.querySelector('.game__score > span');
const gameWrapper = document.querySelector('.game__wrapper');
const startGameBtn = gameWrapper.querySelector('button');
const pauseGameBtn = document.querySelector('.game__pause');
let isOn = false;
let gameInterval;
let score = 0;
startGameBtn.addEventListener('click', startGame);
pauseGameBtn.addEventListener('click', pauseGame);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !gameChar.classList.contains('game__char--active')) {
    gameChar.classList.add('game__char--active');
    gameChar.addEventListener('animationend', () => {
      gameChar.classList.remove('game__char--active');
    }, { once: true });
  }


  let villianLeft = gameVillian.getBoundingClientRect().left;
  let villianTop = gameVillian.getBoundingClientRect().top;
  let charTop = gameChar.getBoundingClientRect().top;
  if (charTop >= villianTop - 150 && villianLeft <= 410 && villianLeft >= 300) {
    score += 100;
    scoreDisplay.textContent = score;
  }
});



function startGame() {
  gameWrapper.classList.add('game__wrapper--hidden');
  gameVillian.classList.add('game__villian--active');
  isOn = true;

  if (isOn) {
    gameInterval = setInterval(() => {
      score += 50;
      scoreDisplay.textContent = score;
    }, 10000);
  }
}

function pauseGame() {
  gameWrapper.classList.remove('game__wrapper--hidden');
  gameVillian.classList.remove('game__villian--active');
  isOn = false;

  if (gameInterval) {
    clearInterval(gameInterval);
  }
}
