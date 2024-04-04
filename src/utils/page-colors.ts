export const func_colorsMagic = () => {
  const el_checker_colorsMagic = document.querySelector('[page-colors-trigger]');
  if (el_checker_colorsMagic) {
    const pageBody = document.querySelector('body');
    const array_classes_standart = el_checker_colorsMagic
      .getAttribute('page-colors-classes-standart')
      .split(',');
    const array_classes_oposite = el_checker_colorsMagic
      .getAttribute('page-colors-classes-oposite')
      .split(',');

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const checkElementVisibility = () => {
      if (isElementInViewport(el_checker_colorsMagic)) {
        array_classes_standart.forEach((className) => {
          pageBody.classList.add(className);
        });

        array_classes_oposite.forEach((className) => {
          pageBody.classList.remove(className);
        });
      } else {
        array_classes_standart.forEach((className) => {
          pageBody.classList.remove(className);
        });

        array_classes_oposite.forEach((className) => {
          pageBody.classList.add(className);
        });
      }
    };

    // Проверяем видимость элемента при загрузке страницы
    document.addEventListener('DOMContentLoaded', checkElementVisibility);

    // Проверяем видимость элемента при скроллинге
    window.addEventListener('scroll', checkElementVisibility);

    // Проверяем видимость элемента при изменении размера окна браузера
    window.addEventListener('resize', checkElementVisibility);

    checkElementVisibility();
  }
};
