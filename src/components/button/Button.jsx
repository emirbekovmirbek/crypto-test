import React from 'react'
import  './button.scss'

const SCHEMA =
  [
    'blue',
    'dark',
    'blue',
    'white'
  ]

const Button = ({schema, text}) => {
  const classes = SCHEMA.includes(schema)? `button--${schema}`: ''

  return (
    <button className={`button ${classes}`}>
      {text? text: 'contuct us'}
    </button>
  )
}

export default Button