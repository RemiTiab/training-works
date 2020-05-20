export const dragAndDropApi = (_) => {
  const containerOne = document.querySelector('.container__img-1');
  const containerTwo = document.querySelector('.container__img-2');
  let img = document.querySelector('.img');

  containerOne.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  });

  containerOne.addEventListener('dragover', function(ev) {
    ev.preventDefault();
  });

  containerTwo.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  });

  containerTwo.addEventListener('dragover', function(ev) {
    ev.preventDefault();
  });

  img.addEventListener('dragstart', function(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  });
};
