import { ChurchEvent, PrayerRequest, Announcement } from "./types"
import { addDays, setHours, setMinutes } from "date-fns"

const today = new Date()

export const sampleEvents: ChurchEvent[] = [
  {
    id: "1",
    title: "Sunday Morning Worship",
    description: "Join us for worship, praise, and preaching from God's Word",
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())),
    time: "10:00 AM - 12:00 PM",
    type: "service",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "2",
    title: "Sunday Evening Service",
    description: "Evening worship and fellowship",
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())),
    time: "6:00 PM - 7:30 PM",
    type: "service",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "3",
    title: "Wednesday Bible Study",
    description: "In-depth study of Scripture and prayer meeting",
    date: addDays(today, (3 - today.getDay() + 7) % 7 || 7),
    time: "7:00 PM - 8:30 PM",
    type: "bible-study",
    location: "Fellowship Hall",
    recurring: true,
  },
  {
    id: "4",
    title: "Youth Group Meeting",
    description: "Bible study and activities for teens",
    date: addDays(today, (5 - today.getDay() + 7) % 7 || 7),
    time: "7:00 PM - 9:00 PM",
    type: "bible-study",
    location: "Youth Room",
    recurring: true,
  },
  {
    id: "5",
    title: "Men's Prayer Breakfast",
    description: "Fellowship, prayer, and encouragement for men",
    date: addDays(today, (6 - today.getDay() + 7) % 7 || 7),
    time: "7:00 AM - 9:00 AM",
    type: "prayer",
    location: "Fellowship Hall",
    recurring: true,
  },
  {
    id: "6",
    title: "Special Revival Service",
    description: "Three-night revival with guest evangelist",
    date: addDays(today, 10),
    time: "7:00 PM - 9:00 PM",
    type: "special",
    location: "Main Sanctuary",
    recurring: false,
  },
  {
    id: "7",
    title: "Ladies' Tea Fellowship",
    description: "Time of fellowship and encouragement for ladies",
    date: addDays(today, 8),
    time: "2:00 PM - 4:00 PM",
    type: "special",
    location: "Fellowship Hall",
    recurring: false,
  },
  {
    id: "8",
    title: "Church Business Meeting",
    description: "Quarterly business meeting for members",
    date: addDays(today, 15),
    time: "6:00 PM - 7:00 PM",
    type: "special",
    location: "Conference Room",
    recurring: false,
  },
]

export const samplePrayerRequests: PrayerRequest[] = [
  {
    id: "1",
    name: "Sister Johnson",
    request: "Healing from recent surgery",
    date: addDays(today, -2),
    urgent: true,
  },
  {
    id: "2",
    name: "Brother Smith",
    request: "Job search and provision",
    date: addDays(today, -5),
    urgent: false,
  },
  {
    id: "3",
    name: "The Williams Family",
    request: "Salvation of family members",
    date: addDays(today, -1),
    urgent: false,
  },
]

export const sampleAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "New Member Class Starting",
    content: "If you're interested in church membership, please see Pastor after service to sign up for our new member class beginning next month.",
    date: today,
    priority: "high",
  },
  {
    id: "2",
    title: "Volunteer Opportunities",
    content: "We need volunteers for our children's ministry. Please contact Sister Mary if you'd like to serve.",
    date: addDays(today, -3),
    priority: "normal",
  },
  {
    id: "3",
    title: "Church Cleaning Day",
    content: "Join us this Saturday at 9 AM for our monthly church cleaning day. Many hands make light work!",
    date: addDays(today, -1),
    priority: "normal",
  },
]

export const scriptures = [
  {
    verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    reference: "John 3:16"
  },
  {
    verse: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    reference: "Proverbs 3:5-6"
  },
  {
    verse: "I can do all things through Christ which strengtheneth me.",
    reference: "Philippians 4:13"
  },
  {
    verse: "The LORD is my shepherd; I shall not want.",
    reference: "Psalm 23:1"
  },
  {
    verse: "Be not overcome of evil, but overcome evil with good.",
    reference: "Romans 12:21"
  },
  {
    verse: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    reference: "Matthew 5:16"
  },
  {
    verse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",
    reference: "Ephesians 2:8"
  },
]
