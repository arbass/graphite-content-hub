import { richCmsConstrucor_func } from '$utils/rich-cms-construcor';
import { richGridPattern_func } from '$utils/rich-grid-pattern';

window.Webflow ||= [];
window.Webflow.push(() => {
  richCmsConstrucor_func();
  richGridPattern_func();
});
