"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Calendar } from "@/components/Calendar"
import { EventList } from "@/components/EventList"
import { Announcements } from "@/components/Announcements"
import { DailyScripture } from "@/components/DailyScripture"
import { sampleEvents, sampleAnnouncements } from "@/lib/data"

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Daily Scripture Banner */}
        <section id="scripture" className="mb-8">
          <DailyScripture />
        </section>

        {/* Main Calendar Section */}
        <section id="calendar" className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Calendar events={sampleEvents} onDateSelect={setSelectedDate} />
            </div>
            <div className="lg:col-span-1">
              <EventList events={sampleEvents} selectedDate={selectedDate} />
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="max-w-3xl mx-auto">
          <Announcements announcements={sampleAnnouncements} />
        </section>
      </main>

      <footer className="bg-primary-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-200">
            © {new Date().getFullYear()} Berean Baptist Church
          </p>
          <p className="text-sm text-primary-300 mt-2">
            Searching the Scriptures daily
          </p>
        </div>
      </footer>
    </div>
  )
}
