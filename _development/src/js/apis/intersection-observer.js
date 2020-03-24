import { setIntersectionObserver } from '../helpers/intersection-observer';

export const launchObserver = () => {
  if (document.querySelector('.main-content__section') !== null) {
    setIntersectionObserver('.main-content__section', element => {
      element.classList.add('is-coming-left');
    });
  }
};
