import React from 'react'

import { Wrapper, Container } from '../styles/pages/Experiences'

const Experiences: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <div className="left-part">
          <h5>Freelancer</h5>
          <span>Ago 2021 - Hoje</span>
        </div>
        <div className="divider"></div>
        <div className="right-part">
          <h4>Desenvolvimento Web e UI Design</h4>
          <p>
            Desenvolvimento de aplicações web utilizando HTML, CSS, Sass,
            Javascript e React.
            <br />
            Desenvolvimento de interfaces no Figma utilizando princípios de
            UI/UX Design.
          </p>
        </div>
      </Container>
      <Container>
        <div className="left-part">
          <h5>Freelancer</h5>
          <span>Ago 2021 - Hoje</span>
        </div>
        <div className="divider"></div>
        <div className="right-part">
          <h4>Análise e Desenvolvimento de Sistemas</h4>
          <p>
            Buscando avançar na jornada de conhecimento que iniciei com meus
            estudos autodidatas em programação, ingressei no curso de Análise e
            Desenvolvimento de Sistemas.
          </p>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Experiences
