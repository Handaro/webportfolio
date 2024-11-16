document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let currentSection = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Subtract any offset or margin (adjust 60 as needed)
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
