// Responsive nav menu
document.getElementById('navToggle').onclick = function() {
  var links = document.getElementById('navLinks');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
  }
};

// Expand/collapse course details (accessible)
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const details = document.getElementById(this.getAttribute('aria-controls'));
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    details.hidden = expanded;
  });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // close mobile nav
      document.getElementById('navLinks').style.display = 'none';
    }
  });
});

// Email form: convertkit fallback (if using AJAX, else let ConvertKit handle it)
document.getElementById('subscribeForm')?.addEventListener('submit', function(e) {
  // Remove this handler if using ConvertKit default redirect
  // e.preventDefault();
  // ... handle AJAX here if you want
});
