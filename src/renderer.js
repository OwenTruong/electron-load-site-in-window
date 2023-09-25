const btn = document.querySelector('#linked_in_btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://www.linkedin.com', '_blank', 'nodeIntegration=no');
});
