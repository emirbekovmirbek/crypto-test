import React from 'react'
import './date.scss'

const Date = ({text, date}) => {
  return (
    <div className="date">
      {text && <p className="date__text">
        {text}
      </p>}
      <p className="date__time">{date}</p>
    </div>
  )
}

export default Date