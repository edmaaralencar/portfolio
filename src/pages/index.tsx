import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import BackgroundImage from '../assets/background-image.svg'

import { Wrapper, Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Início | Portfólio</title>
      </Head>
      <Wrapper>
        <Container>
          <div>
            <h2>OLÁ, EU SOU</h2>
            <h1>Edmar Alencar</h1>
            <h3>Desenvolvedor fullstack especializado em front-end.</h3>
            <Link href="/projects">
              <a className="btn-projects" href="">
                Conheça mais
              </a>
            </Link>
          </div>
        </Container>
        <BackgroundImage />
      </Wrapper>
    </>
  )
}

export default Home
