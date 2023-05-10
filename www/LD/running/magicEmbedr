// Author: R.S. 
// 2023-05-10

// Skapa knappen
  var button = document.createElement('button');
  button.textContent = 'Lägg till det här på min hemsida!';
  button.style.position = 'fixed';
  button.style.top = '0';
  button.style.left = '0';
  button.style.zIndex = '9999';
  button.style.backgroundColor = '#007bff';
  button.style.color = '#fff';
  button.style.padding = '10px';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  document.body.appendChild(button);

  // Skapa modalen
  var modal = document.createElement('div');
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.zIndex = '1';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'auto';
  modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
  document.body.appendChild(modal);

  var modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fefefe';
  modalContent.style.margin = '15% auto';
  modalContent.style.padding = '20px';
  modalContent.style.border = '1px solid #888';
  modalContent.style.width = '80%';
  modal.appendChild(modalContent);

  var closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.style.color = '#aaa';
  closeButton.style.float = 'right';
  closeButton.style.fontSize = '28px';
  closeButton.style.fontWeight = 'bold';
  modalContent.appendChild(closeButton);

  var modalText = document.createElement('p');
  modalText.textContent = 'Kopiera följande kod och klistra in den på din hemsida:';
  modalContent.appendChild(modalText);

  var scriptCode = document.createElement('code');
  modalContent.appendChild(scriptCode);

  // Skapa CSS-kod för modalen och dess övergång
  var style = document.createElement('style');
  style.innerHTML = `
    .modal-enter {
      opacity: 0;
    }

    .modal-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-out;
    }

    .modal-exit {
      opacity: 1;
    }

    .modal-exit-active {
      opacity: 0;
      transition: opacity 300ms ease-out;
    }

    .modal {
      display: none;
    }

    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // När användaren klickar på knappen
  button.addEventListener('click', function() {
    // Visa modalen
    modal.style.display = 'block';

    // Generera ett unikt ID
    var uniqueId = Math.floor(Math.random() * 1000000);

    // Skapa script taggen med rätt src-attribut och ID-taggen
    var script = document.createElement('script');
    script.src = 'https://example.com/myscript.js?id=' + uniqueId;
script.setAttribute('id', 'ldappref-' + uniqueId);
// Lägg till script-taggen i modalen
scriptCode.textContent = '<script src="' + script.src + '"></script><ldappref-' + uniqueId + '></ldappref-' + uniqueId + '>';
});

// När användaren klickar på stängningsknappen
closeButton.addEventListener('click', function() {
// Dölj modalen
modal.style.display = 'none';
});
