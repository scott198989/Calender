/**
 * Main JavaScript File
 * Handles common functionality across all pages
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    setActiveNavLink();
});

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');

            // Update aria-expanded attribute for accessibility
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu on window resize if it's open
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just '#'
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * Show alert message
 * @param {string} elementId - ID of the alert element
 * @param {string} message - Optional message to display
 * @param {number} duration - Duration in milliseconds (0 = don't auto-hide)
 */
function showAlert(elementId, message = null, duration = 5000) {
    const alertElement = document.getElementById(elementId);

    if (!alertElement) return;

    if (message) {
        const messageElement = alertElement.querySelector('#errorMessage') ||
                              alertElement.querySelector('span');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }

    alertElement.classList.add('show');

    if (duration > 0) {
        setTimeout(() => {
            hideAlert(elementId);
        }, duration);
    }
}

/**
 * Hide alert message
 * @param {string} elementId - ID of the alert element
 */
function hideAlert(elementId) {
    const alertElement = document.getElementById(elementId);

    if (alertElement) {
        alertElement.classList.remove('show');
    }
}

/**
 * Format date to readable string
 * @param {Date} date - Date object to format
 * @param {boolean} includeYear - Whether to include the year
 * @returns {string} Formatted date string
 */
function formatDate(date, includeYear = true) {
    const options = {
        month: 'long',
        day: 'numeric'
    };

    if (includeYear) {
        options.year = 'numeric';
    }

    return date.toLocaleDateString('en-US', options);
}

/**
 * Format time to readable string
 * @param {string} timeString - Time in HH:MM format
 * @returns {string} Formatted time string
 */
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;

    return `${displayHour}:${minutes} ${ampm}`;
}

/**
 * Debounce function to limit rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Get query parameter from URL
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value or null
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Add loading state to button
 * @param {HTMLElement} button - Button element
 * @param {boolean} isLoading - Loading state
 */
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.innerHTML = '<span class="spinner"></span> Processing...';
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText || 'Submit';
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showAlert,
        hideAlert,
        formatDate,
        formatTime,
        debounce,
        isValidEmail,
        formatCurrency,
        getQueryParam,
        setButtonLoading
    };
}
