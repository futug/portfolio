setTimeout(() => {
  const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']',
    '{', '}', '|', '\\', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?'
  ];

  const mainTitle = document.querySelector('.hero__title');
  const titleText = mainTitle.textContent;
  const titleArray = titleText.split('');

  let intervalId;

  function replaceRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * titleArray.length);
    const originalCharacter = titleArray[randomIndex];
    const randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    titleArray[randomIndex] = randomSpecialCharacter;
    const modifiedTitle = titleArray.join('');
    return { originalCharacter, modifiedTitle };
  }

  mainTitle.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
    mainTitle.textContent = titleText;
  });

  mainTitle.addEventListener('mouseleave', () => {
    intervalId = setInterval(() => {
      const { originalCharacter, modifiedTitle } = replaceRandomCharacter();
      mainTitle.textContent = modifiedTitle;
    }, 200);
  });

  intervalId = setInterval(() => {
    const { originalCharacter, modifiedTitle } = replaceRandomCharacter();
    mainTitle.textContent = modifiedTitle;
  }, 200);


}, 2000)
