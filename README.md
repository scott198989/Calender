
# Church Calendar - Independent Fundamental Baptist Church

A beautiful, functional church calendar application built with modern web technologies and a faith-centered design philosophy.

## Features

### Core Functionality
- **Interactive Calendar** - Monthly view with easy navigation and date selection
- **Event Management** - Track multiple event types:
  - Sunday Services
  - Bible Studies
  - Special Events
  - Prayer Meetings
- **Event Details** - Complete information including date, time, location, and recurrence
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile devices

### Faith-Centered Features
- **Daily Scripture** - Displays inspiring Bible verses with refresh capability
- **Prayer Requests** - Dedicated section for church prayer needs with urgency indicators
- **Church Announcements** - Keep the congregation informed of important updates
- **Reverent Design** - Traditional color palette with burgundy, navy, and gold accents

## Technology Stack

Built with premium, industry-leading frameworks:

- **Next.js 14** - React framework with App Router for optimal performance
- **TypeScript** - Type-safe development for reliability
- **Tailwind CSS** - Utility-first styling for beautiful, responsive design
- **date-fns** - Modern date manipulation library
- **Lucide React** - Beautiful, consistent icons
- **Class Variance Authority** - Type-safe component variants

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Calender
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main calendar page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Calendar.tsx        # Main calendar component
│   ├── EventList.tsx       # Event listing component
│   ├── PrayerRequests.tsx  # Prayer requests display
│   ├── Announcements.tsx   # Church announcements
│   ├── DailyScripture.tsx  # Scripture verse component
│   └── Header.tsx          # Site header
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   ├── data.ts             # Sample data and scripture verses
│   └── utils.ts            # Utility functions
└── public/                 # Static assets

```

## Customization

### Adding Events

Edit `lib/data.ts` to add or modify church events:

```typescript
{
  id: "unique-id",
  title: "Event Name",
  description: "Event description",
  date: new Date(2024, 0, 15),
  time: "10:00 AM - 12:00 PM",
  type: "service", // or "bible-study", "special", "prayer"
  location: "Main Sanctuary",
  recurring: true // for weekly events
}
```

### Adding Scripture Verses

Add more verses to the `scriptures` array in `lib/data.ts`:

```typescript
{
  verse: "Your verse text",
  reference: "Book Chapter:Verse"
}
```

### Customizing Colors

Modify the color palette in `tailwind.config.ts` to match your church's branding:

```typescript
colors: {
  primary: { /* Navy blue shades */ },
  burgundy: { /* Burgundy shades */ },
  gold: { /* Gold shades */ }
}
```

## Features in Detail

### Calendar Component
- Monthly view with week-day headers
- Color-coded event badges by type
- Click any date to view that day's events
- Navigate between months with arrow buttons
- Today's date highlighted in burgundy

### Event Types
- **Services** - Sunday worship, evening services (blue badges)
- **Bible Studies** - Midweek studies, youth groups (burgundy badges)
- **Special Events** - Revivals, fellowships, meetings (gold badges)
- **Prayer** - Prayer meetings, prayer breakfasts (purple badges)

### Responsive Design
- Desktop: Full calendar with sidebar event list
- Tablet: Stacked layout with optimized spacing
- Mobile: Touch-friendly calendar with collapsible details

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for Independent Fundamental Baptist Church use.

## Support

For questions or issues, please contact the church web administrator.

---

*"Upon this rock I will build my church" - Matthew 16:18*
=======
# Grace Community Church Website

A complete, functional church website featuring an interactive calendar, event management, and a cost-effective donation/tithe system.

## Features

### 🏠 Multi-Page Website
- **Home Page**: Welcoming landing page with service information
- **Calendar Page**: Interactive monthly calendar with event viewing
- **Events Page**: Filterable list of upcoming church events
- **Donation Page**: Secure online giving with Stripe integration
- **About Page**: Church history, mission, values, and leadership
- **Contact Page**: Contact form and church information

### 📅 Interactive Calendar
- Monthly calendar view with navigation
- Color-coded events by category
- Click on any date to view event details
- Responsive design for mobile devices
- Events stored in localStorage for persistence

### 💝 Tithe & Donation System
- **Cost-Effective Payment Processing**: Uses Stripe (2.9% + $0.30 per transaction)
- **Fee Coverage Option**: Donors can choose to cover processing fees
- **Multiple Donation Types**: Tithe, Missions, Building Fund, Benevolence
- **Recurring Donations**: One-time, weekly, or monthly giving
- **Preset & Custom Amounts**: Quick selection or custom amount entry
- **Secure Payment**: PCI-compliant, SSL encrypted transactions
- **Mobile Optimized**: Works seamlessly on all devices

### 🎨 Modern Design
- Clean, professional appearance
- Fully responsive (mobile, tablet, desktop)
- Accessible navigation
- Smooth animations and transitions
- Consistent branding throughout

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript (ES6+)**: Interactive functionality
- **Stripe.js**: Payment processing
- **LocalStorage**: Client-side data persistence

## Setup Instructions

### 1. Basic Setup

Simply open `index.html` in a web browser to view the website locally.

### 2. Stripe Configuration

To enable actual payment processing:

1. **Get Stripe Account**:
   - Visit [https://stripe.com](https://stripe.com)
   - Sign up for a free account
   - Stripe offers special non-profit rates (2.2% + $0.30) - contact them for eligibility

2. **Get API Keys**:
   - Log into Stripe Dashboard
   - Navigate to Developers > API Keys
   - Copy your Publishable Key (starts with `pk_`)

3. **Configure the Website**:
   - Open `config.js`
   - Replace `pk_test_YOUR_KEY_HERE` with your actual Stripe Publishable Key
   - For production, use your live key (starts with `pk_live_`)

4. **Backend Setup** (Required for Production):
   - The current implementation uses client-side only for demonstration
   - For production, you need a server to:
     - Create payment intents
     - Process webhooks
     - Store donation records
     - Send confirmation emails
   - See "Production Deployment" section below

### 3. Customization

#### Church Information
Edit `config.js` to update:
- Church name
- Contact information
- Address and phone
- Suggested donation amounts
- Event colors

#### Content Updates
- **Home Page**: Edit `index.html`
- **About Page**: Edit `about.html` to add your church's history
- **Contact Info**: Update footer in all HTML files

#### Styling
- **Colors**: Modify CSS variables in `css/main.css` (`:root` section)
- **Fonts**: Change font-family in `css/main.css`
- **Layout**: Adjust grid and spacing in respective CSS files

### 4. Adding Events

Events are currently stored in localStorage. To add events:

1. Open `js/calendar.js` or `js/events.js`
2. Add to the `sampleEvents` array following this format:

```javascript
{
    id: 13,
    title: 'Event Name',
    date: new Date(2024, 10, 15), // Year, Month (0-11), Day
    time: '7:00 PM',
    endTime: '8:30 PM',
    type: 'worship', // worship, bible-study, prayer, youth, missions, special
    description: 'Event description here',
    location: 'Location name'
}
```

## Production Deployment

### Hosting Options

1. **Static Hosting** (Simple):
   - GitHub Pages (Free)
   - Netlify (Free tier available)
   - Vercel (Free tier available)
   - AWS S3 + CloudFront

2. **With Backend** (Recommended):
   - Heroku
   - DigitalOcean
   - AWS (EC2 or Elastic Beanstalk)
   - Your own server

### Backend Requirements

For production payment processing, you need a server that:

1. **Creates Payment Intents**:
```javascript
// Example Node.js/Express endpoint
app.post('/create-payment-intent', async (req, res) => {
  const { amount, donationType, frequency } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Stripe uses cents
    currency: 'usd',
    metadata: {
      type: donationType,
      frequency: frequency
    }
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});
```

2. **Handles Webhooks**:
   - Verify payment success
   - Store donation records
   - Send confirmation emails
   - Update donor records

3. **Database** (Optional but recommended):
   - Store donation history
   - Manage events
   - Track recurring donations
   - Donor management

### Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Never expose Secret API keys
- [ ] Validate all inputs server-side
- [ ] Use environment variables for sensitive data
- [ ] Enable Stripe webhook signature verification
- [ ] Implement rate limiting
- [ ] Regular security audits

## Cost Breakdown

### Payment Processing Fees

**Stripe Standard**: 2.9% + $0.30 per transaction
**Stripe Non-Profit**: 2.2% + $0.30 per transaction (apply for non-profit status)

Example costs for a $100 donation:
- Standard: $3.20 in fees = $96.80 received
- Non-Profit: $2.50 in fees = $97.50 received
- With fee coverage: $0 in fees = $100.00 received

### Hosting Costs

- **Static Site**: $0-10/month (GitHub Pages, Netlify free tier)
- **With Backend**: $5-25/month (Heroku, DigitalOcean basic)
- **Database**: $0-15/month (Many providers have free tiers)

**Total Estimated Monthly Cost**: $5-25/month (plus transaction fees)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
Calender/
├── index.html              # Home page
├── calendar.html           # Calendar page
├── events.html            # Events listing page
├── donate.html            # Donation page
├── about.html             # About page
├── contact.html           # Contact page
├── config.js              # Configuration file
├── css/
│   ├── main.css           # Main stylesheet
│   ├── calendar.css       # Calendar-specific styles
│   └── donate.css         # Donation page styles
├── js/
│   ├── main.js            # Common JavaScript
│   ├── calendar.js        # Calendar functionality
│   ├── events.js          # Events page functionality
│   ├── donate.js          # Donation processing
│   └── contact.js         # Contact form handling
└── images/                # Images directory (add your images here)
```

