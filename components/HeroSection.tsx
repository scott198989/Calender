"use client"

import { motion } from "framer-motion"
import { BookOpen, Calendar as CalendarIcon, Users, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { scriptures } from "@/lib/data"

export function HeroSection() {
  const [currentScripture, setCurrentScripture] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScripture((prev) => (prev + 1) % scriptures.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: CalendarIcon, title: "Event Calendar", description: "Stay updated with all church activities" },
    { icon: BookOpen, title: "Bible Study", description: "Weekly studies and scripture readings" },
    { icon: Users, title: "Community", description: "Fellowship and grow together" },
    { icon: Heart, title: "Worship", description: "Meaningful worship experiences" },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Welcome to</span>
              <br />
              <span className="text-gray-900 dark:text-white">Berean Baptist Church</span>
            </h2>
          </motion.div>

          {/* Scripture Display */}
          <motion.div
            key={currentScripture}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-12 shadow-2xl"
          >
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
            <blockquote className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-4 font-serif leading-relaxed">
              "{scriptures[currentScripture].verse}"
            </blockquote>
            <footer className="text-lg font-semibold text-primary-700 dark:text-primary-400">
              — {scriptures[currentScripture].reference}
            </footer>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#calendar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-forest-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <CalendarIcon className="h-5 w-5" />
              View Events Calendar
            </motion.a>
            <motion.a
              href="#announcements"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Heart className="h-5 w-5" />
              Latest Updates
            </motion.a>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 text-center hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-forest-500 rounded-full mb-4 shadow-lg">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
