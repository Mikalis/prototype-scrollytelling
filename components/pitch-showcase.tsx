'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, MapPin, Briefcase, Calendar, Heart, Zap, Trophy, Star, Code, Palette, Rocket } from 'lucide-react'

interface PitchMember {
  name: string
  role: string
  avatar: string
  message: string
}

interface PitchShowcaseProps {
  title?: string
  subtitle?: string
  teamMembers?: PitchMember[]
  projectStats?: {
    duration: string
    teamSize: number
    technologies: string[]
    specialFeatures: string[]
  }
  customMessage?: string
}

export function PitchShowcase({
  title = "Unser Team für dieses Projekt",
  subtitle = "Gemeinsam entwickeln wir innovative Lösungen",
  teamMembers: customMembers,
  projectStats: customStats,
  customMessage = "Wir freuen uns darauf, mit euch zu arbeiten! 🚀"
}: PitchShowcaseProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [showHearts, setShowHearts] = useState(false)

  const defaultMembers: PitchMember[] = [
    {
      name: "Anna",
      role: "Lead Developer",
      avatar: "👩‍💻",
      message: "Ich bringe 5+ Jahre React-Erfahrung mit!"
    },
    {
      name: "Max",
      role: "UI/UX Designer", 
      avatar: "👨‍🎨",
      message: "Ästhetik und Funktionalität in perfekter Harmonie!"
    },
    {
      name: "Sophie",
      role: "Project Manager",
      avatar: "👩‍💼", 
      message: "Ich sorge dafür, dass alles reibungslos läuft!"
    },
    {
      name: "David",
      role: "Backend Engineer",
      avatar: "👨‍🔧",
      message: "Robuste APIs und skalierbare Architekturen sind mein Ding!"
    }
  ]

  const defaultStats = {
    duration: "8 Wochen",
    teamSize: 4,
    technologies: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS"],
    specialFeatures: ["3D Animationen", "Interaktive Quizzes", "Responsive Design", "Performance Optimiert"]
  }

  const members = customMembers || defaultMembers
  const stats = customStats || defaultStats

  const sections = [
    { title: "Team", icon: Users },
    { title: "Projekt", icon: Briefcase },
    { title: "Grüße", icon: Heart }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [sections.length])

  const triggerHearts = () => {
    setShowHearts(true)
    setTimeout(() => setShowHearts(false), 3000)
  }

  const FloatingHearts = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: "100%",
            scale: 0,
            rotate: 0
          }}
          animate={{
            y: "-20%",
            scale: [0, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 1,
            ease: "easeOut"
          }}
          className="absolute text-2xl"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 max-w-6xl mx-auto overflow-hidden shadow-2xl"
    >
      {showHearts && <FloatingHearts />}
      
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </motion.div>

      {/* Section Navigation */}
      <div className="flex justify-center mb-8 relative z-10">
        {sections.map((section, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveSection(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center space-x-2 px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md'
            }`}
          >
            <section.icon className="w-5 h-5" />
            <span className="font-medium">{section.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <motion.div
            key="team"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl"
                    >
                      {member.avatar}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-indigo-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 italic"
                  >
                    "{member.message}"
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 1 && (
          <motion.div
            key="project"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-indigo-500" />
                  <h3 className="text-xl font-bold text-gray-800">Projekt Details</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dauer:</span>
                    <span className="font-medium text-indigo-600">{stats.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Größe:</span>
                    <span className="font-medium text-indigo-600">{stats.teamSize} Personen</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-bold text-gray-800">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stats.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-800">Special Features</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {stats.specialFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center space-x-2"
                  >
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 2 && (
          <motion.div
            key="greetings"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-10"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-6"
            >
              🤝
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-6 text-gray-800"
            >
              {customMessage}
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-4 mb-8"
            >
              {[Trophy, Star, Heart, Rocket].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                  className="text-indigo-500"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerHearts}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's start! 💖
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl -z-10" />
    </motion.div>
  )
} 