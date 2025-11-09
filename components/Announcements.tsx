import { format } from "date-fns"
import { Megaphone, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Announcement } from "@/lib/types"

interface AnnouncementsProps {
  announcements: Announcement[]
}

export function Announcements({ announcements }: AnnouncementsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-gold-600" />
          Church Announcements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="p-4 rounded-lg bg-gradient-to-r from-gold-50 to-yellow-50 border border-gold-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gold-900">
                    {announcement.title}
                  </span>
                  {announcement.priority === "high" && (
                    <AlertTriangle className="h-4 w-4 text-gold-700" />
                  )}
                </div>
                <span className="text-xs text-slate-500">
                  {format(announcement.date, "MMM d")}
                </span>
              </div>
              <p className="text-sm text-slate-700">{announcement.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
