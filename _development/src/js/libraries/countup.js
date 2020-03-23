import { CountUp } from 'countup.js';

export const launchCountUp = _ => {
  var countUp = new CountUp('number', 1000000);
  countUp.start();
};
