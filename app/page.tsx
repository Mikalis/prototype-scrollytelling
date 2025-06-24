import { ScrollSection } from '@/components/scroll-section'
import { Button } from '@/components/button'
import { 
  Coins, 
  Shield, 
  TrendingUp, 
  Target, 
  Unlock,
  Home,
  FileText,
  Briefcase,
  Lightbulb
} from 'lucide-react'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <ScrollSection>
        <div className="relative">
          <div className="w-72 h-72 mx-auto mb-8 animate-float">
            <img 
              src="/hero-icon.svg" 
              alt="3-Säulen-System Schweiz" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Deine Zukunft, dein Plan
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            So funktioniert die 3. Säule in der Schweiz – spannend & verständlich erklärt.
          </p>
        </div>
      </ScrollSection>

      {/* Why Three Pillars */}
      <ScrollSection>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Warum drei Säulen?
          </h2>
          
          {/* Video 1 */}
          <div className="w-full max-w-4xl mx-auto">
            <video 
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero-icon.svg"
            >
              <source 
                src="https://replicate.delivery/xezq/xfz0U06bqSw1AyiJsw7LjOjVXOBpmjJfe7K9XtRLifW26q7SB/tmpi29yh_f0.mp4" 
                type="video/mp4" 
              />
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ein Haus braucht ein stabiles Fundament – genauso wie deine Altersvorsorge.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Die 3 Säulen: Staat, Arbeitgeber und du. Gemeinsam bilden sie deine sichere Zukunft.
          </p>
        </div>
      </ScrollSection>

      {/* Pillar 3a */}
      <ScrollSection>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Die Säule 3a – Dein steuerfreier Joker
          </h2>
          <ul className="space-y-4 text-left max-w-2xl">
            <li className="flex items-start space-x-3">
              <Coins className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Spare Steuern jedes Jahr</span>
            </li>
            <li className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Kapital ist gebunden, aber sicher</span>
            </li>
            <li className="flex items-start space-x-3">
              <TrendingUp className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Investiere clever mit Fonds & Versicherungen</span>
            </li>
            <li className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Ideal für Ruhestand, Eigenheim oder Frühpension</span>
            </li>
          </ul>
        </div>
      </ScrollSection>

      {/* Pillar 3b */}
      <ScrollSection>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Die Säule 3b – So flexibel wie dein Leben
          </h2>
          <ul className="space-y-4 text-left max-w-2xl">
            <li className="flex items-start space-x-3">
              <Unlock className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Frei einzahlbar, frei verfügbar</span>
            </li>
            <li className="flex items-start space-x-3">
              <Home className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Ideal für Wohneigentum oder Familie</span>
            </li>
            <li className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Keine Steuerabzüge, aber volle Freiheit</span>
            </li>
            <li className="flex items-start space-x-3">
              <Briefcase className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-lg">Kombinierbar mit Lebensversicherungen</span>
            </li>
          </ul>
        </div>
      </ScrollSection>

      {/* Comparison Table */}
      <ScrollSection>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Der direkte Vergleich
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Merkmal</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Säule 3a</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Säule 3b</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Steuervorteil</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Ja</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-medium">Nein</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Einzahlungslimit</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-medium">Ja</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Nein</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Verfügbar</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Ab 5 Jahre vor Rente</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Jederzeit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Flexibilität</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-medium">Geringer</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Hoch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScrollSection>

      {/* Tip Section */}
      <ScrollSection>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Unser Tipp:
          </h2>
          <div className="flex items-start space-x-4 max-w-2xl mx-auto">
            <Lightbulb className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" />
            <p className="text-lg text-gray-600 text-left">
              Nutze zuerst 3a für maximale Steuervorteile – dann 3b für persönliche Wünsche.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bereit loszulegen?
          </h2>
          
          {/* Video 2 */}
          <div className="w-full max-w-4xl mx-auto">
            <video 
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero-icon.svg"
            >
              <source 
                src="https://replicate.delivery/xezq/IZvJUH7VaYo9BBq9lhMjAHXCz1WJUuOWyXx2fFGcKXcrlaYKA/tmpxsomu815.mp4" 
                type="video/mp4" 
              />
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Je früher du startest, desto mehr Zinseszins.
          </p>
          <Button
            href="https://www.zurich.ch/de/privatkunden/vorsorge-und-anlegen/3-saeule"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Jetzt Vorsorge planen
          </Button>
        </div>
      </ScrollSection>
    </main>
  )
} 