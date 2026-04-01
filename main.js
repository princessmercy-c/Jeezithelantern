document.addEventListener("DOMContentLoaded", () => {
    // 1. Calculate how long the typing takes (3000ms = 3 seconds) + a small pause
    const animationDuration = 3500; 

    // 2. Wait, then add the class to slide the screen away
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        intro.classList.add('site-loaded');
    }, animationDuration);
});

