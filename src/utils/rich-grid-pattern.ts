export const richGridPattern_func = () => {
  const richGridPattern_el = document.querySelector('[rich-grid-pattern]');
  if (richGridPattern_el) {
    const allTipsElements = document.querySelectorAll('.modules_grid-facts');
    let tipIterator = 0;
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
            if (
              currentPatternValue[id - 1] != 'big-tip' &&
              currentPatternValue[id - 1] != 'big-empty' &&
              currentPatternValue[id - 1] != 'big-card' &&
              currentPatternValue[id + 1] != 'big-tip' &&
              currentPatternValue[id + 1] != 'big-empty' &&
              currentPatternValue[id + 1] != 'big-card'
            ) {
              const elToWrap = [
                card.previousElementSibling,
                card.previousElementSibling.previousElementSibling,
              ];
              wrapTwinCards(elToWrap);
            }
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
            if (
              currentPatternValue[id - 1] != 'big-tip' &&
              currentPatternValue[id - 1] != 'big-empty' &&
              currentPatternValue[id - 1] != 'big-card' &&
              currentPatternValue[id + 1] != 'big-tip' &&
              currentPatternValue[id + 1] != 'big-empty' &&
              currentPatternValue[id + 1] != 'big-card'
            ) {
              const elToWrap = [
                card.nextElementSibling,
                card.nextElementSibling.nextElementSibling,
              ];
              wrapTwinCards(elToWrap);
            }
          }
        }

        if (currentPatternValue[id] === 'big-empty') {
          checkBefore_and_after();
          const target = card;
          const wrapper = document.createElement('div');
          wrapper.classList.add('space', 'modules_grid-item');
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
        }
        if (currentPatternValue[id] === 'big-tip') {
          checkBefore_and_after();

          card.parentElement.insertBefore(allTipsElements[tipIterator], card);
          if (tipIterator < allTipsElements.length) {
            tipIterator = tipIterator + 1;
          } else {
            tipIterator = 0;
          }
        }
        if (currentPatternValue[id] === 'big-card') {
          checkBefore_and_after();
          const cardImage = card.querySelector('img');
          cardImage.classList.remove('hide');
        }
      }
    });
  }
};
