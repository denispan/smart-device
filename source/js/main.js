import {initModals, addScrollSmooth, initAdditionalAbout, initFooterSections, initPhoneInput} from './vendor';

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    initModals();
    addScrollSmooth();
    initAdditionalAbout();
    initFooterSections();
    initPhoneInput();
  });
});
