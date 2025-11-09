/**
 * Events Page JavaScript
 * Handles events listing and filtering
 */

let allEvents = [];
let currentFilter = 'all';

// Initialize events page
document.addEventListener('DOMContentLoaded', function() {
    loadEventsData();
    initFilterControls();
    initEventModal();
    renderEventsList();
});

/**
 * Load events data
 */
function loadEventsData() {
    // Try to load from localStorage first
    const storedEvents = localStorage.getItem('churchEvents');

    // Note: If no events in localStorage, user should visit calendar page first
    // to generate the full recurring event schedule
    if (storedEvents) {
        allEvents = JSON.parse(storedEvents).map(event => ({
            ...event,
            date: new Date(event.date)
        }));
    } else {
        // Fallback to sample events (but calendar.js generates the full schedule)
        allEvents = getSampleEvents();
        localStorage.setItem('churchEvents', JSON.stringify(allEvents));
    }

    // Sort events by date
    allEvents.sort((a, b) => a.date - b.date);

    // Filter to show only upcoming events
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    allEvents = allEvents.filter(event => event.date >= today);
}

/**
 * Get sample events
 */
function getSampleEvents() {
    return [
        {
            id: 1,
            title: 'Sunday Worship Service',
            date: new Date(2024, 10, 10),
            time: '9:00 AM',
            endTime: '10:30 AM',
            type: 'worship',
            description: 'Join us for inspiring worship, biblical teaching, and fellowship with believers from our community.',
            location: 'Main Sanctuary'
        },
        {
            id: 2,
            title: 'Sunday Worship Service',
            date: new Date(2024, 10, 10),
            time: '11:00 AM',
            endTime: '12:30 PM',
            type: 'worship',
            description: 'Second service with the same message for those who prefer a later time. All are welcome!',
            location: 'Main Sanctuary'
        },
        {
            id: 3,
            title: 'Wednesday Bible Study',
            date: new Date(2024, 10, 13),
            time: '7:00 PM',
            endTime: '8:30 PM',
            type: 'bible-study',
            description: 'Deep dive into Scripture with interactive discussion and small group sharing. Currently studying the book of Romans.',
            location: 'Fellowship Hall'
        },
        {
            id: 4,
            title: 'Youth Group',
            date: new Date(2024, 10, 15),
            time: '6:30 PM',
            endTime: '8:30 PM',
            type: 'youth',
            description: 'Fun activities, games, and biblical teaching for middle and high school students. Bring a friend!',
            location: 'Youth Center'
        },
        {
            id: 5,
            title: 'Sunday Worship Service',
            date: new Date(2024, 10, 17),
            time: '9:00 AM',
            endTime: '10:30 AM',
            type: 'worship',
            description: 'Join us for inspiring worship, biblical teaching, and fellowship.',
            location: 'Main Sanctuary'
        },
        {
            id: 6,
            title: 'Sunday Worship Service',
            date: new Date(2024, 10, 17),
            time: '11:00 AM',
            endTime: '12:30 PM',
            type: 'worship',
            description: 'Second service with the same message.',
            location: 'Main Sanctuary'
        },
        {
            id: 7,
            title: 'Prayer Meeting',
            date: new Date(2024, 10, 19),
            time: '6:00 PM',
            endTime: '7:00 PM',
            type: 'prayer',
            description: 'Corporate prayer for our church, community, and world. Join us as we intercede for those in need.',
            location: 'Prayer Room'
        },
        {
            id: 8,
            title: 'Wednesday Bible Study',
            date: new Date(2024, 10, 20),
            time: '7:00 PM',
            endTime: '8:30 PM',
            type: 'bible-study',
            description: 'Deep dive into Scripture with interactive discussion.',
            location: 'Fellowship Hall'
        },
        {
            id: 9,
            title: 'Youth Group',
            date: new Date(2024, 10, 22),
            time: '6:30 PM',
            endTime: '8:30 PM',
            type: 'youth',
            description: 'Fun activities, games, and biblical teaching.',
            location: 'Youth Center'
        },
        {
            id: 10,
            title: 'Sunday Worship Service',
            date: new Date(2024, 10, 24),
            time: '9:00 AM',
            endTime: '10:30 AM',
            type: 'worship',
            description: 'Join us for inspiring worship, biblical teaching, and fellowship.',
            location: 'Main Sanctuary'
        },
        {
            id: 11,
            title: 'Thanksgiving Service',
            date: new Date(2024, 10, 28),
            time: '10:00 AM',
            endTime: '11:30 AM',
            type: 'special',
            description: 'Special Thanksgiving service to give thanks for God\'s blessings. Potluck meal to follow.',
            location: 'Main Sanctuary'
        },
        {
            id: 12,
            title: 'Community Outreach',
            date: new Date(2024, 10, 30),
            time: '9:00 AM',
            endTime: '2:00 PM',
            type: 'missions',
            description: 'Serve our community through food distribution and practical help. Volunteers needed!',
            location: 'Community Center'
        },
        {
            id: 13,
            title: 'Sunday Worship Service',
            date: new Date(2024, 11, 1),
            time: '9:00 AM',
            endTime: '10:30 AM',
            type: 'worship',
            description: 'Join us for inspiring worship, biblical teaching, and fellowship.',
            location: 'Main Sanctuary'
        },
        {
            id: 14,
            title: 'Missions Night',
            date: new Date(2024, 11, 5),
            time: '6:30 PM',
            endTime: '8:00 PM',
            type: 'missions',
            description: 'Hear from our missionaries serving around the world and learn how you can get involved.',
            location: 'Fellowship Hall'
        },
        {
            id: 15,
            title: 'Christmas Concert',
            date: new Date(2024, 11, 15),
            time: '7:00 PM',
            endTime: '9:00 PM',
            type: 'special',
            description: 'Annual Christmas concert featuring our choir, orchestra, and special guests. Free admission!',
            location: 'Main Sanctuary'
        }
    ];
}

