setTimeout(popupActivation, 3000);

function popupActivation() {
  const popupPage = document.querySelector('.popup-page');
  const closedForm = document.querySelector('.closed-form');
  const sendButton = document.querySelector('.popup-btn');
  const form = document.forms.popup;

  popupPage.classList.remove('_hidden');

  closedForm.addEventListener('click', () => {
    popupPage.classList.add('_hidden');
  });

  sendButton.addEventListener('click', (e) => {
    //e.preventDefault();

    let formData = new FormData(form);
    localStorage.setItem('feedback', formData);
    form.reset();
    popupPage.classList.add('_hidden');
  });
}
