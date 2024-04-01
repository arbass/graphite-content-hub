export const richGridPattern_func = () => {
  const richGridPattern_el = document.querySelector('[rich-grid-pattern]');
  if (richGridPattern_el) {
    const grid_fake = document.querySelector('.modules_grid.fake');
    //–––––––––––––––––––––––––
    const array_allTips = document.querySelectorAll('.modules_grid-facts');
    const iterator_tips = 0;
    //–––––––––––––––––––––––––
    let array_patterns = richGridPattern_el.getAttribute('rich-grid-pattern');
    array_patterns = array_patterns.split(',');
    let iterator_patterns = 0;
    //–––––––––––––––––––––––––
    function create_newModule(elementToAppend) {
      const newModule = document.createElement('div');
      newModule.classList.add('new-module');
      newModule.appendChild(elementToAppend);
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
            const testEl = document.createElement('h2');
            testEl.textContent = 'TIPS HERE';
            create_newModule(testEl);
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
