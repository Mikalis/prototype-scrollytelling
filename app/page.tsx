'use client'

import { ScrollSection } from '@/components/scroll-section'
import { InteractiveQuiz } from '@/components/interactive-quiz'
import { CompanyStats } from '@/components/company-stats'
import { TeamGreeting } from '@/components/team-greeting'
import { AnimatedVideo } from '@/components/animated-videos'
import { motion } from 'framer-motion'
import { Shield, PiggyBank, TrendingUp, Users, Building, Target, Sparkles, Zap, Coffee, Award, Gift, Star, Coins, Unlock, Home, FileText, Briefcase, Lightbulb } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section with Crazy Animations */}
      <ScrollSection className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <img
                src="/hero-icon.svg"
                alt="Swiss Pension Hero"
                className="w-32 h-32 mx-auto drop-shadow-2xl"
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <motion.span
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #ffffff, #ffcc00)",
                    "linear-gradient(45deg, #ffcc00, #ffffff)",
                    "linear-gradient(45deg, #ffffff, #ffcc00)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent"
              >
                Die 3 Säulen
              </motion.span>
              <br />
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                der Schweiz ⚡
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl mb-12 leading-relaxed font-light"
            >
              Entdecke die super-fancy, interaktive Welt der Schweizer Altersvorsorge! 
              <br />Mit verrückten Animationen, Quizzes und personalisierten Elementen! 🚀
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
                  rotate: 2
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300"
              >
                Quiz starten! 🎮
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  rotate: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Team kennenlernen! 👥
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </ScrollSection>

      {/* Team Greeting Section */}
      <ScrollSection className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <TeamGreeting 
            projectName="Swiss Pension Guide"
            showParticles={true}
          />
        </div>
      </ScrollSection>

      {/* Company Stats Section */}
      <ScrollSection className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <CompanyStats 
            companyName="Unic"
          />
        </div>
      </ScrollSection>

      {/* Interactive Quiz Section */}
      <ScrollSection className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl font-bold text-white mb-4"
            >
              Teste dein Wissen! 🧠⚡
            </motion.h2>
            <p className="text-xl text-white/90">
              Wie gut kennst du die Schweizer Altersvorsorge? Finde es heraus!
            </p>
          </motion.div>
          
          <InteractiveQuiz />
        </div>
      </ScrollSection>

      {/* Enhanced Video Section 1 */}
      <ScrollSection className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              <motion.span
                animate={{ 
                  color: ["#ffffff", "#00ff88", "#0088ff", "#ffffff"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Warum 3 Säulen? 🏛️
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300">
              Die Geschichte hinter dem Schweizer Vorsorgesystem
            </p>
          </motion.div>
          
          <AnimatedVideo
            src="https://replicate.delivery/xezq/xfz0U06bqSw1AyiJsw7LjOjVXOBpmjJfe7K9XtRLifW26q7SB/tmpi29yh_f0.mp4"
            title="Das 3-Säulen-System erklärt"
            description="Eine animierte Reise durch die Schweizer Altersvorsorge"
            className="max-w-4xl mx-auto"
          />
        </div>
      </ScrollSection>

      {/* Säule 1 Section with Enhanced Animation */}
      <ScrollSection className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-8"
            >
              <Shield className="w-24 h-24 mx-auto text-yellow-300 drop-shadow-2xl" />
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6">
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,0,0.5)",
                    "0 0 30px rgba(255,255,0,0.8)",
                    "0 0 10px rgba(255,255,0,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                1. Säule: AHV/IV 🛡️
              </motion.span>
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed">
              Die staatliche Vorsorge - dein Sicherheitsnetz für das Alter!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Für alle da", desc: "Alle Einwohner sind versichert" },
                { icon: Shield, title: "Grundschutz", desc: "Existenzminimum gesichert" },
                { icon: Building, title: "Staatlich", desc: "Vom Bund garantiert" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Säule 2 Section */}
      <ScrollSection className="py-20 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <Building className="w-24 h-24 mx-auto text-yellow-300 drop-shadow-2xl" />
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6">
              <motion.span
                animate={{ 
                  color: ["#ffffff", "#00ff88", "#ffffff"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2. Säule: Pensionskasse 🏢
              </motion.span>
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed">
              Die berufliche Vorsorge - zusammen mit dem Arbeitgeber vorsorgen!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Obligatorisch</h3>
                <p className="text-white/80">Für alle Arbeitnehmer ab CHF 22,050 Jahreslohn</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <PiggyBank className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Gemeinsam sparen</h3>
                <p className="text-white/80">Arbeitgeber und Arbeitnehmer zahlen je die Hälfte</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Säule 3 Section */}
      <ScrollSection className="py-20 bg-gradient-to-br from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                filter: [
                  "drop-shadow(0 0 10px rgba(255,255,0,0.5))",
                  "drop-shadow(0 0 30px rgba(255,255,0,0.8))",
                  "drop-shadow(0 0 10px rgba(255,255,0,0.5))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Target className="w-24 h-24 mx-auto text-yellow-300" />
            </motion.div>
            
            <h2 className="text-5xl font-bold mb-6">
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-white via-yellow-300 to-white bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                3. Säule: Private Vorsorge 🎯
              </motion.span>
            </h2>
            
            <p className="text-xl mb-12 leading-relaxed">
              Die private Vorsorge - deine individuelle Zusatzversicherung!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-3xl font-bold mb-4 text-yellow-300">Säule 3a</h3>
                <ul className="text-left space-y-3">
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
                    Steuervorteile
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Zap className="w-5 h-5 mr-3 text-yellow-300" />
                    Gebundene Vorsorge
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Gift className="w-5 h-5 mr-3 text-yellow-300" />
                    Bis CHF 7,056/Jahr
                  </motion.li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-3xl font-bold mb-4 text-yellow-300">Säule 3b</h3>
                <ul className="text-left space-y-3">
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Star className="w-5 h-5 mr-3 text-yellow-300" />
                    Freie Vorsorge
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Coffee className="w-5 h-5 mr-3 text-yellow-300" />
                    Flexibel
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                  >
                    <Award className="w-5 h-5 mr-3 text-yellow-300" />
                    Keine Limits
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ScrollSection>



      {/* Enhanced Video Section 2 */}
      <ScrollSection className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              <motion.span
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #ff0080, #00ff88)",
                    "linear-gradient(45deg, #00ff88, #0088ff)",
                    "linear-gradient(45deg, #0088ff, #ff0080)",
                    "linear-gradient(45deg, #ff0080, #00ff88)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-r bg-clip-text text-transparent"
              >
                Deine Vorsorge-Zukunft! 🚀
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300">
              So startest du optimal in deine finanzielle Zukunft
            </p>
          </motion.div>
          
          <AnimatedVideo
            src="https://replicate.delivery/xezq/IZvJUH7VaYo9BBq9lhMjAHXCz1WJUuOWyXx2fFGcKXcrlaYKA/tmpxsomu815.mp4"
            title="Jetzt loslegen!"
            description="Praktische Tipps für den Einstieg in die private Vorsorge"
            className="max-w-4xl mx-auto"
          />
        </div>
      </ScrollSection>

      {/* Call to Action Section */}
      <ScrollSection className="py-20 bg-gradient-to-br from-red-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl font-bold mb-6"
            >
              Bereit für deine Vorsorge-Reise? 🎢
            </motion.h2>
            
            <p className="text-xl mb-12 leading-relaxed">
              Mit den 3 Säulen der Schweiz bist du optimal für die Zukunft gerüstet. 
              Starte jetzt und profitiere von den Vorteilen!
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 25px 50px rgba(255,255,255,0.3)",
                  rotate: 3
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity }
                }}
                className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300"
              >
                Jetzt starten! 🚀
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  rotate: -3
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, 5, 0],
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, delay: 1 }
                }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Mehr erfahren 📚
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </ScrollSection>
    </main>
  )
} 