document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }
    });
});
