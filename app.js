
const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const scrollBtn = document.querySelector('.scroll-btn');


navToggle.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
  });
});


scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add('show-scroll-btn');
  } else {
    scrollBtn.classList.remove('show-scroll-btn');
  }
});
