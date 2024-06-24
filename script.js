document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar nav ul li a, #home .contact-button');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
