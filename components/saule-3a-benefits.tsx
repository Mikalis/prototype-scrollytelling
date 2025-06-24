'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Shield, PiggyBank, Home, Briefcase, Plane, Calculator, Zap, Star, Award } from 'lucide-react'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: string
  color: string
  bgColor: string
}

export function Saule3aBenefits() {
  const [activeBenefit, setActiveBenefit] = useState(0)

  const benefits: Benefit[] = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Steuervorteile 2025",
      description: "Spare bis zu CHF 7,258 pro Jahr und reduziere deine Steuern um bis zu 35%",
      highlight: "CHF 7,258",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Höhere Rendite-Chancen",
      description: "Mit Depotlösungen und Anlagefonds deutlich höhere Renditen als auf dem Sparkonto",
      highlight: "4-6% p.a.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Versicherungsschutz",
      description: "Bei Sparversicherungen zahlt die Versicherung bei Erwerbsunfähigkeit für dich weiter",
      highlight: "100% geschützt",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Eigenheim-Finanzierung",
      description: "Nutze dein 3a-Guthaben für den Kauf von Wohneigentum - einer der drei Vorbezugsgründe",
      highlight: "Voll verfügbar",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Selbständigkeit",
      description: "Finanziere deine Selbständigkeit mit deinem 3a-Guthaben als Startkapital",
      highlight: "Unternehmer-Boost",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Gestaffelte Auszahlung",
      description: "Bei hohen Summen ab CHF 100,000: Breche die Steuerprogression mit mehreren 3a-Konten",
      highlight: "Steuer-Hack",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ]

  const comparisonData = [
    { aspect: "Steuervorteile", saule3a: "✅ Vollständig absetzbar", saule3b: "❌ Nicht absetzbar" },
    { aspect: "Flexibilität", saule3a: "⚠️ Gebunden bis Pension", saule3b: "✅ Jederzeit verfügbar" },
    { aspect: "Maximalbetrag", saule3a: "CHF 7,258 (mit PK)", saule3b: "Unbegrenzt" },
    { aspect: "Vorbezug", saule3a: "3 Gründe erlaubt", saule3b: "Immer möglich" },
    { aspect: "Rendite-Potenzial", saule3a: "✅ Hoch mit Fonds", saule3b: "✅ Hoch mit Fonds" }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Benefits Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.2 }
            }}
            onClick={() => setActiveBenefit(index)}
            className={`${benefit.bgColor} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeBenefit === index ? 'ring-4 ring-blue-300 shadow-2xl' : ''
            }`}
          >
            <motion.div
              animate={{ 
                rotate: activeBenefit === index ? [0, 15, -15, 0] : [0, 5, -5, 0],
                scale: activeBenefit === index ? 1.1 : 1
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`${benefit.color} mb-4`}
            >
              {benefit.icon}
            </motion.div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{benefit.description}</p>
            
            {benefit.highlight && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${benefit.color} bg-white/80`}
              >
                {benefit.highlight}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* 2025 Updates Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white mb-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-4 -translate-x-4" />
        
        <div className="relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block text-4xl mb-4"
          >
            🎉
          </motion.div>
          <h3 className="text-3xl font-bold mb-4">Neue Limits für 2025!</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Mit Pensionskasse</h4>
              <p className="text-3xl font-bold text-yellow-300">CHF 7,258</p>
              <p className="text-sm opacity-90">+CHF 202 mehr als 2024!</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Ohne Pensionskasse</h4>
              <p className="text-3xl font-bold text-yellow-300">CHF 36,288</p>
              <p className="text-sm opacity-90">20% des Nettoerwerbseinkommens</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Säule 3a vs 3b Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-8"
      >
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Säule 3a vs 3b: Der direkte Vergleich
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold text-gray-800">Aspekt</th>
                <th className="text-center py-4 px-6 font-bold text-green-600">Säule 3a (gebunden)</th>
                <th className="text-center py-4 px-6 font-bold text-blue-600">Säule 3b (frei)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-gray-800">{row.aspect}</td>
                  <td className="py-4 px-6 text-center text-sm">{row.saule3a}</td>
                  <td className="py-4 px-6 text-center text-sm">{row.saule3b}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full">
            <Star className="w-5 h-5" />
            <span className="font-medium">
              Tipp: Erst Säule 3a maximal ausschöpfen, dann Säule 3b nutzen!
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 