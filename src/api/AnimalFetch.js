export const fetchAnimals = async () => {
  try {
    const response = await fetch('animals.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.animals
  } catch (error) {
    console.error('Error fetching animals:', error)
    throw error
  }
}
