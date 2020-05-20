export const getHumanSize = (n) => {
  n = parseInt(n); // Check if parameter is an integer

  if (n < 1024) {
    return n + ' o';
  } else if (n < 1024 * 1024) {
    return (n / 1024).toFixed(1) + ' ko';
  } else if (n < 1024 * 1024 * 1024) {
    return (n / 1024 / 1024).toFixed(1) + ' Mo';
  } else {
    return (n / 1024 / 1024 / 1024).toFixed(1) + ' Go';
  }
};
