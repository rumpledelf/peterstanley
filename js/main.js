/* Main JavaScript for Peter Stanley Site */
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const brandNav = document.querySelector('.site-brand-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Scroll listener for translucent overlay vs solid fixed sticky nav
  window.addEventListener('scroll', () => {
    if (brandNav) {
      if (window.scrollY > 220) {
        brandNav.classList.add('is-sticky');
      } else {
        brandNav.classList.remove('is-sticky');
      }
    }
  });
});
