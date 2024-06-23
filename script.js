document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('#home .contact-button');
    
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
