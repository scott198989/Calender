/**
 * Contact Page JavaScript
 * Handles contact form submission
 */

// Initialize contact page
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

/**
 * Initialize contact form
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitContactBtn');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim()
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Submit form
        await submitContactForm(formData, submitBtn);
    });
}

/**
 * Validate contact form
 */
function validateForm(formData) {
    // Hide previous alerts
    hideAlert('contactSuccess');
    hideAlert('contactError');

    // Check required fields
    if (!formData.name) {
        showAlert('contactError', 'Please enter your name.');
        return false;
    }

    if (!formData.email) {
        showAlert('contactError', 'Please enter your email address.');
        return false;
    }

    if (!isValidEmail(formData.email)) {
        showAlert('contactError', 'Please enter a valid email address.');
        return false;
    }

    if (!formData.subject) {
        showAlert('contactError', 'Please select a subject.');
        return false;
    }

    if (!formData.message) {
        showAlert('contactError', 'Please enter a message.');
        return false;
    }

    if (formData.message.length < 10) {
        showAlert('contactError', 'Please enter a message with at least 10 characters.');
        return false;
    }

    return true;
}

/**
 * Submit contact form
 */
async function submitContactForm(formData, submitBtn) {
    try {
        // Disable submit button and show loading
        setButtonLoading(submitBtn, true);

        // In production, you would send this to your server
        // Example:
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        */

        // Simulate API call
        console.log('Contact form submission:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message
        showAlert('contactSuccess');

        // Reset form
        document.getElementById('contactForm').reset();

        // Scroll to success message
        document.getElementById('contactSuccess').scrollIntoView({ behavior: 'smooth' });

        // Log for demonstration
        console.log('Contact message sent:', {
            ...formData,
            timestamp: new Date().toISOString()
        });

        // In production, you might:
        // - Send email to church office
        // - Store in database
        // - Send auto-reply to user
        // - Add to CRM system

    } catch (error) {
        console.error('Contact form error:', error);
        showAlert('contactError', 'There was a problem sending your message. Please try again or contact us directly.');
    } finally {
        // Re-enable submit button
        setButtonLoading(submitBtn, false);
    }
}

/**
 * Show alert message
 */
function showAlert(elementId, message = null) {
    const alertElement = document.getElementById(elementId);

    if (!alertElement) return;

    if (message) {
        // Find the message container (after the <strong> tag)
        const messageText = alertElement.querySelector('strong').nextSibling;
        if (messageText) {
            messageText.textContent = ' ' + message;
        }
    }

    alertElement.style.display = 'block';

    // Auto-hide success messages after 5 seconds
    if (elementId === 'contactSuccess') {
        setTimeout(() => {
            hideAlert(elementId);
        }, 5000);
    }
}

/**
 * Hide alert message
 */
function hideAlert(elementId) {
    const alertElement = document.getElementById(elementId);

    if (alertElement) {
        alertElement.style.display = 'none';
    }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Add loading state to button
 */
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = 'Sending...';
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText || 'Send Message';
    }
}
