import React from 'react'
import css from './card.module.scss'

const BenefitCard = ({card, num }) => {
  return (
    <div className={css.card}>
      <p className={css.card__num}>0{num}</p>
      <div className={css.card__content}>
        <div className={css.card__image}>
          <img src={card.image} alt="num"/>
        </div>
        <h3 className={css.card__title}>
          {card.title}
        </h3>
        <p>{card.desc}</p>
      </div>
    </div>
  )
}

export default BenefitCard