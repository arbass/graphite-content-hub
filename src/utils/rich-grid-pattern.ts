export const richGridPattern_func = () => {
  const richGridPattern_el = document.querySelector('[rich-grid-pattern]');
  if (richGridPattern_el) {
    const grid_fake = document.querySelector('.modules_grid.fake');
    //–––––––––––––––––––––––––
    const array_allTips = document.querySelectorAll('.modules_grid-facts');
    let iterator_tips = 0;
    //–––––––––––––––––––––––––
    let array_patterns = richGridPattern_el.getAttribute('rich-grid-pattern');
    array_patterns = array_patterns.split(',');
    let iterator_patterns = 0;
    //–––––––––––––––––––––––––
    function create_newModule(elementToAppend) {
      const newModule = document.createElement('div');
      newModule.classList.add('new-module');
      newModule.appendChild(elementToAppend);
      if (array_patterns[iterator_patterns] === 'big-card') {
        newModule.querySelector('img').classList.remove('hide');
      }
      grid_fake.appendChild(newModule);
    }
    //–––––––––––––––––––––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––
    //–––––––––––––––––––––––––
    function gridStart() {
      //append all elements to fake
      const array_modules_real = richGridPattern_el.querySelectorAll(
        '.modules_grid.real .cl-i_modules_grid-item'
      );
      array_modules_real.forEach((module, id) => {
        if (!module.hasAttribute('module-is-ready')) {
          const cloneable_module = module.cloneNode(true);
          create_newModule(cloneable_module);
          if (array_patterns[iterator_patterns] === 'big-tip') {
            if (iterator_tips < array_allTips.length) {
              iterator_tips = iterator_tips + 1;
            } else {
              iterator_tips = 0;
            }

            create_newModule(array_allTips[iterator_tips]);
          }
          if (array_patterns[iterator_patterns] === 'big-empty') {
            const space = document.createElement('div');
            space.classList.add('space');
            create_newModule(space);
          }
          if (iterator_patterns < array_patterns.length) {
            iterator_patterns = iterator_patterns + 1;
          } else {
            iterator_patterns = 0;
          }
        }
        module.setAttribute('module-is-ready', '');
      });
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
