"use client"

import { useState } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import { ChurchEvent } from "@/lib/types"

interface CalendarProps {
  events: ChurchEvent[]
  onDateSelect?: (date: Date) => void
}

export function Calendar({ events, onDateSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.date, day))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    onDateSelect?.(date)
  }

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-primary-100">
      {/* Calendar Header */}
      <div className="bg-gradient-faithful p-6">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={previousMonth}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-2xl font-bold text-white">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextMonth}
            className="text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day Names */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-primary-700 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const dayEvents = getEventsForDay(day)
            const isCurrentMonth = isSameMonth(day, currentMonth)
            const isSelected = selectedDate && isSameDay(day, selectedDate)
            const isCurrentDay = isToday(day)

            return (
              <button
                key={day.toString()}
                onClick={() => handleDateClick(day)}
                className={cn(
                  "min-h-[80px] p-2 rounded-lg border-2 transition-all duration-200",
                  "hover:border-primary-400 hover:shadow-md",
                  isCurrentMonth ? "bg-white" : "bg-slate-50",
                  isSelected && "border-primary-600 bg-primary-50",
                  isCurrentDay && "border-burgundy-400 bg-burgundy-50",
                  !isCurrentMonth && "text-slate-400"
                )}
              >
                <div className="flex flex-col h-full">
                  <span
                    className={cn(
                      "text-sm font-semibold mb-1",
                      isCurrentDay && "text-burgundy-700"
                    )}
                  >
                    {format(day, "d")}
                  </span>
                  <div className="flex flex-col gap-1">
                    {dayEvents.slice(0, 2).map((event) => (
                      <Badge
                        key={event.id}
                        variant={event.type}
                        className="text-[10px] truncate"
                      >
                        {event.title}
                      </Badge>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[10px] text-slate-500">
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
