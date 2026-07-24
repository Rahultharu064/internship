import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {
    const [darkmode , toggle]=useToggle()
  return (
    <div>
      <h1>{darkmode ? "dark mode ": "Light mode "}</h1>
      <button onClick={toggle}>toggle theme</button>
    </div>
  )
}

export default Toggle
