'use client'
import { useForm } from '@/hook/useForm'
import React, { useState } from 'react'
import TestItem from './TestItem'

const Test = ({ questions, results }) => {
  const { handleChange, values } = useForm()
  const [stage, setStage] = useState(0)
  const [result, setResult] = useState("")
  const handleNext = () => {

    if (stage == questions.length - 1) {
      const frequencies = {};

      Object.values(values).forEach((response) => {
        if (response in frequencies) {
          frequencies[response]++;
        } else {
          frequencies[response] = 1;
        }
      });
      let mostFrequent = null;
      let maxFrequency = 0;
      Object.entries(frequencies).forEach(([letter, frequency]) => {
        if (frequency > maxFrequency) {
          mostFrequent = letter;
          maxFrequency = frequency;
        }
      });

      setResult(results[mostFrequent])
    }
    setStage(stage + 1)
  }
  const handlePrev = () => {
    setStage(stage - 1)
  }
  return (
    <div className='p-5 max-w-2xl m-auto rounded shadow'>
      {
        stage < questions.length &&
        <div>
          <h3 className='font-semibold mb-4 text-lg'>{questions[stage].question}</h3>
          <div className='flex flex-col gap-2 pl-4'>
            <TestItem text={questions[stage].a} name={`q-${stage}`} value="a" checked={values[`q-${stage}`] == "a"} onChange={handleChange} />
            <TestItem text={questions[stage].b} name={`q-${stage}`} value="b" checked={values[`q-${stage}`] == "b"} onChange={handleChange} />
            <TestItem text={questions[stage].c} name={`q-${stage}`} value="c" checked={values[`q-${stage}`] == "c"} onChange={handleChange} />
            <TestItem text={questions[stage].d} name={`q-${stage}`} value="d" checked={values[`q-${stage}`] == "d"} onChange={handleChange} />
          </div>
        </div>
      }
      {
        stage === questions.length &&
        <div>
          <h3 className='text-center font-semibold text-2xl mb-4'>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      }
      <div className='flex gap-4 justify-center mt-4'>
        {
          stage > 0 && stage < questions.length && <button className='py-1 px-4 rounded bg-blue-500 text-white' onClick={handlePrev}>Atras</button>
        }
        {
          stage < questions.length &&
          <button disabled={values[`q-${stage}`] ? false : true} className='py-1 px-4 rounded disabled:bg-blue-300 bg-blue-500 text-white' onClick={handleNext}>{stage == questions.length - 1 ? "Ver Resultado" : "Siguiente"}</button>
        }
      </div>
    </div>
  )
}

export default Test