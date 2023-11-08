const gGlass = document.querySelector('.glasses-image');
const gMeme = document.querySelector('.about__meme');
const photoBlock = document.querySelector('.about__photo');

photoBlock.addEventListener('mouseover', () => {
  gGlass.classList.add('glasses-image--shown');
  gMeme.classList.add('about__meme--shown');
});

photoBlock.addEventListener('mouseout', () => {
  gGlass.classList.remove('glasses-image--shown');
  gMeme.classList.remove('about__meme--shown');
})
