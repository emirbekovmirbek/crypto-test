import React from 'react';
import css from './benefit.module.scss'
import TitleDesc from '../title-desc/TitleDesc';
import BenefitCard from './benefit-card/BenefitCard';

const cards = [
  {
    "image": "/assets/pie.svg",
    "title": "Lymcoin Benefits",
    "desc": "Use Lymcoin to make instant",
  },
  {
    "image": "/assets/suitcase.svg",
    "title": "Lymcoin Benefits",
    "desc": "Use Lymcoin to make instant",
  },
  {
    "image": "/assets/objective.svg",
    "title": "Lymcoin Benefits",
    "desc": "Use Lymcoin to make instant",
  },
  {
    "image": "/assets/clock.svg",
    "title": "Lymcoin Benefits",
    "desc": "Use Lymcoin to make instant",
  }
]
const Benefit = () => {

  return (
    <div className={`${css.benefit} container-sm`}>
      <TitleDesc
        text="02. BENEFITS"
        title="Lymcoin Benefits"
      />
      <div className={css.benefit__cards}>
        {
          cards.map((item, idx) =>
            <BenefitCard
              key={idx}
              card={item}
              num={idx+1}
            />
          )

        }
      </div>
    </div>
  );
};

export default Benefit;