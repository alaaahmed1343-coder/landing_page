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

    

    
});