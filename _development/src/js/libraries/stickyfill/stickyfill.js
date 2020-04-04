import * as Stickyfill from 'stickyfilljs/dist/stickyfill.min.js';

export const launchStickyfill = (_) => {
  var stickyBlock = document.querySelector('.sticky');
  Stickyfill.addOne(stickyBlock);
};
