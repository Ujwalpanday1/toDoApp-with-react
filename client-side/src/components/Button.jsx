import React from 'react'

const Button = ({buttonid,buttonName,buttontype}) => {
  return (
    <button className='p-2 bg-blue-800 rounded-xl ' id={buttonid} type={buttontype}>{buttonName}</button>
  )
}

export default Button