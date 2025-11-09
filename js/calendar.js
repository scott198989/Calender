/**
 * Calendar JavaScript for Berean Baptist Church
 * Handles interactive calendar functionality
 */

// Calendar state
let currentDate = new Date();
let selectedDate = null;
let events = [];

/**
 * Generate recurring church events
 */
function generateChurchEvents() {
    const events = [];
    let eventId = 1;
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const endDate = new Date(today.getFullYear(), today.getMonth() + 4, 0);

    // Helper function to get first day of week in month
    function getFirstDayOfWeek(year, month, dayOfWeek) {
        const date = new Date(year, month, 1);
        while (date.getDay() !== dayOfWeek) {
            date.setDate(date.getDate() + 1);
        }
        return date.getDate();
    }

    // Loop through each month
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const day = date.getDay();
        const dayOfMonth = date.getDate();

        // Sunday Services
        if (day === 0) {
            // Sunday School
            events.push({
                id: eventId++,
                title: 'Sunday School',
                date: new Date(date),
                time: '9:30 AM',
                endTime: '10:30 AM',
                type: 'bible-study',
                description: 'Sunday School classes for all ages. Adults meet in the main auditorium, and we have classes for children and teens.',
                location: 'Main Auditorium & Classrooms'
            });

            // Morning Worship
            events.push({
                id: eventId++,
                title: 'Morning Worship',
                date: new Date(date),
                time: '10:30 AM',
                endTime: '11:45 AM',
                type: 'worship',
                description: 'Join us for God-honoring worship, sound biblical teaching, and fellowship. Nursery and Children\'s Church available.',
                location: 'Main Sanctuary'
            });

            // First Sunday: Potluck & Special Evening Service
            if (dayOfMonth <= 7) {
                events.push({
                    id: eventId++,
                    title: 'Church Potluck Supper',
                    date: new Date(date),
                    time: '12:00 PM',
                    endTime: '1:00 PM',
                    type: 'potluck',
                    description: 'Monthly church potluck! Bring your favorite dish to share. Fellowship meal after morning worship.',
                    location: 'Fellowship Hall'
                });

                events.push({
                    id: eventId++,
                    title: 'Evening Service',
                    date: new Date(date),
                    time: '1:00 PM',
                    endTime: '2:00 PM',
                    type: 'worship',
                    description: 'Special first Sunday evening service (earlier time due to potluck). King\'s Kids program for children.',
                    location: 'Main Sanctuary'
                });
            } else {
                // Regular Evening Service
                events.push({
                    id: eventId++,
                    title: 'Evening Service',
                    date: new Date(date),
                    time: '5:00 PM',
                    endTime: '6:00 PM',
                    type: 'worship',
                    description: 'Evening worship service. King\'s Kids program for children during service.',
                    location: 'Main Sanctuary'
                });

                // Monthly Bible Quizzing (not on first Sunday)
                if (dayOfMonth > 7 && dayOfMonth <= 14) {
                    events.push({
                        id: eventId++,
                        title: 'Bible Quizzing',
                        date: new Date(date),
                        time: '4:30 PM',
                        endTime: '5:00 PM',
                        type: 'bible-study',
                        description: 'Monthly Bible quizzing before evening service. Open to all ages. We memorize and quiz on a passage of Scripture each month.',
                        location: 'Main Sanctuary'
                    });
                }
            }
        }

        // Wednesday Services
        if (day === 3) {
            // 55 and Alive Seniors Club
            events.push({
                id: eventId++,
                title: '55 and Alive Seniors Club',
                date: new Date(date),
                time: '5:00 PM',
                endTime: '6:30 PM',
                type: 'seniors',
                description: 'Fellowship, activities, and encouragement for our seniors. All ages 55+ welcome!',
                location: 'Fellowship Hall'
            });

            // Wednesday Prayer Meeting & Bible Study
            events.push({
                id: eventId++,
                title: 'Prayer Meeting & Bible Study',
                date: new Date(date),
                time: '7:00 PM',
                endTime: '8:00 PM',
                type: 'prayer',
                description: 'Corporate prayer for our church, community, and world, followed by Bible study.',
                location: 'Main Sanctuary'
            });
        }

        // First Saturday: Men's Prayer Breakfast
        if (day === 6 && dayOfMonth <= 7) {
            events.push({
                id: eventId++,
                title: 'Men\'s Prayer Breakfast',
                date: new Date(date),
                time: '7:00 AM',
                endTime: '8:30 AM',
                type: 'mens',
                description: 'Monthly men\'s prayer breakfast. Fellowship, food, and prayer for men of all ages.',
                location: 'Fellowship Hall'
            });
        }
    }

    return events;
}

// Sample events data
const sampleEvents = generateChurchEvents();

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
    const eventsVersion = localStorage.getItem('churchEventsVersion');
    const currentVersion = '2.0'; // Increment to force regeneration

    // Force regeneration if version changed or no events
    if (!storedEvents || eventsVersion !== currentVersion) {
        console.log('Generating new church events...');
        localStorage.setItem('churchEventsVersion', currentVersion);
        saveEvents(sampleEvents);
        return sampleEvents;
    }

    return JSON.parse(storedEvents).map(event => ({
        ...event,
        date: new Date(event.date)
    }));
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
 * Format date
 */
function formatDate(date, includeYear = true) {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    if (includeYear) {
        options.year = 'numeric';
    }

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
