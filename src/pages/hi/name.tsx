import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BiRun } from 'react-icons/bi'
function Hi() {
  const { name } = useParams()

  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }

  return (
      <div>
        <BiRun className="text-4xl inline-block" />

        <p> Hi, {name} </p>

        <p className="text-sm opacity-50">
          <em>Dynamic route!</em>
        </p>

        <div>
          <button
          className="text-sm mt-8 m-3 px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
          onClick={back}
          >
            Back
          </button>
        </div>

      </div>
  )
}

export default Hi
