import React from 'react'

function App() {

  return (
    <div className="App">
      <i className='bx bx-lemon bx-lg' />

      <p>Ritem Mini</p>

      <p>
        <em className="opacity-75 text-sm">
          Opinionated Vite Starter Template
        </em>
      </p>

      <div className="py-4"></div>

      <input 
        placeholder="What's your name?"
        className="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
        autoComplete="false"
        type="text" />

      <div>
          <button disabled className="m-3 text-sm px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50">
            Go
          </button>
      </div>

    </div>
  )
}

export default App
