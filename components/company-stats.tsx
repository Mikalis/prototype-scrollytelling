'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Building, Users, MapPin, Briefcase, Award, Coffee } from 'lucide-react'

interface Stat {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
  color: string
  bgColor: string
}

interface CompanyStatsProps {
  companyName?: string
  stats?: Partial<Stat>[]
}

export function CompanyStats({ 
  companyName = "Unic",
  stats: customStats
}: CompanyStatsProps) {
  const [counters, setCounters] = useState<number[]>([])

  const defaultStats: Stat[] = [
    {
      icon: <Users className="w-8 h-8" />,
      label: "Mitarbeitende",
      value: 180,
      suffix: "+",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: "Standorte",
      value: 4,
      suffix: "",
      color: "text-green-600", 
      bgColor: "bg-green-100"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      label: "Projekte",
      value: 250,
      suffix: "+",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: "Awards",
      value: 15,
      suffix: "",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      label: "Kaffee/Tag",
      value: 420,
      suffix: " Tassen",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Building className="w-8 h-8" />,
      label: "Jahre Erfahrung",
      value: 25,
      suffix: "+",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ]

  const stats = customStats ? customStats.map((custom, index) => ({
    ...defaultStats[index],
    ...custom
  })) : defaultStats

  useEffect(() => {
    const initialCounters = stats.map(() => 0)
    setCounters(initialCounters)

    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        let current = 0
        const increment = stat.value / 60 // 60 frames for 1 second animation
        
        const counter = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(counter)
          }
          
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = Math.floor(current)
            return newCounters
          })
        }, 16) // ~60fps
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [stats])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto"
    >
      {/* Company Header */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {companyName} in Zahlen
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <div className={`${stat.bgColor} rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-300 group-hover:shadow-xl`}>
              {/* Floating Animation Background */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-4 translate-x-4"
              />
              
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`${stat.color} mb-4 relative z-10`}
              >
                {stat.icon}
              </motion.div>

              {/* Counter */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                className="mb-2 relative z-10"
              >
                <span className="text-3xl font-bold text-gray-800">
                  {counters[index] || 0}
                </span>
                <span className="text-lg text-gray-600">
                  {stat.suffix}
                </span>
              </motion.div>

              {/* Label */}
              <p className="text-gray-600 font-medium relative z-10">
                {stat.label}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Mehr über {companyName} erfahren ✨
        </motion.button>
      </motion.div>
    </motion.div>
  )
} 