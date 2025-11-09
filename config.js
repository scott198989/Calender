// Configuration file for the Church Calendar & Donation Website
// DO NOT commit sensitive keys to git - use environment variables in production

const CONFIG = {
    // Stripe Configuration
    // For production, replace with your actual Stripe publishable key
    // Get your key at: https://dashboard.stripe.com/apikeys
    STRIPE_PUBLISHABLE_KEY: 'pk_test_YOUR_KEY_HERE',

    // Church Information
    CHURCH_NAME: 'Grace Community Church',
    CHURCH_EMAIL: 'info@gracecommunity.org',
    CHURCH_PHONE: '(555) 123-4567',
    CHURCH_ADDRESS: '123 Faith Street, City, ST 12345',

    // Donation Settings
    CURRENCY: 'usd',
    SUGGESTED_AMOUNTS: [25, 50, 100, 250, 500],

    // Calendar Settings
    CALENDAR_VIEW: 'month', // 'month' or 'week'
    EVENT_COLORS: {
        'worship': '#4A90E2',
        'bible-study': '#7ED321',
        'prayer': '#F5A623',
        'youth': '#BD10E0',
        'missions': '#50E3C2',
        'special': '#D0021B'
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
