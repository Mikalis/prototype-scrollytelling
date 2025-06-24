'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

interface AnimatedVideoProps {
  src: string
  title: string
  description?: string
  autoplay?: boolean
  className?: string
}

export function AnimatedVideo({ 
  src, 
  title, 
  description,
  autoplay = true,
  className = ""
}: AnimatedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const fullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group ${className}`}
    >
      {/* Glowing Background */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.8 : 0.4
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Video Container */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateY: 2,
          rotateX: -2,
          transition: { duration: 0.3 }
        }}
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform-gpu perspective-1000"
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Video Element */}
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoplay}
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={fullscreen}
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
          >
            <Maximize className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 left-4 right-4"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
            <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
            {description && (
              <p className="text-white/80 text-sm">{description}</p>
            )}
          </div>
        </motion.div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-l-2 border-t-2 border-blue-400/50 rounded-tl-2xl"
          />
        </div>
        <div className="absolute top-0 right-0 w-8 h-8">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-r-2 border-t-2 border-purple-400/50 rounded-tr-2xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-l-2 border-b-2 border-green-400/50 rounded-bl-2xl"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-r-2 border-b-2 border-pink-400/50 rounded-br-2xl"
          />
        </div>
      </motion.div>

      {/* Play State Indicator */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-6"
            >
              <Play className="w-12 h-12 text-white ml-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 