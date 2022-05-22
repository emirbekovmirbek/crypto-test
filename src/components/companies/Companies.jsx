import React from 'react'
import './companies.scss'

const Companies = () => {
  const companies = [
    '/assets/image.svg',
    '/assets/image 2.svg',
    '/assets/image 3.svg',
    '/assets/image 4.svg',
    '/assets/image 5.svg',
    '/assets/image 6.svg',
  ]
  return (
    <div className="companies container">
      {
        companies.map((item, idx) =>
          <div className="companies__company" key={idx}>
            <img src={item} alt="Company"/>
          </div>)
      }

    </div>
  )
}

export default Companies