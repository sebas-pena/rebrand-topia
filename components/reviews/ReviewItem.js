import React from 'react'

const ReviewItem = ({ author, content }) => {
  return (
    <article className='flex flex-col justify-between p-5 border h-full border-neutral-200 shadow-sm rounded-2xl bg-white text-md text-center'>
      <span className='mb-3'>❝ {content} ❞</span>
      <h3 className='pl-1 font-semibold text-center'>{author}</h3>
    </article>
  )
}

export default ReviewItem