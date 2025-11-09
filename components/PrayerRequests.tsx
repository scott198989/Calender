import { format } from "date-fns"
import { Heart, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { PrayerRequest } from "@/lib/types"

interface PrayerRequestsProps {
  requests: PrayerRequest[]
}

export function PrayerRequests({ requests }: PrayerRequestsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-burgundy-600" />
          Prayer Requests
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="p-4 rounded-lg bg-gradient-to-r from-burgundy-50 to-purple-50 border border-burgundy-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-burgundy-900">
                    {request.name}
                  </span>
                  {request.urgent && (
                    <Badge variant="prayer" className="bg-red-100 text-red-800 border-red-200">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Urgent
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-slate-500">
                  {format(request.date, "MMM d")}
                </span>
              </div>
              <p className="text-sm text-slate-700">{request.request}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
