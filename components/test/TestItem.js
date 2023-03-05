import React from 'react'

const TestItem = ({ name, value, text, checked, onChange }) => {
  return (
    <label className='cursor-pointer'>
      <input className='mr-3' type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <span>{text}</span>
    </label>
  )
}

export default TestItem