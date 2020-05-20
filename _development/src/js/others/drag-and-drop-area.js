import { getHumanSize } from '../helpers/get-human-size';

export const dragAndDropArea = (_) => {
  /* Event Open input file */
  let dropArea = document.querySelector('.drop__area');

  dropArea.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.getElementById('file').click();
  });

  /* Event Drag and Drop */
  dropArea.addEventListener('dragover', function(evt) {
    evt.preventDefault(); // Autorise drop with JS
  });

  dropArea.addEventListener('dragenter', function(evt) {
    this.classList.add('onDropArea'); // Customize Drop Area
  });

  dropArea.addEventListener('dragleave', function(evt) {
    this.classList.remove('onDropArea'); // Remove Custom Drop Area
  });

  dropArea.addEventListener('drop', function(evt) {
    evt.preventDefault();
    // Transfer Files list in the Drag and Drop input
    document.querySelector('.file').files = evt.dataTransfer.files;
    this.classList.remove('onDropArea'); // Remove Custom Drop Area
  });

  /* Add list of attached files */
  document.getElementById('file').addEventListener('change', function(evt) {
    const containerAttachedFiles = document.querySelector(
      '.container__attached-files'
    ); // Container Attached Files
    //containerAttachedFiles.innerHTML = ''; // Remove all for empty container

    for (let i = 0; i < this.files['length']; i++) {
      let f = this.files[i];
      console.log(f);
      let div = document.createElement('div');
      div.classList.add('attached-file');
      let span = document.createElement('span');
      span.innerHTML = f.name + ' (' + getHumanSize(f.size) + ')';
      let vignette = document.createElement('img');
      vignette.src = window.URL.createObjectURL(f);

      /* Attach elements HTML to DOM */
      div.appendChild(vignette);
      div.appendChild(span);
      containerAttachedFiles.appendChild(div);
    }
  });
};
