'use strict'

const actions = module.exports = {};

actions.toggleContactForm = () => {
  const modal = document.querySelector('.overlay');
  modal.classList.toggle('hidden');

  if (!modal.classList.contains('hidden')) {
    document.querySelector('#firstName').focus();
    window.location.hash = 'contact';
  } else {
    window.history.replaceState('', document.title, window.location.pathname + window.location.search);
  }
}
