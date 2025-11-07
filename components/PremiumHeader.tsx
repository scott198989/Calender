"use client"

import { Church, Calendar, BookOpen, Search, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { DarkModeToggle } from "./DarkModeToggle"

export function PremiumHeader() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full glass-effect shadow-xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Church Name */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-forest-500 rounded-xl blur-lg opacity-50" />
              <div className="relative bg-gradient-to-br from-primary-600 to-forest-600 p-3 rounded-xl shadow-lg">
                <Church className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">
                Berean Baptist Church
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                "Searching the Scriptures daily" - Acts 17:11
              </p>
            </div>
          </motion.div>

          {/* Navigation and Controls */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-4 mr-4">
              <a
                href="#calendar"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </a>
              <a
                href="#scripture"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Scripture</span>
              </a>
            </nav>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
