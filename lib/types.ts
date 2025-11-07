export type EventType = "service" | "bible-study" | "special" | "prayer"

export interface ChurchEvent {
  id: string
  title: string
  description: string
  date: Date
  time: string
  type: EventType
  location?: string
  recurring?: boolean
}

export interface PrayerRequest {
  id: string
  name: string
  request: string
  date: Date
  urgent: boolean
}

export interface Announcement {
  id: string
  title: string
  content: string
  date: Date
  priority: "normal" | "high"
}
