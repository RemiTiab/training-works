import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

export const launchScrollMagic = _ => {
  // init controller
  const controller = new ScrollMagic.Controller();

  //for multiple setTween in ONE scene
  var timeline = new TimelineMax();
  var tween1 = TweenMax.to('.background__two', 1, {
    scale: 1.5
  });
  var tween2 = TweenMax.to('.background__one', 1, {
    opacity: 0
  });

  // build scene
  const scene1 = new ScrollMagic.Scene({
    triggerElement: '.parallax__block',
    duration: 400,
    offset: 350
  });
  timeline.add(tween1).add(tween2);
  scene1.setTween(timeline);
  scene1.addTo(controller);

  // Scene for Right Imgs
  var imgRight = document.querySelectorAll(
    '.parallax__block-content-img--right'
  );

  for (var i = 0; i < imgRight.length; i++) {
    // define movement of panels
    var imgRightAnimation = new TimelineMax().fromTo(
      imgRight[i],
      1,
      { x: '110%', autoAlpha: 0 },
      {
        x: '0%',
        ease: Linear.easeNone,
        autoAlpha: 1
      }
    ); // in from right

    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: imgRight[i], // y value not modified, so we can use element as trigger as well
      duration: 200,
      offset: -100
    })
      .setTween(imgRightAnimation)
      .addTo(controller);
  }

  // Scene for Left Imgs
  var imgLeft = document.querySelectorAll('.parallax__block-content-img--left');

  for (var i = 0; i < imgLeft.length; i++) {
    //build Tween
    // define movement of panels
    var imgLeftAnimation = new TimelineMax().fromTo(
      imgLeft[i],
      1,
      { x: '-110%', autoAlpha: 0 },
      {
        x: '0%',
        ease: Linear.easeNone,
        autoAlpha: 1
      }
    ); // in from Left

    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: imgLeft[i], // y value not modified, so we can use element as trigger as well
      duration: 200,
      offset: -100
    })
      .setTween(imgLeftAnimation)
      .addTo(controller);
  }

  // Scene for Left Text
  var textLeft = document.querySelectorAll(
    '.parallax__block-content-text--left'
  );

  for (var i = 0; i < textLeft.length; i++) {
    //build Tween
    // define movement of panels
    var textLeftAnimation = new TimelineMax().fromTo(
      textLeft[i],
      1,
      { x: '-110%', autoAlpha: 0 },
      {
        x: '0%',
        ease: Linear.easeNone,
        autoAlpha: 1
      }
    ); // in from Left

    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: textLeft[i], // y value not modified, so we can use element as trigger as well
      duration: 200,
      offset: -250
    })
      .setTween(textLeftAnimation)
      .addTo(controller);
  }

  // Scene for Right Text
  var textRight = document.querySelectorAll(
    '.parallax__block-content-text--right'
  );

  for (var i = 0; i < textRight.length; i++) {
    //build Tween
    // define movement of panels
    var textRightAnimation = new TimelineMax().fromTo(
      textRight[i],
      1,
      { x: '110%', autoAlpha: 0 },
      {
        x: '0%',
        ease: Linear.easeNone,
        autoAlpha: 1
      }
    ); // in from Right

    // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: textRight[i], // y value not modified, so we can use element as trigger as well
      duration: 200,
      offset: -250
    })
      .setTween(textRightAnimation)
      .addTo(controller);
  }
};
