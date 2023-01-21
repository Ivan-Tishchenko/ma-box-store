(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contact-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    modal: document.querySelector('[data-contact-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();