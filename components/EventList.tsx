"use client"

import { format, isSameDay } from "date-fns"
import { Calendar, Clock, MapPin, Repeat } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { ChurchEvent } from "@/lib/types"

interface EventListProps {
  events: ChurchEvent[]
  selectedDate?: Date | null
}

export function EventList({ events, selectedDate }: EventListProps) {
  const filteredEvents = selectedDate
    ? events.filter(event => isSameDay(event.date, selectedDate))
    : events

  const sortedEvents = [...filteredEvents].sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-primary-800">
        {selectedDate ? `Events for ${format(selectedDate, "MMMM d, yyyy")}` : "Upcoming Events"}
      </h3>

      {sortedEvents.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-slate-500">
            No events scheduled for this date
          </CardContent>
        </Card>
      ) : (
        sortedEvents.map((event) => (
          <Card key={event.id} className="hover:border-primary-300 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </div>
                <Badge variant={event.type}>
                  {event.type.replace("-", " ")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{format(event.date, "EEEE, MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.recurring && (
                  <div className="flex items-center gap-2 text-primary-600">
                    <Repeat className="h-4 w-4" />
                    <span>Recurring Event</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
