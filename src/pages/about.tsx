import React from 'react'
import Head from 'next/head'

import { Wrapper, ContentWrapper } from '../styles/pages/About'

import profileImage from '../assets/profile.png'

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin-blue.svg'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sobre | Portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Web especializado em Front-end e nesse site mostro alguns projetos desenvolvidos por mim.!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Web especializado em Front-end e nesse site mostro alguns projetos desenvolvidos por mim.!"
        />
      </Head>
      <Wrapper>
        <div className="img-wrapper">
          <img src={profileImage} alt="" />
        </div>
        <ContentWrapper>
          <h1>Sobre mim</h1>

          <div className="content-paragraphs">
            <p className="p-1">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla consectetur vitae dui sed
              fermentum. Interdum et malesuada fames ac ante ipsum primis
            </p>

            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla consectetur vitae dui sed
              fermentum. Interdum et malesuada fames ac ante ipsum primis
              fermentum. Interdum et malesuada fames ac ante ipsum primis
              fermentum. Interdum et malesuada fames ac ante ipsum primis
            </p>

            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla consectetur vitae dui sed
              fermentum. Interdum et malesuada fames ac ante ipsum primis
            </p>
          </div>

          <div className="cta">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/edmaaralencar"
            >
              <GithubIcon />
              Github
            </a>
            <a
              className="outlined"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/edmar-alencar-72a9a1207/"
            >
              <LinkedinIcon />
              Linkedin
            </a>
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default About
