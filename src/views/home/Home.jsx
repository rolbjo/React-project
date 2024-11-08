import { useEffect, useState } from 'react'
import { useSomeContext } from '../../SomeContext'
import SmallVines from '/smallVines.png'
import {
  AnimalFlex,
  AnimalName,
  AnimalWrapper,
  HoverWrapper,
  NameContainer,
  NameLabel,
  CenteredContent,
  NameWelcome,
  QuoteDiv,
  StyledLink,
  TextInput,
  Vine,
  StyledButton,
} from './HomeStyles'
import { generateVinePosition } from '../../utils/GenerateVinePos'
import { getRandomQuote } from '../../utils/RandomQuote'
import { fetchAnimals } from '../../api/AnimalFetch'

function Home() {
  const [quotes, setQuotes] = useState([])
  const [random, setRandom] = useState(null)
  const [animals, setAnimals] = useState([])
  const [name, setName] = useState('')
  const [showNameInput, setShowNameInput] = useState(true)
  const { darkMode } = useSomeContext()

  const handleInputChange = (e) => {
    setName(e.target.value)
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
    const fetchData = async () => {
      try {
        const animalsData = await fetchAnimals()
        setAnimals(animalsData)

        const quotesResponse = await fetch('https://dummyjson.com/quotes')
        const quotesData = await quotesResponse.json()
        setQuotes(quotesData.quotes)
        setRandom(getRandomQuote(quotesData.quotes))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const newQuote = getRandomQuote(quotes)
      setRandom(newQuote)
    }, 10000)

    return () => clearInterval(interval)
  }, [quotes])

  return (
    <>
      <QuoteDiv>
        {random ? (
          <>
            <p>{random.quote}</p>
            <p>- {random.author}</p>
          </>
        ) : (
          <p>Loading quote...</p>
        )}
      </QuoteDiv>
      {showNameInput ? (
        <form style={{ marginBottom: '20px' }} onSubmit={handleSubmit}>
          <NameLabel htmlFor='nameHolder'>
            Welcome! Type your name
            <NameContainer>
              <TextInput
                id='nameHolder'
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={handleInputChange}
              />
              <StyledButton type='submit'>Ok</StyledButton>
            </NameContainer>
          </NameLabel>
        </form>
      ) : (
        <NameContainer>
          <CenteredContent>
            <NameWelcome>{`Welcome${name ? ` ${name}` : ''}!`}</NameWelcome>
            <StyledButton type='button' onClick={handleNameChange}>
              Change name
            </StyledButton>
          </CenteredContent>
        </NameContainer>
      )}

      <AnimalWrapper>
        {animals.map((animal, index) => {
          const row = Math.floor(index / 2)
          const isRight = row % 2 === 0
          return (
            <AnimalFlex key={animal.name}>
              <StyledLink
                to={`/animal/${animal.name}?name=${encodeURIComponent(name)}`}
                darkmode={darkMode ? 'true' : 'false'}
              >
                <HoverWrapper>
                  <AnimalName>{animal.name}</AnimalName>
                  <img src={animal.image} alt={animal.name} />
                </HoverWrapper>
                {((index % 2 === 1 && isRight) ||
                  (index % 2 === 0 && !isRight)) && (
                  <Vine
                    src={SmallVines}
                    alt='vine'
                    style={generateVinePosition(index)}
                  />
                )}
              </StyledLink>
            </AnimalFlex>
          )
        })}
      </AnimalWrapper>
    </>
  )
}

export default Home
