export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Diese Seite konnte nicht gefunden werden.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  )
} 