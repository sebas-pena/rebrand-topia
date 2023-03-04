import prologo from "@/content/prologo.json"
export default function Home() {
  return (
    <main className="px-4">
      <h1 className="mb-7 font-semibold text-2xl text-[#333]">Prólogo por Gabriela Kaplan</h1>
      <div className="px-3">
        {
          prologo.map((text, i) => <p key={i} className="mb-3">{text}</p>)
        }
      </div>
    </main>
  )
}
