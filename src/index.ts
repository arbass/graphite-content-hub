import { func_colorsMagic } from '$utils/page-colors';
import { func_pageScroll_menuHide } from '$utils/page-scroll';
import { richCmsConstrucor_func } from '$utils/rich-cms-construcor';
import { richGridPattern_func } from '$utils/rich-grid-pattern';

window.Webflow ||= [];
window.Webflow.push(() => {
  richCmsConstrucor_func();
  richGridPattern_func();
  func_colorsMagic();
  func_pageScroll_menuHide();
});
