import React from 'react'
import './employment.scss'

const Employment = ({employment}) => {
  return (
    <div className="employment">
      <div className="employment__avatar">
        <img src={employment.avatar} alt={employment.name}/>
      </div>
    </div>
  )
}

export default Employment