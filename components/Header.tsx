import { Church, Calendar, Heart, BookOpen, Menu } from "lucide-react"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="bg-gradient-faithful text-white shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <Church className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Berean Baptist Church
              </h1>
              <p className="text-primary-100 text-sm mt-1">
                "These were more noble... they received the word with all readiness" - Acts 17:11
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <nav className="mt-6 hidden lg:flex items-center gap-6 text-sm">
          <a
            href="#calendar"
            className="flex items-center gap-2 hover:text-primary-200 transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Calendar
          </a>
          <a
            href="#scripture"
            className="flex items-center gap-2 hover:text-primary-200 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Daily Scripture
          </a>
        </nav>
      </div>
    </header>
  )
}
