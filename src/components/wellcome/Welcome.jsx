import React from 'react';
import css from './wellcome.module.scss'

const Wellcome = () => {
  return (
    <div className={`${css.wellcome} container`}>
      <div className={css.wellcome__image}>
        <img src="/assets/wellcome.png" alt="Welcome"/>
      </div>
          
    </div>
  );
};

export default Wellcome;