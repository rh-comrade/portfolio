import React from 'react'
import styles from './button.module.css'
const Button = ({text,color,curve,border,bgcolor,handler}) => {
  return (
    <div>
      <button 
      style={{
        color:`${color}`,
        borderRadius:`${curve}`,
        border:`${border}`,
        backgroundColor:`${bgcolor}`
      }} 
     onClick={handler} >
      {text}
      </button>
    </div>
  )
}

export default Button
