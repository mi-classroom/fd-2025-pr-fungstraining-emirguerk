import { slideshow } from './modules/slideshow.js';
import { initWorkResult } from './modules/workResult.js';
import { initWorks } from './modules/works.js';
import { MainHeader } from './modules/header.js';
import { MainFooter } from './modules/footer.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
  initWorks(); /* Alle Werke werden geladen. 
                  Auch wenn man sich nur ein Werk in Detail anschaut. 
                  Dies führt zu Fehlermeldungen. Auf den Beispielseiten
              */

  initWorkResult();

  // intit html components
  customElements.define('main-header', MainHeader);
  customElements.define('main-footer', MainFooter);
});