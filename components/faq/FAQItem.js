import React from 'react'

const FAQItem = ({ q, a }) => {
  return (
    <div className='text-md p-5 bg-neutral-50 rounded-md shadow border-neutral-100'>
      <h3 className='font-semibold mb-1 text-lg'>{q}</h3>
      <p>{a}</p>
    </div>
  )
}

export default FAQItem