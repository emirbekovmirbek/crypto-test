import React from 'react'
import './card.scss'

const SCHEMA = [
  'black'
]
const Card = ({card ,schema}) => {
  const classes = SCHEMA.includes(schema)? `wallet-card--${schema}`: ''

  return (
    <div className={`wallet-card ${classes}`}>
      <div className="wallet-card__image">
        <img src={card.image} alt="Card"/>
      </div>
      <div>
        <h5 className="wallet-card__title">
          {card.title}
        </h5>
        <a className="wallet-card__link">
          {card.download}
        </a>
      </div>
    </div>
  )
}

export default Card