document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default jump behavior
            e.preventDefault();

            // Get the target section ID from the href (e.g., '#about')
            const targetId = this.getAttribute('href');
            
            // Find the target element
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the element's top position
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // -60 to account for the sticky header
                    behavior: 'smooth'
                });
            }
        });
    });
});