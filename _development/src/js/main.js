/* Setup General */
import { ready } from './helpers/document-ready';

/* Import Libraries */
// Particles.js
import './libraries/particles/particles';
// Countup.js
import { launchCountUp } from './libraries/countup/countup';
// Lottie animation
import { launchLottieAnimation } from './libraries/lottie-animation/lottie-animation';
// ScrollMagic.js
import { launchScrollMagic } from './libraries/scrollmagic/scrollmagic';
// Shave.js
import {
  LaunchRunShave,
  launchAutoShave,
  launchMultiShave,
} from './libraries/shave/shave';
// Tarteaucitron.js - Cookies manager
import { launchTarteaucitron } from './libraries/tarteaucitron/tarteaucitron';
// Hamburgers.js
import { launchHamburgers } from './libraries/hamburgers/hamburgers';
// Glide.js
import { launchGlide } from './libraries/glide/glide';
// Slick.js
import { launchSlick } from './libraries/slick/slick';
// Stickyfill
import { launchStickyfill } from './libraries/stickyfill/stickyfill';

/* Import Codepens */
// Dynamic Timer
import { launchDynamicTimer } from './codepens/dynamic-timer';
// Cross Color Text Reveal
import { launchCrossColorTextReveal } from './codepens/cross-color-text-reveal';
// Responsive Blog Card Slider
import { launchResponsiveBlogCardSlider } from './codepens/responsive-blog-card-slider';
// Responsive News Card Slider
import { launchResponsiveNewsCardSlider } from './codepens/responsive-news-card-slider';

/* Import Apis */
// Intersection-observer API
import { launchObserver } from './apis/intersection-observer';
// Drag and Drop API
import { dragAndDropApi } from './apis/drag-and-drop-api';

/* Import Others */
// Some CSS Tricks
import { launchSomeCssTricks } from './others/some-css-tricks';
// Header Background Scroll Effect
import { launchHeaderBackgroundScrollEffect } from './others/header-background-scroll-effect';
// Drag And Drop Area
import { dragAndDropArea } from './others/drag-and-drop-area';

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
  // Tarteaucitron.js - Cookies manager
  if (document.querySelector('.page--tarteaucitron-js') !== null)
    launchTarteaucitron();
  // Hamburgers.js
  if (document.querySelector('.page--hamburgers-js') !== null)
    launchHamburgers();
  // Glide.js
  if (document.querySelector('.page--glide-js') !== null) launchGlide();
  // Slick.js
  if (document.querySelector('.page--slick-js') !== null) launchSlick();
  // Stickyfill
  if (document.querySelector('.page--stickyfill') !== null) launchStickyfill();

  /* Setup Codepens */
  // Dynamic Timer
  if (document.querySelector('.page--dynamic-timer') !== null)
    launchDynamicTimer();
  // Cross Color Text Reveal
  if (document.querySelector('.page--cross-color-text-reveal') !== null)
    launchCrossColorTextReveal();
  // Responsive Blog Card Slider
  if (document.querySelector('.page--responsive-blog-card-slider') !== null)
    launchResponsiveBlogCardSlider();
  // Responsive News Card Slider
  if (document.querySelector('.page--responsive-news-card-slider') !== null)
    launchResponsiveNewsCardSlider();

  /* Setup Apis */
  // Intersection-observer API
  if (document.querySelector('.page--intersection-observer') !== null)
    launchObserver();
  // Drag and Drop API
  if (document.querySelector('.page--drag-and-drop-api') !== null)
    dragAndDropApi();

  /* Setup Others */
  // Some CSS Tricks
  if (document.querySelector('.page--some-css-tricks') !== null)
    launchSomeCssTricks();
  // Header Background Scroll Effect
  if (document.querySelector('.page--header-background-scroll-effect') !== null)
    launchHeaderBackgroundScrollEffect();
  // Drag And Drop Area
  if (document.querySelector('.page--drag-and-drop-area') !== null)
    dragAndDropArea();
});
