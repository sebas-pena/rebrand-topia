import React from 'react'

const ReviewItem = ({ author, content }) => {
  return (
    <article className='p-5 border border-neutral-200 shadow-sm rounded-2xl bg-white'>
      <p className='text-md mb-3'>{content}</p>
      <h3 className='font-semibold text-lg text-center'>{author}</h3>
    </article>
  )
}

export default ReviewItem