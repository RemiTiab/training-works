/* Setup General */
import { ready } from './helpers/document-ready';

/* Import Libraries */
// Particles.js
import './libraries/particles';
// Countup.js
import { launchCountUp } from './libraries/countUp';
// Lottie animation
import { launchLottieAnimation } from './libraries/lottie-animation/lottie-animation';
// ScrollMagic.js
import { launchScrollMagic } from './libraries/scrollmagic';
// Shave.js
import {
  LaunchRunShave,
  launchAutoShave,
  launchMultiShave
} from './libraries/shave';

/* Import Codepens */
// Dynamic Timer
import { launchDynamicTimer } from './codepens/dynamic-timer';
// Cross Color Text Reveal
import { launchCrossColorTextReveal } from './codepens/cross-color-text-reveal';

/* Import Apis */
// Intersection-observer
import { launchObserver } from './apis/intersection-observer';

/* Import Others */
// Some CSS Tricks
import { launchSomeCssTricks } from './others/some-css-tricks';
// Header Background Scroll Effect
import { launchHeaderBackgroundScrollEffect } from './others/header-background-scroll-effect';

ready(function() {
  /* Setup General */

  /* Setup Libraries */
  // Countup.js
  if (document.querySelector('.page--countup-js') !== null) launchCountUp();
  // Lotie animation
  if (document.querySelector('.page--lottie-animation') !== null)
    launchLottieAnimation();
  // ScrollMagic.js
  if (document.querySelector('.page--scrollmagic-js') !== null)
    launchScrollMagic();
  // Shave.js
  if (document.querySelector('.page--shave-js') !== null)
    LaunchRunShave(), launchAutoShave(), launchMultiShave();

  /* Setup Codepens */
  // Dynamic Timer
  if (document.querySelector('.page--dynamic-timer') !== null)
    launchDynamicTimer();
  // Cross Color Text Reveal
  if (document.querySelector('.page--cross-color-text-reveal') !== null)
    launchCrossColorTextReveal();

  /* Setup Apis */
  // Intersection-observer
  if (document.querySelector('.page--intersection-observer') !== null)
    launchObserver();

  /* Setup Others */
  // Some CSS Tricks
  if (document.querySelector('.page--some-css-tricks') !== null)
    launchSomeCssTricks();
  // Header Background Scroll Effect
  if (document.querySelector('.page--header-background-scroll-effect') !== null)
    launchHeaderBackgroundScrollEffect();
});