## Customization Guide

### Changing Colors

Edit CSS variables in `css/main.css`:

```css
:root {
    --primary-color: #2c5aa0;      /* Main brand color */
    --secondary-color: #4a90e2;    /* Secondary brand color */
    --accent-color: #f5a623;       /* Accent/CTA color */
}
```

### Adding New Pages

1. Copy an existing HTML file
2. Update the content
3. Add link to navigation in all pages
4. Update footer links

### Event Categories

Edit event colors in `config.js`:

```javascript
EVENT_COLORS: {
    'worship': '#4A90E2',
    'bible-study': '#7ED321',
    'prayer': '#F5A623',
    'youth': '#BD10E0',
    'missions': '#50E3C2',
    'special': '#D0021B'
}
```

## Support & Documentation

### Stripe Documentation
- [Stripe Documentation](https://stripe.com/docs)
- [Non-Profit Program](https://stripe.com/nonprofits)
- [Payment Intents API](https://stripe.com/docs/payments/payment-intents)

### Need Help?
- Check Stripe's excellent documentation
- Review browser console for errors
- Test with Stripe's test card numbers
- Contact Stripe support for payment issues

## Testing

### Test Mode
The website uses test mode by default. Use these test card numbers:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- Use any future expiration date and any 3-digit CVC

### Live Mode
Before going live:
1. Replace test API key with live key in `config.js`
2. Test all functionality thoroughly
3. Set up webhook endpoints
4. Configure email notifications
5. Test on multiple devices and browsers

## License

This project is provided as-is for use by churches and non-profit organizations.

## Credits

Built with:
- Stripe for payment processing
- Modern web standards (HTML5, CSS3, ES6+)
- Love and dedication to serving the church community

---

**Note**: This is a demonstration/template. For production use, implement proper backend security, database storage, and follow all PCI compliance requirements.
