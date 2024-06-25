document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var aboutSection = document.getElementById('about'); // Get the About Me section

    var aboutSectionOffset = aboutSection.offsetTop; // Offset position of the About Me section

    function toggleNavbar() {
        if (window.scrollY >= aboutSectionOffset) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }
    }

    // Initial check on page load
    toggleNavbar();

    // Listen for scroll events
    window.addEventListener('scroll', toggleNavbar);
});
