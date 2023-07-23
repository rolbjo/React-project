import { useContext, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import '../AnimalDetails.css'
import FormikComponent from '../FormikComponent'
import SomeContext from '../SomeContext'
import StyledButton from '../button'

function AnimalDetails() {
  const { name } = useParams()
  const [animal, setAnimal] = useState(null)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const userName = searchParams.get('name')
  const { darkMode, setDarkMode } = useContext(SomeContext)

  console.log(darkMode)

  useEffect(() => {
    fetch(`/animals.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundAnimal = data.animals.find((animal) => animal.name === name)
        setAnimal(foundAnimal)
      })
      .catch((error) => console.error(error))
  }, [name])

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      {animal ? (
        <>
          <StyledButton onClick={handleDarkModeToggle}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </StyledButton>
          <div className='AnimalDetails-wrapper'>
            <h2>{animal.name}</h2>
            <img
              className='AnimalDetails-img'
              src={animal.image}
              alt={animal.name}
            />
            <ul>
              <li>Species: {animal.species}</li>
              <li>Category: {animal.category}</li>
              <li>Life Expectancy: {animal.lifeExpectancy}</li>
              <li>Weight: {animal.weight}</li>
              <li>Age: {animal.age}</li>
              <li>Diet: {animal.diet}</li>
              <li>Care Difficulty: {animal.careDifficulty}</li>
            </ul>
          </div>
          <FormikComponent userName={userName} />
        </>
      ) : (
        <p>Loading animal details...</p>
      )}
    </>
  )
}

export default AnimalDetails
