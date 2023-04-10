import React from 'react'
import './Loader.css'

export function Loader () {
  return (
    <svg
      className="ring"
      viewBox="25 25 50 50"
      strokeWidth="3"
    >
      <circle cx="50" cy="50" r="20" />
    </svg>
  )
}
