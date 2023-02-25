export function navigatonOpenClose() {
  const nav = document.querySelector('.navigation');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    nav.classList.toggle('navigation_open');
  });
  document.addEventListener('click', (ev) => {
    if (ev.target !== burger) {
      nav.classList.remove('navigation_open');
    }
  });
}
navigatonOpenClose();
