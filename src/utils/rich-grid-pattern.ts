export const richGridPattern_func = () => {
  const richGridPattern_el = document.querySelector('[rich-grid-pattern]');
  if (richGridPattern_el) {
    const grid_fake = document.querySelector('.modules_grid.fake');

    const array_allTips = document.querySelectorAll('.modules_grid-facts');
    let iterator_tips = 0;

    let array_patterns = richGridPattern_el.getAttribute('rich-grid-pattern');
    array_patterns = array_patterns.split(',');
    let iterator_patterns = 0;

    function create_newModule(elementToAppend) {
      const newModule = document.createElement('div');
      newModule.classList.add('new-module');
      if (array_patterns[iterator_patterns] === 'large-double-card') {
        newModule.classList.add('looking-for-a-twin');
      }
      newModule.appendChild(elementToAppend);
      grid_fake.appendChild(newModule);
    }

    function create_newCard(element) {
      if (array_patterns[iterator_patterns] === 'large-double-card') {
        create_newModule(element);
      }
      if (array_patterns[iterator_patterns] === 'large-card') {
        create_newModule(element);
      }
      if (array_patterns[iterator_patterns] === 'big-card') {
        element.querySelector('img').classList.remove('hide');
        create_newModule(element);
      }
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    function gridStart() {
      while (document.querySelectorAll('.need-to-modified').length) {
        twinWrapping();
        if (iterator_patterns < array_patterns.length) {
          if (
            array_patterns[iterator_patterns] === 'big-tip' ||
            array_patterns[iterator_patterns] === 'big-empty'
          ) {
            if (array_patterns[iterator_patterns] === 'big-empty') {
              const space = document.createElement('div');
              space.classList.add('space');
              create_newModule(space);
            }
            if (array_patterns[iterator_patterns] === 'big-tip') {
              if (iterator_tips < array_allTips.length) {
                iterator_tips = iterator_tips + 1;
              } else {
                iterator_tips = 0;
              }
              create_newModule(array_allTips[iterator_tips]);
            }
          } else {
            const firstElement = document.querySelectorAll('.need-to-modified')[0];

            firstElement.classList.remove('need-to-modified');
            const clonableEl = firstElement.cloneNode(true);
            create_newCard(clonableEl);
          }
          //
          iterator_patterns = iterator_patterns + 1;
        } else {
          iterator_patterns = 0;
          //

          if (
            array_patterns[iterator_patterns] === 'big-tip' ||
            array_patterns[iterator_patterns] === 'big-empty'
          ) {
            if (array_patterns[iterator_patterns] === 'big-empty') {
              const space = document.createElement('div');
              space.classList.add('space');
              create_newModule(space);
            }
            if (array_patterns[iterator_patterns] === 'big-tip') {
              if (iterator_tips < array_allTips.length) {
                iterator_tips = iterator_tips + 1;
              } else {
                iterator_tips = 0;
              }
              create_newModule(array_allTips[iterator_tips]);
            }
          } else {
            const firstElement = document.querySelectorAll('.need-to-modified')[0];

            firstElement.classList.remove('need-to-modified');

            const clonableEl = firstElement.cloneNode(true);
            create_newCard(clonableEl);
          }
        }
      }
      function twinWrapping() {
        const allTwinWaters = document.querySelectorAll('.looking-for-a-twin');

        if (allTwinWaters.length >= 2) {
          if (allTwinWaters[0].nextElementSibling.classList.contains('looking-for-a-twin')) {
            const elementsToAppend = [allTwinWaters[0], allTwinWaters[0].nextElementSibling];
            const twinWrapper = document.createElement('div');
            twinWrapper.classList.add('twin-wrapper');
            const parentElement = allTwinWaters[0].parentNode;
            parentElement.insertBefore(twinWrapper, allTwinWaters[0]);
            elementsToAppend.forEach((element) => {
              element.classList.remove('looking-for-a-twin');
              twinWrapper.appendChild(element);
            });
          }
        }
      }
      twinWrapping();
    }
    //–––––––––––––––––––––––––
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsload',
      (listInstances) => {
        const [listInstance] = listInstances;
        listInstance.on('renderitems', (renderedItems) => {
          console.log('renderedItems');
          gridStart();
        });
      },
    ]);
    //–––––––––––––––––––––––––

    gridStart();
  }
};
