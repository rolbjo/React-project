import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AnimalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-items: center;
`
export const NameWelcome = styled.span`
  font-size: 20px;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`

export const AnimalFlex = styled.div`
  width: 80%;
  margin-bottom: 30px;
  position: relative;
`

export const QuoteDiv = styled.div`
  min-height: 100px;
  padding-top: 20px;
  text-align: center;
  font-family: 'bonaventure', cursive;
`

export const AnimalName = styled.p`
  text-align: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: ${(props) => (props.darkmode === 'true' ? 'white' : 'black')};
`

export const NameLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: flex-start;
`

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0 20px 0;

  @media (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const TextInput = styled.input`
  margin-right: 10px;
`

export const Vine = styled.img`
  clip-path: inset(0 0 10px 0);
  position: absolute;
  width: 250px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
  }
`
export const HoverWrapper = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  img {
    box-shadow: 30px 0 30px 0 rgba(0, 0, 0, 0.5);
  }
`
export const StyledButton = styled.button`
  background-color: #408940;
  border-radius: 10px;
  padding: 3px 15px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`
