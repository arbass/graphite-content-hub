export const richGridPattern_func = () => {
  const richGridPattern_el = document.querySelector('[rich-grid-pattern]');
  if (richGridPattern_el) {
    let currentPatternValue = richGridPattern_el.getAttribute('rich-grid-pattern');
    currentPatternValue = currentPatternValue.split(',');
    const allArticleCards = richGridPattern_el.querySelectorAll('.cl-i_modules_grid-item');
    allArticleCards.forEach((card, id) => {
      if (id + 1 <= allArticleCards.length) {
        function wrapTwinCards(elToWrap) {
          const target = elToWrap[0];
          const twinWrapper = document.createElement('div');
          twinWrapper.classList.add('twin-wrapper');
          target.parentNode.insertBefore(twinWrapper, target);
          twinWrapper.appendChild(target);
          twinWrapper.appendChild(elToWrap[1]);
        }

        function checkBefore_and_after() {
          if (
            currentPatternValue[id - 1] &&
            currentPatternValue[id - 1] === 'large-card' &&
            currentPatternValue[id - 2] &&
            currentPatternValue[id - 2] === 'large-card' &&
            card.previousElementSibling &&
            card.previousElementSibling.previousElementSibling
          ) {
            const elToWrap = [
              card.previousElementSibling,
              card.previousElementSibling.previousElementSibling,
            ];
            wrapTwinCards(elToWrap);
          }
          //--

          if (
            currentPatternValue[id + 1] &&
            currentPatternValue[id + 1] === 'large-card' &&
            currentPatternValue[id + 2] &&
            currentPatternValue[id + 2] === 'large-card' &&
            card.nextElementSibling &&
            card.nextElementSibling.nextElementSibling
          ) {
            const elToWrap = [card.nextElementSibling, card.nextElementSibling.nextElementSibling];
            wrapTwinCards(elToWrap);
          }
        }

        if (currentPatternValue[id] === 'big-empty') {
          checkBefore_and_after();
        }
        if (currentPatternValue[id] === 'big-tip') {
          checkBefore_and_after();
        }
        if (currentPatternValue[id] === 'big-card') {
          checkBefore_and_after();
        }
        if (currentPatternValue[id] === 'large-card') {
        }
      }
    });
  }
};
