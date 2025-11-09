import { ChurchEvent, PrayerRequest, Announcement } from "./types"
import { addDays, setHours, setMinutes } from "date-fns"

const today = new Date()

export const sampleEvents: ChurchEvent[] = [
  {
    id: "1",
    title: "Sunday Morning Bible Study",
    description: "In-depth study of God's Word for all ages",
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())),
    time: "9:30 AM - 10:15 AM",
    type: "bible-study",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "2",
    title: "Sunday Morning Service",
    description: "Join us for worship, praise, and preaching from God's Word",
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())),
    time: "10:30 AM - 12:00 PM",
    type: "service",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "3",
    title: "Kings Kids Church",
    description: "Dynamic children's ministry during morning service",
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())),
    time: "10:30 AM - 12:00 PM",
    type: "special",
    location: "Children's Wing",
    recurring: true,
  },
  {
    id: "4",
    title: "Sunday Evening Service",
    description: "Evening worship and fellowship",
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - today.getDay())),
    time: "6:00 PM - 7:30 PM",
    type: "service",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "5",
    title: "Wednesday Night Service",
    description: "Midweek Bible study and prayer meeting",
    date: addDays(today, (3 - today.getDay() + 7) % 7 || 7),
    time: "7:00 PM - 8:30 PM",
    type: "bible-study",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "6",
    title: "Men's Prayer Breakfast",
    description: "Fellowship, prayer, and encouragement for men",
    date: addDays(today, (6 - today.getDay() + 7) % 7 || 7),
    time: "7:30 AM - 9:00 AM",
    type: "prayer",
    location: "Fellowship Hall",
    recurring: true,
  },
  {
    id: "7",
    title: "Monthly Communion",
    description: "First Sunday of each month - Observance of the Lord's Supper",
    date: addDays(today, 3),
    time: "During Morning Service",
    type: "special",
    location: "Main Sanctuary",
    recurring: true,
  },
  {
    id: "8",
    title: "Missionary Speaker",
    description: "Guest missionary presents ministry update and opportunities",
    date: addDays(today, 14),
    time: "10:30 AM & 6:00 PM",
    type: "special",
    location: "Main Sanctuary",
    recurring: false,
  },
  {
    id: "9",
    title: "Special Guest Speaker",
    description: "Visiting evangelist Dr. John Smith",
    date: addDays(today, 21),
    time: "10:30 AM - 12:00 PM",
    type: "special",
    location: "Main Sanctuary",
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
