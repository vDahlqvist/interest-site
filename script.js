document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that should fade in
    const fadeElements = document.querySelectorAll('#content20, #content30, #content40');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the fade-in class
                entry.target.classList.add('fade-in-visible');
            } else {
                // Remove the fade-in class when element is not visible
                entry.target.classList.remove('fade-in-visible');
            }
        });
    }, {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element enters the viewport
    });
    
    // Start observing each fade element
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});