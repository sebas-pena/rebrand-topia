import { useState, useEffect } from "react"

export const useForm = (initialValues = {}) => {
  const [values, setValue] = useState(initialValues)

  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value })
  }

  return { handleChange, values }
}