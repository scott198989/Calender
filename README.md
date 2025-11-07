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