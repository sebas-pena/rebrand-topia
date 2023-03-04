import React from 'react'
import reviews from "@/content/reviews.json"
import ReviewItem from './ReviewItem'

const ReviewList = () => {
  return (
    <div className='mb-10'>
      <h2 className="font-semibold text-2xl text-center mb-8">Los primeros lectores opinan:</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {
          reviews.map(review => (
            <li key={review.author} >
              <ReviewItem {...review} />
            </li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default ReviewList