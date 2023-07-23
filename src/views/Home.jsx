import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SomeContext from '../SomeContext'
import StyledButton from '../button'

const AnimalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-items: center;
`
const AnimalFlex = styled.div`
  width: 80%;
  margin-bottom: 30px;
`
const QuoteDiv = styled.div`
  text-align: center;
`
const AnimalName = styled.p`
  text-align: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.darkmode === 'true' ? 'white' : 'black')};
`
const NameLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const NameInput = styled.input``

function Home() {
  const [quotes, setQuotes] = useState([])
  const [animals, setAnimals] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showNameInput, setShowNameInput] = useState(true)
  const { setDarkMode, darkMode } = useContext(SomeContext)

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  const handleInputChangeAge = (e) => {
    setAge(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowNameInput(false)
  }

  const handleNameChange = () => {
    setShowNameInput(true)
  }

  useEffect(() => {
    name && localStorage.setItem('name', name)
  }, [name])

  useEffect(() => {
    const storedName = localStorage.getItem('name')
    storedName && setName(storedName), setShowNameInput(false)
  }, [])

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    fetch('/animals.json')
      .then((response) => response.json())
      .then((data) => setAnimals(data.animals))
      .catch((error) => console.error(error))
  }, [])

  const getRandomQuote = () => {
    return (
      quotes.length > 0 && quotes[Math.floor(Math.random() * quotes.length)]
    )
  }

  const [random, setRandom] = useState(getRandomQuote())

  useEffect(() => {
    const interval = setInterval(() => {
      const newQuote = getRandomQuote()
      setRandom(newQuote)
    }, 15000)

    return () => clearInterval(interval)
  })

  return (
    <>
      <NameInput
        name='ageHolder'
        type='text'
        placeholder='Enter your Age'
        value={age}
        onChange={handleInputChangeAge}
      />
      {age > 19 && <p>You are old enough to adopt</p>}
      {age < 20 && <p>You are not old enough to adopt</p>}
      {showNameInput ? (
        <NameLabel htmlFor='nameHolder'>
          Welcome! Type your name here :D
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <NameInput
                name='nameHolder'
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={handleInputChange}
              />
              <StyledButton type='submit'>Show</StyledButton>
            </InputContainer>
          </form>
        </NameLabel>
      ) : (
        <NameLabel htmlFor='nameHolder'>
          Welcome {name}!
          <InputContainer>
            <StyledButton type='button' onClick={handleNameChange}>
              Change name
            </StyledButton>
          </InputContainer>
        </NameLabel>
      )}
      <QuoteDiv>
        {random ? (
          <>
            <p>{random.text}</p>
            <p>- {random.author}</p>
          </>
        ) : (
          <p>Loading quote...</p>
        )}
      </QuoteDiv>
      <StyledButton onClick={handleDarkModeToggle}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </StyledButton>
      <AnimalWrapper>
        {animals.map((animal) => (
          <AnimalFlex key={animal.name}>
            <StyledLink
              to={`/animal/${animal.name}?name=${encodeURIComponent(name)}`}
              darkmode={darkMode ? 'true' : 'false'}
            >
              <AnimalName>{animal.name}</AnimalName>
              <img src={animal.image} alt={animal.name} />
            </StyledLink>
          </AnimalFlex>
        ))}
      </AnimalWrapper>
    </>
  )
}

export default Home
