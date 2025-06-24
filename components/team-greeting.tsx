'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Star, Sparkles, Coffee, Zap } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  message: string
  emoji: string
  color: string
}

interface TeamGreetingProps {
  projectName?: string
  teamMembers?: TeamMember[]
  showParticles?: boolean
}

export function TeamGreeting({ 
  projectName = "Swiss Pension Guide",
  teamMembers: customMembers,
  showParticles = true
}: TeamGreetingProps) {
  const [currentMember, setCurrentMember] = useState(0)
  const [showGreeting, setShowGreeting] = useState(false)

  const defaultMembers: TeamMember[] = [
    {
      name: "Sarah",
      role: "UX Designer",
      message: "Wir freuen uns riesig auf die Zusammenarbeit! 🚀",
      emoji: "👩‍🎨",
      color: "from-pink-400 to-purple-500"
    },
    {
      name: "Marco",
      role: "Frontend Dev",
      message: "Lass uns was Cooles bauen! ⚡",
      emoji: "👨‍💻", 
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Lisa",
      role: "Project Manager",
      message: "Bereit für ein fantastisches Projekt! ✨",
      emoji: "👩‍💼",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "David",
      role: "Backend Dev",
      message: "Die Technik läuft wie geschmiert! 🔧",
      emoji: "👨‍🔧",
      color: "from-orange-400 to-red-500"
    }
  ]

  const members = customMembers || defaultMembers

  useEffect(() => {
    setShowGreeting(true)
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % members.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [members.length])

  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: "100%",
            scale: 0
          }}
          animate={{
            y: "-10%",
            scale: [0, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto overflow-hidden"
    >
      {showParticles && <Particles />}
      
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block text-6xl mb-4"
        >
          👋
        </motion.div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Hallo vom {projectName} Team!
        </h2>
        <p className="text-gray-600">
          Wir stellen uns kurz vor...
        </p>
      </motion.div>

      {/* Team Member Carousel */}
      <div className="relative h-64 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember}
            initial={{ opacity: 0, x: 300, rotateY: 90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -300, rotateY: -90 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`bg-gradient-to-r ${members[currentMember].color} rounded-2xl p-6 text-white shadow-2xl max-w-md mx-auto transform perspective-1000`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">
                  {members[currentMember].emoji}
                </div>
                <h3 className="text-2xl font-bold mb-1">
                  {members[currentMember].name}
                </h3>
                <p className="text-white/80 mb-4 font-medium">
                  {members[currentMember].role}
                </p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/20 rounded-lg p-4 backdrop-blur-sm"
                >
                  <p className="text-lg font-medium">
                    "{members[currentMember].message}"
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Member Indicators */}
      <div className="flex justify-center space-x-2 mb-8 relative z-10">
        {members.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentMember(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentMember 
                ? 'bg-indigo-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Action Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex justify-center space-x-4 relative z-10"
      >
        {[
          { icon: Heart, color: "text-red-500", delay: 0 },
          { icon: Star, color: "text-yellow-500", delay: 0.1 },
          { icon: Sparkles, color: "text-purple-500", delay: 0.2 },
          { icon: Coffee, color: "text-orange-500", delay: 0.3 },
          { icon: Zap, color: "text-blue-500", delay: 0.4 }
        ].map(({ icon: Icon, color, delay }, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: delay + 1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.5,
              rotate: 15,
              transition: { duration: 0.2 }
            }}
            className={`${color} cursor-pointer`}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center mt-8 relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 inline-block">
          <p className="text-sm text-gray-600 mb-1">💡 Fun Fact</p>
          <p className="text-gray-800 font-medium">
            Unser Team trinkt täglich ca. 42 Tassen Kaffee! ☕
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
} 