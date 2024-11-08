import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #408940;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <Player
        autoplay
        loop
        src='/loader.json'
        style={{ height: '300px', width: '300px' }}
      />
    </LoadingContainer>
  )
}

export default Loading
