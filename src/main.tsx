import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '~/pages/index'
import Hi from '~/pages/hi/name'
import All from '~/pages/all/all'
import Footer from '~/components/Footer'
import '~/style/Index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="font-sans px-4 py-10 text-center gray-700 dark:gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hi/:name" element={<Hi />} />
          <Route path="*" element={<All />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  </React.StrictMode>,
)
