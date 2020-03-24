export const launchDynamicTimer = _ => {
  const timerEl = document.querySelector('.timer');
  const blocksEl = timerEl.querySelectorAll('.block');
  const zero = [0, 1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14];
  const one = [1, 4, 7, 10, 13];
  const two = [0, 1, 2, 5, 6, 7, 8, 9, 12, 13, 14];
  const three = [0, 1, 2, 5, 6, 7, 8, 11, 12, 13, 14];
  const four = [0, 2, 3, 5, 6, 7, 8, 11, 14];
  const five = [0, 1, 2, 3, 6, 7, 8, 11, 12, 13, 14];
  const six = [0, 3, 6, 7, 8, 9, 11, 12, 13, 14];
  const seven = [0, 1, 2, 5, 8, 11, 14];
  const eight = [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14];
  const nine = [0, 1, 2, 3, 5, 6, 7, 8, 11, 14];
  let s = 0;

  const rotate = el => {
    const rotation = el.dataset.rotate;
    let deg = rotation;

    if (s === 0) {
      deg = -90;
    } else {
      deg = deg - 90;
    }
    el.style.transform = `translateZ(-100px) rotateX(${deg}deg)`;
    el.dataset.rotate = deg;
  };

  const getBlocks = (number, prevNum) => {
    if (prevNum) {
      const dontRotate = prevNum.filter(val => number.includes(val));
      const doRotatePrev = prevNum.filter(val => !number.includes(val));
      const doRotateCurrent = number.filter(val => !dontRotate.includes(val));

      doRotateCurrent.forEach(block => {
        rotate(blocksEl[block]);
      });
      doRotatePrev.forEach(block => {
        rotate(blocksEl[block]);
      });
    } else {
      number.forEach(block => {
        rotate(blocksEl[block]);
      });
    }
  };

  const timer = () => {
    window.setInterval(() => {
      if (s === 1) {
        getBlocks(one, zero);
      }
      if (s === 2) {
        getBlocks(two, one);
      }
      if (s === 3) {
        getBlocks(three, two);
      }
      if (s === 4) {
        getBlocks(four, three);
      }
      if (s === 5) {
        getBlocks(five, four);
      }
      if (s === 6) {
        getBlocks(six, five);
      }
      if (s === 7) {
        getBlocks(seven, six);
      }
      if (s === 8) {
        getBlocks(eight, seven);
      }
      if (s === 9) {
        getBlocks(nine, eight);
      }
      if (s === 10) {
        getBlocks(zero, nine);
        s = 0;
      }

      s += 1;
    }, 1000);
  };

  timer();
};
