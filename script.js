// 🍔 Mobile navigation setup
function initNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const isOpened = hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isOpened ? "true" : "false");
        });

        // ❌ Close menu when a link is clicked
        document.querySelectorAll(".nav-link").forEach(link =>
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            })
        );
    }

    initScrollSpy();
}

/**
 * Automatically highlights the corresponding navbar link as the user scrolls.
 */
function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link:not(.cta-button)");

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    const href = link.getAttribute("href");
                    if (href === `#${currentId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavigation);
} else {
    initNavigation();
}

// --- Smooth scrolling helper ---
/**
 * Smoothly scrolls the viewport to the element specified by the selector.
 * @param {string} selector - The CSS selector of the element to scroll to (e.g., '#contact').
 */
function scrollToSection(selector) {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
