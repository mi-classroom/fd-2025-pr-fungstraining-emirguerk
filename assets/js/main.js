import { slideshow } from './modules/slideshow.js';
import { initWorks } from './modules/works.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
  initWorks();
});