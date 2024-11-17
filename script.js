document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section');
  
  // Throttling the scroll event for better performance
  let isScrolling = false;
  
  window.addEventListener('scroll', () => {
    if (isScrolling) return;
    isScrolling = true;
    
    // Let the scroll event finish and then reset
    setTimeout(() => {
      isScrolling = false;
    }, 100);  // Adjust 100ms for throttle timing, can be tweaked

    let currentSection = "";

    // Loop through sections to find the currently visible one
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Absolute position relative to the document
      const sectionBottom = sectionTop + section.offsetHeight;

      // Adjust for fixed header (if needed, change the 70 to your header height)
      if (pageYOffset >= sectionTop - 70 && pageYOffset < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update navigation links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll with offset when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');

      // Get the target section
      const targetId = link.getAttribute('href').substring(1); // Remove '#' from href
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Scroll to the target section with an offset (to account for fixed navbar)
        window.scrollTo({
          top: targetElement.offsetTop - 70,  // Adjust based on your navbar height
          behavior: 'smooth' // Smooth scroll
        });
      }
    });
  });
});
