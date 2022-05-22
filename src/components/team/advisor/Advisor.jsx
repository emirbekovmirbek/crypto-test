import React from 'react'
import './advisor.scss'

const Advisor = ({advisor}) => {
  return (
    <div className="advisor">
      <div className="advisor__content">
        <div className="advisor__avatar">
          <img src={advisor.avatar} alt={advisor.name}/>
        </div>
        <p className="advisor__name">{advisor.name}</p>
        <p className="advisor__position"> {advisor.position}</p>
      </div>

    </div>
  )
}

export default Advisor