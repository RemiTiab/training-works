/* Setup General */
import { ready } from './helpers/document-ready';

/* Import Libraries */
//Particles.js
import './libraries/particles';
//Countup.js
import { launchCountUp } from './libraries/countUp';
/* Import Codepens */

/* Import Apis */
//Intersection-observer
import { launchObserver } from './apis/intersection-observer';

/* Import Others */

ready(function() {
  /* Setup General */

  /* Setup Libraries */
  //Countup.js
  if (document.querySelector('.page--countup-js') !== null) launchCountUp();

  /* Setup Codepens */

  /* Setup Apis */
  //Intersection-observer
  if (document.querySelector('.page--intersection-observer') !== null) launchObserver();

  /* Setup Others */
});
