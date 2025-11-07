"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PremiumHeader } from "@/components/PremiumHeader"
import { HeroSection } from "@/components/HeroSection"
import { Calendar } from "@/components/Calendar"
import { EventList } from "@/components/EventList"
import { Announcements } from "@/components/Announcements"
import { sampleEvents, sampleAnnouncements } from "@/lib/data"
import { Search, Filter, Download, Grid3x3, List, Clock } from "lucide-react"
import * as Tabs from "@radix-ui/react-tabs"

type ViewMode = "month" | "list" | "timeline"

export default function PremiumHome() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("month")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<string>("all")

  const filteredEvents = sampleEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterType === "all" || event.type === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen">
      <PremiumHeader />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Calendar Section */}
        <section id="calendar" className="py-16 bg-white/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
                Church Events Calendar
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Stay connected with all upcoming events, services, and activities at Berean Baptist Church
              </p>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-2xl p-6 mb-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Filter */}
                <div className="flex gap-2">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  >
                    <option value="all">All Events</option>
                    <option value="service">Services</option>
                    <option value="bible-study">Bible Studies</option>
                    <option value="special">Special Events</option>
                    <option value="prayer">Prayer Meetings</option>
                  </select>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-forest-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    <span className="hidden sm:inline">Export</span>
                  </motion.button>
                </div>
              </div>

              {/* View Mode Tabs */}
              <Tabs.Root value={viewMode} onValueChange={(value) => setViewMode(value as ViewMode)}>
                <Tabs.List className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <Tabs.Trigger
                    value="month"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-md transition-all"
                  >
                    <Grid3x3 className="h-4 w-4" />
                    <span>Month</span>
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="list"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-md transition-all"
                  >
                    <List className="h-4 w-4" />
                    <span>List</span>
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="timeline"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-md transition-all"
                  >
                    <Clock className="h-4 w-4" />
                    <span>Timeline</span>
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </motion.div>

            {/* Calendar Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {viewMode === "month" && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Calendar events={filteredEvents} onDateSelect={setSelectedDate} />
                  </div>
                  <div className="lg:col-span-1">
                    <EventList events={filteredEvents} selectedDate={selectedDate} />
                  </div>
                </div>
              )}

              {viewMode === "list" && (
                <div className="max-w-4xl mx-auto">
                  <EventList events={filteredEvents} selectedDate={null} />
                </div>
              )}

              {viewMode === "timeline" && (
                <div className="max-w-4xl mx-auto">
                  <div className="relative pl-8 border-l-4 border-primary-500 dark:border-primary-600">
                    {filteredEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-8 relative"
                      >
                        <div className="absolute -left-10 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-slate-900" />
                        <div className="glass-effect rounded-xl p-6 ml-4 hover:shadow-xl transition-all">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              event.type === 'service' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' :
                              event.type === 'bible-study' ? 'bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-200' :
                              event.type === 'special' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                              'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                            }`}>
                              {event.type.replace('-', ' ')}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
                            <span>📅 {event.date.toLocaleDateString()}</span>
                            <span>🕐 {event.time}</span>
                            {event.location && <span>📍 {event.location}</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Announcements Section */}
        <section id="announcements" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                Latest Announcements
              </h2>
              <Announcements announcements={sampleAnnouncements} />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary-900 to-forest-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Berean Baptist Church</h3>
            <p className="text-primary-200 mb-4">
              "Searching the Scriptures daily" - Acts 17:11
            </p>
            <p className="text-sm text-primary-300">
              © {new Date().getFullYear()} Berean Baptist Church. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
