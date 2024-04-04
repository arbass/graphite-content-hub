export const func_pageScroll_menuHide = () => {
  const el_pageScroll_menuHide = document.querySelector('.section_nav.is-menu');
  if (el_pageScroll_menuHide) {
    let lastScrollTop = 0;

    window.addEventListener(
      'scroll',
      function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
          el_pageScroll_menuHide.classList.add('is-hidden');
        } else {
          el_pageScroll_menuHide.classList.remove('is-hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Не позволяем ему быть меньше 0
      },
      false
    );
  }
};
