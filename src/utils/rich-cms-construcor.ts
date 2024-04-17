export const richCmsConstrucor_func = () => {
  const richCmsConstrucorWrapper_el = document.querySelector('[rcms-section-wrapper]');
  if (richCmsConstrucorWrapper_el) {
    const document_body = document.querySelector('body');
    //
    const label_kopytok = document.createElement('a');
    label_kopytok.textContent = 'made by kopytok.xyz';
    label_kopytok.classList.add('label-kopytok');
    label_kopytok.href = 'https://kopytok.xyz';
    label_kopytok.setAttribute('target', '_blank');
    //
    const gif_phrase = document.createElement('h6');
    gif_phrase.classList.add('gif-phrase');
    gif_phrase.textContent = 'COPIED🎉';
    //
    const gif_wrapper = document.createElement('div');
    gif_wrapper.classList.add('gif-wrapper');
    //
    const cat_gif = document.createElement('img');
    cat_gif.classList.add('cat-gif');
    cat_gif.src =
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVxenYxMzJwbGFzMHU5eWszbDVpcGdjY2NtdTJ4cGg5eXhtbzdkZyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/Dg4TxjYikCpiGd7tYs/giphy.gif';
    document_body.appendChild(gif_wrapper);
    gif_wrapper.appendChild(cat_gif);
    gif_wrapper.appendChild(gif_phrase);
    gif_wrapper.appendChild(label_kopytok);

    const richCmsConstrucor_el = document.querySelectorAll('[rcms-section]');
    const wfArray = [];
    richCmsConstrucor_el.forEach((section, id) => {
      const elementToWrap = section;
      const wrapper = document.createElement('div');
      const cloneButton = document.createElement('button');
      cloneButton.classList.add('cms-rich-button', 'object-clone-btn');
      cloneButton.textContent = 'Copy this section';
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

    document.querySelectorAll('.object-clone-btn').forEach((item, id) => {
      item.addEventListener('click', (event) => {
        gif_wrapper.classList.add('cat-gif--copied');
        setTimeout(function () {
          gif_wrapper.classList.remove('cat-gif--copied');
        }, 4500);
        event.preventDefault();

        document.addEventListener(
          'copy',
          (event) => {
            const data = JSON.stringify(wfArray[id]);

            if (event.clipboardData) {
              event.clipboardData.setData('application/json', data);
            } else if (window.clipboardData) {
              window.clipboardData.setData('application/json', data);
            }
            event.preventDefault();
          },
          true
        );
        document.execCommand('copy');
      });
    });
    //
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = `
.cms-rich-button {
	display: inline;
	padding: 0.6rem 1.5rem;
	bottom: 8px;
	right: 8px;
	position: absolute;
	background: linear-gradient(270deg, #5190fa, #5190fa);
	color: white;
	font-weight: bold;
	letter-spacing: 0.6px;
	background-size: 400% 400%;
	animation: gradientAnimation 7s ease infinite;
	transition: all 0.3s ease;
	border: none;
	cursor: pointer;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.cms-rich-button:hover {
	transform: translateY(-1px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@keyframes gradientAnimation {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.rcms-wrapper {
	border: 3px solid #d6d6d6;
	margin: 100px 16px;
}

.gif-wrapper {
	transition: all 0.5s;
	display: block;
	position: fixed;
	object-fit: cover;
	bottom: -400px;
	left: -400px;
	width: 120px;
	height: 120px;
	border-radius: 100%;
	overflow: hidden;
}

.cat-gif--copied {
	bottom: 32px;
	left: 32px;
}

.cat-gif {
	display: block;
	position: absolute;
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.gif-phrase {
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 0.5px;
	color: white;
	text-shadow: black;
	position: absolute;
	bottom: 40px;
	left: 0px;
	right: 0px;
	text-align: center;
	display: block;
}

.label-kopytok {
	font-size: 12px;
	font-weight: bold;
	color: black;
	position: fixed;
	bottom: 16px;
	right: 32px;
	display: block;
	padding: 0.4rem 1.1rem;
	background-color: white;
	text-decoration: none;
	cursor: pointer;
	border: 3px solid #d6d6d6;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	transition: all 0.3s ease;
}

.label-kopytok:hover {
	transform: translateY(-1px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

`;
  }
};
