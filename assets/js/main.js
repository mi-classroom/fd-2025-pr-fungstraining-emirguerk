import { slideshow } from './modules/slideshow.js';
import { initWorkResult } from './modules/workResult.js';
import { initWorks } from './modules/works.js';

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
});