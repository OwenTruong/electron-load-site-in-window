const btn = document.querySelector('#linked_in_btn');
const moveBtn = document.querySelector('#move');

const wins = [];

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const linkedin = window.open(
    'https://www.linkedin.com',
    '_blank',
    'frame=true,nodeIntegration=no'
  );

  linkedin.addEventLister('load', (e) => {
    const button = document.createElement('button');
    button.textContent('Exit Popup');
    button.addEventListener('click', () => {
      linkedin.close();
    });
    linkedin.document.body.insertBefore(
      button,
      linkedin.document.body.firstChild
    );
  });

  linkedin.addEventListener('beforeunload', (e) => {
    wins.pop();
  });
  wins.push(linkedin);
});

moveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.moveTo(0, 0);
});

setInterval(() => {
  if (wins.length > 1)
    throw new Error('Something went wrong with windows tracking');
  else if (wins.length === 0) return;

  const popupWindow = wins[0];

  // TODO: Move main window relative to popup window
}, 5);
