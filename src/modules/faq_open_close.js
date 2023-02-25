export function faqOpenClose() {
  const faq = document.querySelector('.faq');
  const questions = document.querySelector('.questions');
  questions.addEventListener('click', () => {
    faq.classList.toggle('faq_open');
  });
  document.addEventListener('click', (ev) => {
    if (ev.target !== questions) {
      faq.classList.remove('faq_open');
    }
  });
}
faqOpenClose();
