import shave from 'shave';
import { outerHeight } from '../../helpers/outer-height';

//Get height element with margin -> Use outerHeight(el)
//Get height element without margin -> use el.offsetHeight

export const LaunchRunShave = _ => {
  //Button for run trimContent()
  const buttons = document.querySelectorAll('.button');
  const contents = document.querySelectorAll('.content');
  const allHeightContents = [];

  const getHeight = function() {
    for (let i = 0; i < contents.length; i++) {
      const content = contents[i];

      allHeightContents.push(outerHeight(content));
    }
  };

  getHeight();

  for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    button.addEventListener('click', function() {
      const content = contents[i];

      //Toggle class for trimmed element
      content.classList.toggle('is-trimmed');

      //Toggle shave()
      if (content.classList.contains('is-trimmed')) {
        shave(content, allHeightContents[i] / 2);
      } else {
        //Initial Value for maxHeight shave(el, maxHeight)
        shave(content, allHeightContents[i]);
      }
    });
  }
};

export const launchAutoShave = function() {
  const autoShave = {
    shave(target) {
      /* Block */
      const height_teaser = outerHeight(target);

      /* Content */
      const height_title =
        target.querySelector('.auto-block__title') !== null
          ? outerHeight(target.querySelector('.auto-block__title'))
          : 0;
      const height_btn =
        target.querySelector('.auto-block__button') !== null
          ? outerHeight(target.querySelector('.auto-block__button'))
          : 0;

      const remaining_height = height_teaser - height_title - height_btn - 90;

      /* To truncate */
      const text = target.querySelector('.auto-block__content');

      text.classList.add('is-trimmed');

      shave(text, remaining_height);
    },
    init(context = document) {
      const blocks = context.querySelectorAll('.auto-block');

      for (let $i = 0; $i < blocks.length; $i++) {
        this.shave(blocks[$i]);
      }
    },
    newContentLoaded(context) {
      this.init(context);
    },
    onResize() {
      window.addEventListener('resize', () => {
        waitForFinalEvent(
          () => {
            this.init();
          },
          500,
          'Shave.js - Test Shave Text Content'
        );
      });
    }
  };

  autoShave.init();
  autoShave.onResize();
};

export const launchMultiShave = _ => {
  const startTrimAll = document.querySelector('.block__button--all');
  const contents = document.querySelectorAll('.content');

  const trimAll = function() {
    const allHeightContents = [];

    for (let i = 0; i < contents.length; i++) {
      const content = contents[i];
      var heightContent = outerHeight(content);

      allHeightContents.push(heightContent);

      content.classList.toggle('is-trimmed');

      if (content.classList.contains('is-trimmed')) {
        shave(content, allHeightContents[i] / 2);
      } else {
        //Initial Value for maxHeight shave(el, maxHeight)
        shave(content, allHeightContents[i] * 2);
      }
    }
  };

  startTrimAll.addEventListener('click', trimAll);
};

