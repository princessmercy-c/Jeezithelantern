document.addEventListener("DOMContentLoaded", () => {
    // 1. Calculate how long the typing takes (3000ms = 3 seconds) + a small pause
    const animationDuration = 3500; 

    // 2. Wait, then add the class to slide the screen away
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        intro.classList.add('site-loaded');
    }, animationDuration);
});

// 3. Handle the Multiple Image Downloads
document.getElementById('multi-download-btn').addEventListener('click', function() {
    const selectedImages = document.querySelectorAll('.download-checkbox:checked');
    
    if (selectedImages.length === 0) {
        alert('Please select at least one picture to download!');
        return;
    }

    selectedImages.forEach(function(checkbox) {
        const imageUrl = checkbox.value;
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = imageUrl; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

