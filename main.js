document.addEventListener('DOMContentLoaded', () => {
    

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenuWrapper = document.getElementById('navMenuWrapper');

    if (mobileMenuBtn && navMenuWrapper) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenuWrapper.classList.toggle('active');
        });
    }

  
    const navLinks = document.querySelectorAll('.nav-links a, .nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn && navMenuWrapper) {
                mobileMenuBtn.classList.remove('active');
                navMenuWrapper.classList.remove('active');
            }
        });
    });


    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100; 

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }


    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);

   
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});