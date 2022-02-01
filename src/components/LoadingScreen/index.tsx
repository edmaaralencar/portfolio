import React from 'react'

import { Container, SpinnerContainer } from './styles'

const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <SpinnerContainer>
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </SpinnerContainer>
    </Container>
  )
}

export default LoadingScreen
