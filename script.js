/* ---------------------------------------
   STICKY HEADER SHADOW ON SCROLL
---------------------------------------- */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('header-shadow');
  } else {
    header.classList.remove('header-shadow');
  }
});


/* ---------------------------------------
   REVEAL ANIMATION ON SCROLL
---------------------------------------- */
const revealElements = document.querySelectorAll('.section, .card, .project-card, .about-inner, .contact-box');

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.classList.add('reveal-active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* ---------------------------------------
   MOBILE NAV (future-proof)
---------------------------------------- */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
}
