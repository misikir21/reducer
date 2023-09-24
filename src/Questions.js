import React from 'react'

export default function Questions({question}) {
    console.log(question)
  return (
    <div>
        <h4>{question.question}</h4>
        <div className='option'>
            {question.options.map((option)=> (<button className='btn btn-option'>{option}</button>))
        }        </div>
    </div>
  )
}
