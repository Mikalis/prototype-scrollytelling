'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Trophy, Sparkles } from 'lucide-react'
import Confetti from 'react-confetti'

interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: QuizQuestion[] = [
  {
    question: "Welche der folgenden ist KEINE der 3 Säulen?",
    options: [
      "Staatliche Vorsorge (AHV/IV)",
      "Berufliche Vorsorge (Pensionskasse)",
      "Private Vorsorge (3. Säule)",
      "Crypto-Vorsorge (Bitcoin)"
    ],
    correct: 3,
    explanation: "Die 3 Säulen bestehen aus staatlicher, beruflicher und privater Vorsorge. Crypto ist keine offizielle Säule! 🚀"
  },
  {
    question: "Was ist der Hauptvorteil der Säule 3a?",
    options: [
      "Kostenlose Pizza 🍕",
      "Steuervorteile",
      "Gratis Netflix",
      "Lebenslanger Urlaub"
    ],
    correct: 1,
    explanation: "Steuervorteile sind der Hauptgrund! Du kannst bis zu CHF 7'056 pro Jahr von den Steuern abziehen. 💰"
  },
  {
    question: "Wann kannst du normalerweise auf die Säule 3a zugreifen?",
    options: [
      "Sofort, für Notfall-Shopping 🛍️",
      "5 Jahre vor Pensionierung",
      "Nur am Wochenende",
      "Nach dem ersten Date"
    ],
    correct: 1,
    explanation: "Du kannst frühestens 5 Jahre vor der ordentlichen Pensionierung darauf zugreifen. Geduld zahlt sich aus! ⏰"
  }
]

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center"
      >
        {showConfetti && <Confetti />}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <Trophy className="w-16 h-16 text-yellow-300" />
        </motion.div>
        <h3 className="text-3xl font-bold mb-4">Quiz abgeschlossen! 🎉</h3>
        <p className="text-xl mb-6">
          Du hast {score} von {questions.length} Fragen richtig beantwortet!
        </p>
        <div className="text-lg mb-6">
          {score === questions.length && "🏆 Perfekt! Du bist ein Vorsorge-Experte!"}
          {score === questions.length - 1 && "🌟 Fantastisch! Fast perfekt!"}
          {score <= questions.length - 2 && "📚 Gut gemacht! Es gibt noch Raum für Verbesserungen."}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetQuiz}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Nochmal versuchen
        </motion.button>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      {showConfetti && <Confetti />}
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Frage {currentQuestion + 1} von {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          {questions[currentQuestion].question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => !showResult && handleAnswer(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                showResult
                  ? index === questions[currentQuestion].correct
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : index === selectedAnswer
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-500'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showResult && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {index === questions[currentQuestion].correct ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : index === selectedAnswer ? (
                      <XCircle className="w-6 h-6 text-red-500" />
                    ) : null}
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
            >
              <div className="flex items-start space-x-2">
                <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 font-medium">
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Button */}
        {showResult && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextQuestion}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            {currentQuestion < questions.length - 1 ? 'Nächste Frage' : 'Quiz beenden'}
          </motion.button>
        )}
      </motion.div>
    </div>
  )
} 