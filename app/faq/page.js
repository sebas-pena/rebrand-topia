import React from "react"
import questions from "@/content/preguntas-frecuentes.json"
import FAQItem from "@/components/faq/FAQItem"
const page = () => {
  return (
    <main>
      <h1 className="mb-7 font-semibold text-3xl text-[#333] text-center">Preguntas frecuentes</h1>
      <ul className="px-7 flex flex-col gap-4">
        {questions.map((question) => (
          <li key={question.q}>
            <FAQItem {...question} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default page
