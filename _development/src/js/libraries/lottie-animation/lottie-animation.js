import './bodymovin';
export const launchLottieAnimation = _ => {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-svg'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/lottie-animation/data.json',
  });

  //Set Speed Animation
  //var animation = bodymovin.setSpeed(1);
};
