/**
 * Donation Page JavaScript
 * Handles donation form and Stripe payment processing
 */

let stripe;
let cardElement;
let donationAmount = 0;
let donationType = 'tithe';
let frequency = 'one-time';
let coverFees = false;

// Initialize donation page
document.addEventListener('DOMContentLoaded', function() {
    initStripe();
    initAmountSelection();
    initDonationType();
    initFrequency();
    initCoverFees();
    initDonationForm();
    updateSummary();
});

/**
 * Initialize Stripe
 */
function initStripe() {
    // Check if Stripe is loaded
    if (typeof Stripe === 'undefined') {
        console.error('Stripe.js failed to load. Please check your internet connection.');
        showAlert('errorAlert', 'Payment system is currently unavailable. Please try again later.');
        return;
    }

    // Initialize Stripe with publishable key from config
    const stripeKey = typeof CONFIG !== 'undefined' ? CONFIG.STRIPE_PUBLISHABLE_KEY : 'pk_test_YOUR_KEY_HERE';

    try {
        stripe = Stripe(stripeKey);

        // Create card element
        const elements = stripe.elements();
        cardElement = elements.create('card', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#333333',
                    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                    '::placeholder': {
                        color: '#999999'
                    }
                },
                invalid: {
                    color: '#dc3545'
                }
            }
        });

        cardElement.mount('#card-element');

        // Handle card errors
        cardElement.on('change', function(event) {
            const displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
    } catch (error) {
        console.error('Stripe initialization error:', error);
        showAlert('errorAlert', 'Payment system configuration error. Please contact support.');
    }
}

/**
 * Initialize amount selection
 */
function initAmountSelection() {
    const amountOptions = document.querySelectorAll('.amount-option');
    const customAmountInput = document.getElementById('customAmount');

    amountOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            amountOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');

            // Set donation amount
            donationAmount = parseFloat(this.dataset.amount);

            // Clear custom amount
            customAmountInput.value = '';

            // Update summary
            updateSummary();
        });
    });

    customAmountInput.addEventListener('input', function() {
        // Remove selected class from all preset amounts
        amountOptions.forEach(opt => opt.classList.remove('selected'));

        // Set donation amount from custom input
        donationAmount = parseFloat(this.value) || 0;

        // Update summary
        updateSummary();
    });
}

/**
 * Initialize donation type selection
 */
function initDonationType() {
    const typeOptions = document.querySelectorAll('.type-option');

    typeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            typeOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');

            // Set donation type
            donationType = this.dataset.type;
        });
    });
}

/**
 * Initialize frequency selection
 */
function initFrequency() {
    const frequencyOptions = document.querySelectorAll('.frequency-option');

    frequencyOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            frequencyOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');

            // Set frequency
            frequency = this.dataset.frequency;

            // Update summary
            updateSummary();
        });
    });
}

/**
 * Initialize cover fees option
 */
function initCoverFees() {
    const coverFeesCheckbox = document.getElementById('coverFees');

    coverFeesCheckbox.addEventListener('change', function() {
        coverFees = this.checked;
        updateSummary();
    });
}

/**
 * Update donation summary
 */
function updateSummary() {
    const summaryAmount = document.getElementById('summaryAmount');
    const summaryFees = document.getElementById('summaryFees');
    const summaryTotal = document.getElementById('summaryTotal');
    const feesRow = document.getElementById('feesRow');

    // Calculate fees (Stripe: 2.9% + $0.30)
    const stripeFee = (donationAmount * 0.029) + 0.30;
    const totalFees = Math.round(stripeFee * 100) / 100;

    // Calculate total
    let total = donationAmount;
    if (coverFees && donationAmount > 0) {
        total = donationAmount + totalFees;
        feesRow.style.display = 'flex';
        summaryFees.textContent = formatCurrency(totalFees);
    } else {
        feesRow.style.display = 'none';
    }

    // Update display
    summaryAmount.textContent = formatCurrency(donationAmount);
    summaryTotal.textContent = formatCurrency(total);
}

/**
 * Initialize donation form
 */
function initDonationForm() {
    const form = document.getElementById('donationForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate amount
        if (donationAmount <= 0) {
            showAlert('errorAlert', 'Please select or enter a donation amount.');
            return;
        }

        // Validate minimum amount ($1)
        if (donationAmount < 1) {
            showAlert('errorAlert', 'Minimum donation amount is $1.00');
            return;
        }

        // Validate personal information
        const donorName = document.getElementById('donorName').value.trim();
        const donorEmail = document.getElementById('donorEmail').value.trim();

        if (!donorName) {
            showAlert('errorAlert', 'Please enter your name.');
            return;
        }

        if (!donorEmail || !isValidEmail(donorEmail)) {
            showAlert('errorAlert', 'Please enter a valid email address.');
            return;
        }

        // Process payment
        await processPayment(donorName, donorEmail);
    });
}

/**
 * Process payment with Stripe
 */
async function processPayment(donorName, donorEmail) {
    const submitBtn = document.getElementById('submitBtn');

    try {
        // Disable submit button and show loading
        setButtonLoading(submitBtn, true);

        // Hide any previous alerts
        hideAlert('errorAlert');
        hideAlert('successAlert');

        // Calculate total amount
        const stripeFee = (donationAmount * 0.029) + 0.30;
        const totalAmount = coverFees ? donationAmount + stripeFee : donationAmount;

        // In a production environment, you would:
        // 1. Create a payment intent on your server
        // 2. Confirm the payment with Stripe
        // 3. Process the donation in your database

        // For demonstration purposes, we'll simulate the payment process
        console.log('Processing donation:', {
            amount: donationAmount,
            totalAmount: totalAmount,
            type: donationType,
            frequency: frequency,
            coverFees: coverFees,
            donorName: donorName,
            donorEmail: donorEmail
        });

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // In production, you would use the actual Stripe payment confirmation:
        /*
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: donorName,
                    email: donorEmail
                }
            }
        });

        if (error) {
            throw new Error(error.message);
        }
        */

        // Show success message
        showAlert('successAlert', null, 0);

        // Reset form
        document.getElementById('donationForm').reset();
        document.querySelectorAll('.amount-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelectorAll('.type-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector('.type-option[data-type="tithe"]').classList.add('selected');
        document.querySelectorAll('.frequency-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector('.frequency-option[data-frequency="one-time"]').classList.add('selected');

        // Reset state
        donationAmount = 0;
        donationType = 'tithe';
        frequency = 'one-time';
        coverFees = false;

        // Update summary
        updateSummary();

        // Clear card element
        if (cardElement) {
            cardElement.clear();
        }

        // Scroll to success message
        document.getElementById('successAlert').scrollIntoView({ behavior: 'smooth' });

        // Send confirmation email (in production)
        console.log('Sending confirmation email to:', donorEmail);

    } catch (error) {
        console.error('Payment error:', error);
        showAlert('errorAlert', error.message || 'An error occurred while processing your donation. Please try again.');
    } finally {
        // Re-enable submit button
        setButtonLoading(submitBtn, false);
    }
}

/**
 * Show alert message
 */
function showAlert(elementId, message = null, duration = 5000) {
    const alertElement = document.getElementById(elementId);

    if (!alertElement) return;

    if (message) {
        const messageElement = alertElement.querySelector('#errorMessage');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }

    alertElement.style.display = 'block';

    if (duration > 0) {
        setTimeout(() => {
            hideAlert(elementId);
        }, duration);
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
 * Format currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Add loading state to button
 */
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.innerHTML = '<span class="spinner"></span> Processing...';
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText || 'Complete Donation';
    }
}
