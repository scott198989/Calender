"use client"

import { useState, useEffect } from "react"
import { BookOpen, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { scriptures } from "@/lib/data"

export function DailyScripture() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Set a random scripture on mount
    setCurrentIndex(Math.floor(Math.random() * scriptures.length))
  }, [])

  const handleNewVerse = () => {
    setCurrentIndex((prev) => (prev + 1) % scriptures.length)
  }

  const currentScripture = scriptures[currentIndex]

  return (
    <Card className="bg-gradient-to-br from-primary-50 via-white to-burgundy-50 border-primary-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-primary-800">
            <BookOpen className="h-5 w-5" />
            Daily Scripture
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNewVerse}
            className="text-primary-600"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="border-l-4 border-primary-500 pl-4 py-2">
          <p className="text-lg italic text-slate-700 mb-3 font-serif leading-relaxed">
            "{currentScripture.verse}"
          </p>
          <footer className="text-sm font-semibold text-primary-700">
            — {currentScripture.reference}
          </footer>
        </blockquote>
      </CardContent>
    </Card>
  )
}
