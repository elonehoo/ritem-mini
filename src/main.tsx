import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from '~/pages/index'
import Footer from '~/components/Footer'
import '~/style/Index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="font-sans px-4 py-10 text-center gray-700 dark:gray-200">
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Footer />
    </main>
  </React.StrictMode>
)
