import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/style/globals.css'

export const metadata = {
  title: 'Topia - Una Novela por Valeria Galbarini',
  description: 'Una isla misteriosa, personajes entrañables, y una idea revolucionaria. Topia es una novela para leer y releer, un caleidoscopio de vivencias que permite al lector habitarla y dejarse habitar. Un libro que sigue la tradición de Tomás Moro, y el Shangri La de Hilton, pero desde una perspectiva actual, femenina y que invita a la acción más que a la contemplación.',
  openGraph: {
    title: 'Topia - Una Novela por Valeria Galbarini',
    siteName: "https://topia.vercel.app",
    description: 'Una isla misteriosa, personajes entrañables, y una idea revolucionaria. Topia es una novela para leer y releer, un caleidoscopio de vivencias que permite al lector habitarla y dejarse habitar. Un libro que sigue la tradición de Tomás Moro, y el Shangri La de Hilton, pero desde una perspectiva actual, femenina y que invita a la acción más que a la contemplación.',
    url: "https://topia.vercel.app",
    locale: 'es-ES',
    type: "book"
  },
  others: {
    "book:isbn": "978-9915-41-598-7",
    "book:release_date": "2023-03-03",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='icon' href='/svg/island.svg' type='image/svg+xml' />
      </head>
      <body className='m-0 min-h-screen w-full font-sans'>
        <div className='m-auto max-w-4xl'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
