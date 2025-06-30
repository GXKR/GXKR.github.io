// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', ()=> {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
