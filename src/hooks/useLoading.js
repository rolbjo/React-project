import { useState, useEffect } from 'react'

const useLoading = (initialLoading = true, delay = 1000) => {
  const [isLoading, setIsLoading] = useState(initialLoading)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isLoading
}

export default useLoading
