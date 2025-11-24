// 🍔 Toggle mobile navigation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}


// ❌ Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// --- New Code for the 'Start Your Journey' button ---

/**
 * Smoothly scrolls the viewport to the element specified by the selector.
 * This function is called by the 'onclick' attribute on your HTML buttons.
 * @param {string} selector - The CSS selector of the element to scroll to (e.g., '#contact').
 */
function scrollToSection(selector) {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
        // Use the scrollIntoView method with smooth behavior for a better user experience
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
