import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import BackgroundImage from '../assets/background-image.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <div>
        <h2>OLÁ, EU SOU</h2>
        <h1>Edmar Alencar</h1>
        <h3>Desenvolvedor fullstack especializado em front-end.</h3>
        <Link href="/projects">
          <a className="btn-projects" href="">Conheça mais</a>
        </Link>
      </div>

      <BackgroundImage className="img" />
    </Container>
  )
}

export default Home