/**
 * Initialize filter controls
 */
function initFilterControls() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update current filter
            currentFilter = this.dataset.filter;

            // Re-render events list
            renderEventsList();
        });
    });
}

/**
 * Render events list
 */
function renderEventsList() {
    const eventsList = document.getElementById('eventsList');
    const noEvents = document.getElementById('noEvents');

    if (!eventsList) return;

    // Filter events based on current filter
    let filteredEvents = allEvents;

    if (currentFilter !== 'all') {
        filteredEvents = allEvents.filter(event => event.type === currentFilter);
    }

    // Clear existing events
    eventsList.innerHTML = '';

    // Show/hide no events message
    if (filteredEvents.length === 0) {
        eventsList.style.display = 'none';
        noEvents.style.display = 'block';
        return;
    } else {
        eventsList.style.display = 'flex';
        noEvents.style.display = 'none';
    }

    // Render each event
    filteredEvents.forEach(event => {
        const eventCard = createEventCard(event);
        eventsList.appendChild(eventCard);
    });
}

/**
 * Create event card element
 */
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = `event-card ${event.type}`;

    const dateStr = formatEventDate(event.date);
    const typeLabel = formatEventType(event.type);

    card.innerHTML = `
        <div class="event-card-header">
            <div>
                <h3>${event.title}</h3>
                <div class="event-card-date">${dateStr}</div>
                <div class="event-card-time">${event.time} - ${event.endTime}</div>
            </div>
            <span class="event-type-badge ${event.type}">${typeLabel}</span>
        </div>
        <p class="event-card-description">${event.description}</p>
        <p style="color: var(--text-light); margin-top: 0.5rem;">📍 ${event.location}</p>
    `;

    // Add click handler to show full details
    card.addEventListener('click', () => showEventDetails(event));

    return card;
}

/**
 * Format event date
 */
function formatEventDate(date) {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return date.toLocaleDateString('en-US', options);
}

/**
 * Format event type for display
 */
function formatEventType(type) {
    return type.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

/**
 * Show event details in modal
 */
function showEventDetails(event) {
    const modal = document.getElementById('eventModal');
    const eventDetails = document.getElementById('eventDetails');

    if (!modal || !eventDetails) return;

    const dateStr = formatEventDate(event.date);
    const typeLabel = formatEventType(event.type);

    const html = `
        <div class="event-details">
            <div class="event-detail-item">
                <strong>Event</strong>
                <h3 style="color: var(--primary-color); margin-top: 0.5rem;">${event.title}</h3>
            </div>

            <div class="event-detail-item">
                <strong>Date</strong>
                <p>${dateStr}</p>
            </div>

            <div class="event-detail-item">
                <strong>Time</strong>
                <p>${event.time} - ${event.endTime}</p>
            </div>

            <div class="event-detail-item">
                <strong>Location</strong>
                <p>${event.location}</p>
            </div>

            <div class="event-detail-item">
                <strong>Category</strong>
                <p><span class="event-type-badge ${event.type}">${typeLabel}</span></p>
            </div>

            <div class="event-detail-item">
                <strong>Description</strong>
                <p>${event.description}</p>
            </div>

            <div style="margin-top: 1.5rem; text-align: center;">
                <a href="contact.html" class="cta-button">Contact Us for More Info</a>
            </div>
        </div>
    `;

    eventDetails.innerHTML = html;
    modal.classList.add('active');
}

/**
 * Initialize event modal
 */
function initEventModal() {
    const modal = document.getElementById('eventModal');
    const closeBtn = document.getElementById('closeModal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}
