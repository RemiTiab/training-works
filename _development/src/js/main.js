/* Setup General */
import { ready } from './helpers/document-ready';

/* Import Libraries */
// Particles.js
import './libraries/particles';
// Countup.js
import { launchCountUp } from './libraries/countUp';

/* Import Codepens */
// Dynamic Timer
import { launchDynamicTimer } from './codepens/dynamic-timer'

/* Import Apis */
// Intersection-observer
import { launchObserver } from './apis/intersection-observer';

/* Import Others */
// Some CSS Tricks
import { launchSomeCssTricks } from './others/some-css-tricks';

ready(function() {
  /* Setup General */

  /* Setup Libraries */
  // Countup.js
  if (document.querySelector('.page--countup-js') !== null) launchCountUp();

  /* Setup Codepens */
  // Dynamic Timer
  if (document.querySelector('.page--dynamic-timer') !== null) launchDynamicTimer();

  /* Setup Apis */
  // Intersection-observer
  if (document.querySelector('.page--intersection-observer') !== null)
    launchObserver();

  /* Setup Others */
  // Some CSS Tricks
  if (document.querySelector('.page--some-css-tricks') !== null)
    launchSomeCssTricks();
});
