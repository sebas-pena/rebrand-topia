import ContactLink from "@/components/links/ContactLink";
import MercadoPagoLink from "@/components/links/MercadoPagoLink";
import ReviewList from "@/components/reviews/ReviewList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-7 mb-10">
        <div className="flex flex-col gap-1 text-[#333]">
          <h1 className="text-3xl sm:max-w-sm font-semibold mb-3">Aventúrate en "Topia" de Valeria Galbarini</h1>
          <p className="max-w-lg text-lg mb-5">Descubre una isla misteriosa donde los personajes entrañables cobran vida y una idea revolucionaria toma forma. Topia es una novela cautivadora, capaz de transportarte a un mundo lleno de vivencias únicas que invitan a la reflexión y te hacen sentir parte de la historia.</p>
          <div className="flex gap-3">
            <ContactLink />
            <MercadoPagoLink />
          </div>
        </div>
        <Image src="/images/book-cover.webp" width={300} height={300} alt="Portada de Topia" />
      </main>
      <section className="px-7">
        <ReviewList />
      </section>
    </div>
  )
}
