import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactLink = () => {
  return (
    <Link
      href="mailto:contacto@topia.uy"
      className='inline-flex items-center gap-3 py-1 px-3 rounded bg-[#f06292]'
    >
      <Image src="/svg/mail.svg" height={20} width={30} alt="" />
      <span className='font-semibold text-white'>
        Contacto
      </span>
    </Link>
  )
}

export default ContactLink