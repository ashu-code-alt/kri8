document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Vielen Dank! Ihre Nachricht wurde gesendet.');
            form.reset();
        });
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add('active');
        } else {
          backToTop.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBackToTop);
      document.addEventListener('scroll', toggleBackToTop);
    }

    // Card flipper functionality
    const flipTriggers = document.querySelectorAll('.flipper-btn');
    flipTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const flipCard = e.target.closest('.flip-card');
            if (flipCard) {
                flipCard.classList.toggle('is-flipped');
            }
        });
    });
});