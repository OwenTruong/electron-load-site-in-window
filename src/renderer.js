const btn = document.querySelector('#linked_in_btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const linkedin = window.open(
    'https://www.linkedin.com',
    '_blank',
    'frame=true,nodeIntegration=no'
  );
});
