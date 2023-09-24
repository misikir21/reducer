import React from 'react'
import Option from './Option'

export default function Questions({question}) {
    console.log(question)
  return (
    <div>
        <h4>{question.question}</h4>
       <Option question={question} />
    </div>
  )
}
