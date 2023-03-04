import Link from 'next/link'
import React from 'react'

const CardLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`block text-md p-5 bg-neutral-50 rounded-md shadow border-neutral-100 ${className}`}
    >
      {children}
    </Link>
  )
}

export default CardLink