/**
 * Calendar JavaScript
 * Handles interactive calendar functionality
 */

// Calendar state
let currentDate = new Date();
let selectedDate = null;
let events = [];

// Sample events data (in production, this would come from a database/API)
const sampleEvents = [
    {
        id: 1,
        title: 'Sunday Worship Service',
        date: new Date(2024, 10, 10), // November 10, 2024
        time: '9:00 AM',
        endTime: '10:30 AM',
        type: 'worship',
        description: 'Join us for inspiring worship, biblical teaching, and fellowship.',
        location: 'Main Sanctuary'
    },
    {
        id: 2,
        title: 'Sunday Worship Service',
        date: new Date(2024, 10, 10),
        time: '11:00 AM',
        endTime: '12:30 PM',
        type: 'worship',
        description: 'Second service with the same message for those who prefer a later time.',
        location: 'Main Sanctuary'
    },
    {
        id: 3,
        title: 'Wednesday Bible Study',
        date: new Date(2024, 10, 13),
        time: '7:00 PM',
        endTime: '8:30 PM',
        type: 'bible-study',
        description: 'Deep dive into Scripture with interactive discussion.',
        location: 'Fellowship Hall'
    },
    {
        id: 4,
        title: 'Youth Group',
        date: new Date(2024, 10, 15),
        time: '6:30 PM',
        endTime: '8:30 PM',
        type: 'youth',
        description: 'Fun activities, games, and biblical teaching for middle and high school students.',
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
        description: 'Corporate prayer for our church, community, and world.',
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
        description: 'Special Thanksgiving service to give thanks for God\'s blessings.',
        location: 'Main Sanctuary'
    },
    {
        id: 12,
        title: 'Community Outreach',
        date: new Date(2024, 10, 30),
        time: '9:00 AM',
        endTime: '2:00 PM',
        type: 'missions',
        description: 'Serve our community through food distribution and practical help.',
        location: 'Community Center'
    }
];

// Initialize calendar
document.addEventListener('DOMContentLoaded', function() {
    events = loadEvents();
    renderCalendar();
    initCalendarControls();
    initEventModal();
});

/**
 * Load events (from localStorage or sample data)
 */
function loadEvents() {
    const storedEvents = localStorage.getItem('churchEvents');

    if (storedEvents) {
        return JSON.parse(storedEvents).map(event => ({
            ...event,
            date: new Date(event.date)
        }));
    }

    // Save sample events to localStorage
    saveEvents(sampleEvents);
    return sampleEvents;
}

/**
 * Save events to localStorage
 */
function saveEvents(eventsToSave) {
    localStorage.setItem('churchEvents', JSON.stringify(eventsToSave));
}

/**
 * Render the calendar
 */
function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');

    if (!calendarGrid) return;

    // Clear existing calendar
    calendarGrid.innerHTML = '';

    // Update month/year display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonthElement.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Add day headers
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // Get first day of month and total days
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const totalDays = lastDay.getDate();

    // Add days from previous month
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const dayElement = createDayElement(
            prevMonthLastDay - i,
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, prevMonthLastDay - i),
            true
        );
        calendarGrid.appendChild(dayElement);
    }

    // Add days of current month
    for (let day = 1; day <= totalDays; day++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dayElement = createDayElement(day, date, false);
        calendarGrid.appendChild(dayElement);
    }

    // Add days from next month to fill grid
    const remainingCells = 42 - (firstDayOfWeek + totalDays);
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = createDayElement(
            day,
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day),
            true
        );
        calendarGrid.appendChild(dayElement);
    }
}

/**
 * Create a day element
 */
function createDayElement(dayNumber, date, isOtherMonth) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';

    if (isOtherMonth) {
        dayElement.classList.add('other-month');
    }

    // Check if it's today
    const today = new Date();
    if (isSameDay(date, today)) {
        dayElement.classList.add('today');
    }

    // Check if it's selected
    if (selectedDate && isSameDay(date, selectedDate)) {
        dayElement.classList.add('selected');
    }

    // Add day number
    const dayNumberElement = document.createElement('div');
    dayNumberElement.className = 'day-number';
    dayNumberElement.textContent = dayNumber;
    dayElement.appendChild(dayNumberElement);

    // Add events for this day
    const dayEvents = getEventsForDate(date);
    if (dayEvents.length > 0) {
        dayElement.classList.add('has-events');
        const eventsContainer = document.createElement('div');
        eventsContainer.className = 'day-events';

        dayEvents.forEach(event => {
            const eventBadge = document.createElement('div');
            eventBadge.className = `event-badge ${event.type}`;
            eventBadge.textContent = event.title;
            eventBadge.title = `${event.time} - ${event.title}`;
            eventsContainer.appendChild(eventBadge);
        });

        dayElement.appendChild(eventsContainer);
    }

    // Add click handler
    dayElement.addEventListener('click', () => handleDayClick(date, dayEvents));

    return dayElement;
}

/**
 * Get events for a specific date
 */
function getEventsForDate(date) {
    return events.filter(event => isSameDay(event.date, date))
                 .sort((a, b) => {
                     const timeA = a.time.replace(/[^0-9]/g, '');
                     const timeB = b.time.replace(/[^0-9]/g, '');
                     return parseInt(timeA) - parseInt(timeB);
                 });
}

/**
 * Check if two dates are the same day
 */
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

/**
 * Handle day click
 */
function handleDayClick(date, dayEvents) {
    selectedDate = date;
    renderCalendar();

    if (dayEvents.length > 0) {
        showEventDetails(dayEvents, date);
    } else {
        showEventDetails([], date);
    }
}

/**
 * Show event details in modal
 */
function showEventDetails(dayEvents, date) {
    const modal = document.getElementById('eventModal');
    const eventDetails = document.getElementById('eventDetails');

    if (!modal || !eventDetails) return;

    let html = `<h4 style="color: var(--primary-color); margin-bottom: 1rem;">
                   ${formatDate(date, false)}
                </h4>`;

    if (dayEvents.length === 0) {
        html += '<p style="color: var(--text-light);">No events scheduled for this day.</p>';
    } else {
        html += '<div class="event-details">';
        dayEvents.forEach(event => {
            html += `
                <div class="event-detail-item">
                    <strong>${event.title}</strong>
                    <p>⏰ ${event.time} - ${event.endTime}</p>
                    <p>📍 ${event.location}</p>
                    <p style="margin-top: 0.5rem;">${event.description}</p>
                    <span class="event-type-badge ${event.type}">${formatEventType(event.type)}</span>
                </div>
            `;
        });
        html += '</div>';
    }

    eventDetails.innerHTML = html;
    modal.classList.add('active');
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
 * Initialize calendar controls
 */
function initCalendarControls() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const todayBtn = document.getElementById('todayBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    if (todayBtn) {
        todayBtn.addEventListener('click', () => {
            currentDate = new Date();
            selectedDate = null;
            renderCalendar();
        });
    }
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
