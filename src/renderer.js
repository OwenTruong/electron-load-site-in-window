const btn = document.querySelector('#linked_in_btn');
const btn2 = document.querySelector('#delete_linkedin_btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.electron.createEmbed('https://www.linkedin.com').then((result) => {
    console.log('muhahaha', result);
  });
});

btn2.addEventListener('click', (e) => {
  e.preventDefault();
  window.electron.deleteEmbed();
});
