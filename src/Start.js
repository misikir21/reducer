import React from 'react'

export default function className ({numqustions}) {
  return (
    <div className="start">
        <h2>welome to the react quiz</h2>
        <h3>{numqustions} questions to test your react mastery</h3>
        <button>let's get started</button>
    </div>
  )
}
