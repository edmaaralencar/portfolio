import React from 'react'

import { Container } from './styles'

import MailIcon from '../../assets/mail.svg'
// import InstagramIcon from '../../assets/instagram.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import GithubIcon from '../../assets/github.svg'

const SocialMedia: React.FC = () => {
  return (
    <Container>
      <a rel="noopener noreferrer" target="_blank" href="">
        <MailIcon />
      </a>
      {/* <InstagramIcon /> */}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/edmar-alencar-72a9a1207/"
      >
        <LinkedinIcon />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/edmaaralencar"
      >
        <GithubIcon />
      </a>
    </Container>
  )
}

export default SocialMedia
