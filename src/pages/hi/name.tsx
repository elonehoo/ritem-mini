import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Hi() {
  const { name } = useParams()

  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }

  return (
      <div>
        <div className="text-4xl inline-block i-carbon-two-person-lift" />

        <p> Hi, {name} </p>

        <p className="text-sm opacity-50">
          <em>Dynamic route!</em>
        </p>

        <div>
          <button
          className="text-sm mt-8 m-3 btn"
          onClick={back}
          >
            Back
          </button>
        </div>

      </div>
  )
}

export default Hi
