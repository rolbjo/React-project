import { createContext, useContext, useState, useEffect } from 'react'

const SomeContext = createContext()

export const useSomeContext = () => {
  return useContext(SomeContext)
}

export const SomeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white'
    document.body.style.color = darkMode ? 'white' : 'black'
  }, [darkMode])

  return (
    <SomeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </SomeContext.Provider>
  )
}

export default SomeContext
