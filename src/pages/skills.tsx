import Head from 'next/head'
import React from 'react'

import { Wrapper, Container, SkillsBox } from '../styles/pages/Skills'

import reactImage from '../assets/reactjs.png'
import nodeImage from '../assets/nodejs.png'
import javascriptImage from '../assets/javascript.png'

const Skills: React.FC = () => {
  return (
    <>
      <Head>
        <title>Habilidades | Portfólio</title>
      </Head>
      <Wrapper>
        <Container>
          <SkillsBox color="#0D91DE">
            <div className="title">
              <div className="text">
                <h3>ReactJS</h3>
                <h4>Front-end</h4>
              </div>
              <img src={reactImage} alt="ReactJS" />
            </div>
            <p className="desc">
              React é uma biblioteca Javascript de front-end utilizada na
              construção de interfaces web.
            </p>
            <div className="skills-list">
              <p>Conhecimentos</p>
              <ul>
                <li>Estilização (Styled Components, ChakraUI)</li>
                <li>Hooks</li>
                <li>Context API</li>
                <li>Redux</li>
                <li>Integração com API</li>
              </ul>
            </div>
          </SkillsBox>
          <SkillsBox color="#84BD48">
            <div className="title">
              <div className="text">
                <h3>Node.js</h3>
                <h4>Back-end</h4>
              </div>
              <img src={nodeImage} alt="Node.js" />
            </div>
            <p className="desc">
              Node.js é um ambiente de execução Javascript que roda no lado do
              servidor.
            </p>
            <div className="skills-list">
              <p>Conhecimentos</p>
              <ul>
                <li>CRUD</li>
                <li>API Rest</li>
                <li>Autenticação (JWT)</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </SkillsBox>
          <SkillsBox color="#F7DF1E">
            <div className="title">
              <div className="text">
                <h3>Javascript</h3>
                <h4>Ling. de programação</h4>
              </div>
              <img src={javascriptImage} alt="Javascript" />
            </div>
            <p className="desc">
              Javascript é uma linguagem de programação aplamente flexível
              podendo ser utilizada no front-end, back-end, mobile e até
              desktop.
            </p>
            <div className="skills-list">
              <p>Conhecimentos</p>
              <ul>
                <li>CRUD</li>
                <li>API Rest</li>
                <li>Autenticação (JWT)</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </SkillsBox>
        </Container>
      </Wrapper>
    </>
  )
}

export default Skills
