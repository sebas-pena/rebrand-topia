import CardLink from '@/components/links/CardLink'
import React from 'react'

const items = [
  {
    title: "Test de personalidad.",
    description: "¿Qué personaje de Topia eres? Averigualo en este cuestionario.",
    path: "test-personalidad"
  }
]

const page = () => {
  return (
    <main className='px-5'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl mb-2 font-semibold text-[#333]'>Mundo Topia</h1>
        <p className='text-xl text-[#333]'>Explora el universo de la novela y conoce más sobre sus personajes. </p>
      </div>
      <ul className='max-w-2xl m-auto'>
        {
          items.map(item => <li key={item.path}>
            <CardLink href={`mundo-topia/${item.path}`}>
              <h2 className='font-semibold mb-1 text-lg'>{item.title}</h2>
              <p>{item.description}</p>
            </CardLink>
          </li>)
        }
      </ul>
    </main>
  )
}

export default page