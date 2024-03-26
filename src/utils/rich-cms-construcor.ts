export const richCmsConstrucor_func = () => {
  const richCmsConstrucor_el = document.querySelectorAll('[rcms-section]');
  if (richCmsConstrucor_el.length) {
    const wfArray = [];
    richCmsConstrucor_el.forEach((section, id) => {
      const elementToWrap = section;
      const wrapper = document.createElement('div');
      const cloneButton = document.createElement('button');
      cloneButton.classList.add('button', 'object-clone-btn');
      cloneButton.textContent = 'Clone this section';
      wrapper.appendChild(cloneButton);
      wrapper.classList.add('rcms-wrapper');
      elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
      wrapper.appendChild(elementToWrap);

      const sectionOuterHtml = section.outerHTML;
      const wfCurrent = [
        {
          _id: '',
          type: 'RichText',
          tag: 'div',
          classes: [],
          children: [''],
          data: { rich: true, tag: 'div' },
        },
        {
          _id: '',
          type: 'HtmlEmbed',
          tag: 'div',
          classes: [],
          children: [],
          v: '',
          data: {
            embed: {
              type: 'html',
              meta: {
                html: sectionOuterHtml,
                div: false,
                iframe: false,
                script: false,
              },
            },
            insideRTE: true,
          },
        },
      ];

      wfArray.push(wfCurrent);
    });

    console.log(wfArray);
  }
};
