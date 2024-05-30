import React from 'react'
import styles from './button.module.css'
const Button = ({text,color,curve,border,handler}) => {
  return (
    <div>
      <button onClick={handler} >{text}</button>
    </div>
  )
}

export default Button
