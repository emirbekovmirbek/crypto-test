import React from 'react'
import './title-desc.scss'
import Line from '../line/Line'

const TitleDesc = ({title, desc, text}) => {
  return (
    <div className="title-desc">
      <div className="title-desc__top">
        <Line/>
        <p className="title-desc__text">{text}</p>
      </div>
      <h2 className="title title-desc__title">
        {title}
      </h2>
      {desc && <p className="title-desc__desc">
        {desc}
        </p>
      }
    </div>
  )
}

export default TitleDesc;