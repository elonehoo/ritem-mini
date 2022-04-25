import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import Footer from '~/components/Footer'
import '~/Index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="font-sans px-4 py-10 text-center gray-700 dark:gray-200">
      <App />
      <Footer />
    </main>
  </React.StrictMode>
)
