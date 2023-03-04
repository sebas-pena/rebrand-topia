import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MercadoPagoLink = () => {
  return (
    <Link
      href="https://mpago.la/2TSFuMd"
      target="_blank"
      rel="noopener noreferrer"
      className='inline-flex items-center gap-3 py-1 px-3 rounded bg-[#00B1EA]'
    >
      <Image src="/svg/mercado-pago.svg" height={20} width={30} alt="" />
      <span className='font-semibold text-white'>
        Obtén tu copia
      </span>
    </Link>
  )
}

export default MercadoPagoLink