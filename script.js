document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Animate skill progress bars
    const progressBars = document.querySelectorAll('.sidebar .progress');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 5s';
            bar.style.width = targetWidth;
        }, 100);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
        form.reset();
    });
});
