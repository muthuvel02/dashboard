import React from 'react'

const Button = ({color, text, borderRadius, size ,bgColor}) => {
  return (
    <div>
      <button 
      type='button'
      style = {{background: bgColor, borderRadius:borderRadius, color:color }} className={`text-${size} p-3 hover:drop-shadow-xl` }>
        {text}
      </button>
    </div>
  )
}

export default Button