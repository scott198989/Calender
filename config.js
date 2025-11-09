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
        'worship': '#2d4a2b',      // Rich forest green
        'bible-study': '#5d7a52',  // Deep olive
        'prayer': '#b8925a',       // Refined gold
        'youth': '#6b8a67',        // Deep sage
        'missions': '#8b7355',     // Warm brown
        'special': '#8b3a2e',      // Deep terracotta
        'seniors': '#9b8b7e',      // Warm taupe
        'mens': '#4a6b47',         // Deep sage green
        'kids': '#7f9b7c',         // Soft forest green
        'potluck': '#c4a375'       // Warm gold
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
