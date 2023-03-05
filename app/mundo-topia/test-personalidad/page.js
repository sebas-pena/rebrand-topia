import Test from '@/components/test/Test'
import React from 'react'

const questions = [
  {
    question: "Un amigo tuyo está con problemas económicos y te lo cuenta, vos:",
    a: "Le das el dinero sin dudarlo.",
    b: "Lo invitas a salir a distraerse un rato, obvio pagas vos.",
    c: "Lo ayudas a hacer una planilla con sus gastos para ver en dónde puede ahorrar.",
    d: "Lo acompañas a sacar un préstamo y le salís de garantía.",
  },
  {
    question: "Entraron a robar a tu apartamento vos:",
    a: "Pedís las grabaciones de las cámaras de la zona y salís con fotos de los sospechosos a tratar de obtener información.",
    b: "Haces la denuncia y tratas de ver el lado positivo, menos cosas para limpiar.",
    c: "Haces la denuncia y pasas horas llamando a los diferentes seguros que tenés para tratar de recuperar algo.",
    d: "Enseguida te ponés en contacto con los vecinos para ver si están todos bien y si a alguien más le pasó vas a verlo para darle una mano.",
  },
  {
    question: "El médico te hace unos estudios y estás nerviosa/o esperando los resultados, por mientras:",
    a: "Llamas a otros tres médicos conocidos para que te expliquen opciones posibles y por las dudas haces testamento. Después quedás tranquila/o.",
    b: "Invitas a tus amigos a casa, haces un asado y tratás de no pensar en eso.",
    c: "Buscas en Google todos los síntomas y pasas toda la noche sin dormir pensando en eso.",
    d: "Llamas por teléfono a esa persona que pasó por algo similar para saber cómo está, cómo se siente ahora y si necesita que hagas algo por ella.",
  },
  {
    question: "Se viene tu cumpleaños, y lo festejas…",
    a: "Con una fiesta con tus amigos y familia más cercana.",
    b: "Con todos tus amigos, cercanos, lejanos, de Facebook, y varios vecinos del barrio que vieron luz y entraron. Cuantos más mejor.",
    c: "Con tu pareja.",
    d: "Con tu familia, cocinas para todos y los agasajas con lo que más les gusta.",
  },
  {
    question: "Ganaste la lotería, vos…",
    a: "Lo donás todo a una fundación filantrópica.",
    b: "Viajas por el mundo y le regalas plata a tus amistades y familiares si lo necesitan.",
    c: "Te compras una propiedad y ponés el resto en el banco a plazo fijo.",
    d: "Ponés ese negocio que siempre quisiste y ahí le das trabajo a gente que querés.",
  }
]
const results = {
  a: {
    title: "Clementine",
    description: "Si tuviéramos que definirte en una sola palabra sería épico/a. Vas por la vida dejando tu huella y buscando el bienestar de todos a tu paso. Una fuerza de la naturaleza imposible de ignorar."
  },
  b: {
    title: "Juan",
    description: "Tu distintivo es la alegría, nada puede robarte esa serenidad interior y la sonrisa plena. Eres un foco de gozo y un remanso de paz para todos los que te rodean."
  },
  c: {
    title: "Beatriz",
    description: "Los/las Beatrices de la vida son personas observadoras, curiosas. Si te tocó éste personaje es porque eres alguien analítico que no hace nada sin pensarlo bien, pero una vez tomada la decisión te lanzas a ello con alma y vida."
  },
  d: {
    title: "Sofía",
    description: "Sofía es la madre por antonomasia, la creadora que nutre y sostiene. Si éste es tu personaje tenés mucho de cuidador/a, sos fiel y cariñosa/o. También tenés un lado protector que puede ser feroz cuando alguien que amas está en peligro."
  }
}
const page = () => {
  return (
    <main className='px-5'>
      <header className='text-center mb-10'>
        <h1 className='text-3xl mb-2 font-semibold text-[#333]'>Test de personalidad</h1>
        <p className='text-xl text-[#333]'>¿Qué personaje de Topia eres? Averigualo en este cuestionario.</p>
      </header>

      <Test questions={questions} results={results} />

    </main>
  )
}



export default page