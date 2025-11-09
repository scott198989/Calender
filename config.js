// Configuration file for the Church Calendar & Donation Website
// DO NOT commit sensitive keys to git - use environment variables in production

const CONFIG = {
    // Stripe Configuration
    // For production, replace with your actual Stripe publishable key
    // Get your key at: https://dashboard.stripe.com/apikeys
    STRIPE_PUBLISHABLE_KEY: 'pk_test_YOUR_KEY_HERE',

    // Church Information
    CHURCH_NAME: 'Berean Baptist Church of White House',
    CHURCH_EMAIL: 'info@bbcofwhitehouse.com',
    CHURCH_PHONE: '(615) 681-0207',
    CHURCH_ADDRESS: '268 Marlin Road, White House, TN 37188',

    // Donation Settings
    CURRENCY: 'usd',
    SUGGESTED_AMOUNTS: [25, 50, 100, 250, 500],

    // Calendar Settings
    CALENDAR_VIEW: 'month', // 'month' or 'week'
    EVENT_COLORS: {
        'worship': '#3d5a3c',      // Deep forest green
        'bible-study': '#6b7f4c',  // Olive green
        'prayer': '#a67c52',       // Warm bronze
        'youth': '#7a9b76',        // Muted sage
        'missions': '#8b7355',     // Warm brown
        'special': '#a0402a',      // Terracotta
        'seniors': '#9b8b7e',      // Taupe
        'mens': '#5a7356',         // Sage green
        'kids': '#8faa89',         // Soft green
        'potluck': '#c19a6b'       // Caramel
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
