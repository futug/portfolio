const hero = document.querySelector('.hero');
let width = hero.clientWidth;
let height = hero.clientHeight;


const canvas = document.querySelector('.hero__canvas');
const ctx = canvas.getContext('2d');

canvas.setAttribute('width', `${width}`);
canvas.setAttribute('height', `${height}`);

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

const rectSize = 50;
const numCols = Math.ceil(width / rectSize);
const numRows = Math.ceil(height / rectSize);

const rectColors = [];

for (let i = 0; i < numCols * numRows; i++) {
  rectColors.push(randomColor());
}

canvas.addEventListener('mousemove', (event) => {
  const rectX = Math.floor(event.offsetX / rectSize) * rectSize;
  const rectY = Math.floor(event.offsetY / rectSize) * rectSize;
  const rectIndex = (rectY / rectSize) * numCols + rectX / rectSize;

  const newColor = randomColor();

  // Проверка, чтобы избежать замены на тот же цвет
  while (newColor === rectColors[rectIndex]) {
    newColor = randomColor();
  }

  rectColors[rectIndex] = newColor;
  ctx.fillStyle = rectColors[rectIndex];
  ctx.fillRect(rectX, rectY, rectSize*1.3, rectSize*1.3);
});

for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    const x = col * rectSize;
    const y = row * rectSize;
    const index = row * numCols + col;

    ctx.fillStyle = rectColors[index];
    ctx.fillRect(x, y, rectSize, rectSize);
  }
}
