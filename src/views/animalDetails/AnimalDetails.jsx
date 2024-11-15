import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './AnimalDetails.css'
import FormikComponent from '../../components/FormikComponent'
import BigVines from '/vines.png'

function AnimalDetails() {
  const { name } = useParams()
  const [animal, setAnimal] = useState(null)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const userName = searchParams.get('name')

  useEffect(() => {
    fetch(`animals.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundAnimal = data.animals.find((animal) => animal.name === name)
        setAnimal(foundAnimal)
      })
      .catch((error) => console.error(error))
  }, [name])

  return (
    <>
      <div>
        <img className='AnimalDetails-vines' src={BigVines} alt='vines' />
        <img className='AnimalDetails-vines2' src={BigVines} alt='vines' />
      </div>

      {animal ? (
        <>
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
