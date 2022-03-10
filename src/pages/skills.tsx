import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Wrapper, Container, SkillsBox } from '../styles/pages/Skills'

import { GET_SKILLS } from 'graphql/queries'
import { GetSkillsQuery } from 'graphql/generated/graphql'
import client from 'graphql/client'

interface ISkills {
  id: string
  title: string
  category: string
  description: string
  skills: Array<string>
  image: {
    url: string
  }
  color: string
}

interface SkillsProps {
  skills: ISkills[]
}

const Skills = ({ skills }: SkillsProps) => {
  console.log(skills)

  return (
    <>
      <Head>
        <title>Habilidades | Portfólio</title>
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
        <Container>
          {skills.map(skill => (
            <SkillsBox key={skill?.id} color={skill?.color}>
              <div className="title">
                <div className="text">
                  <h3>{skill?.title}</h3>
                  <h4>{skill?.category}</h4>
                </div>
                <img src={skill?.image?.url} alt={skill?.title} />
              </div>
              <p className="desc">{skill?.description}</p>
              <div className="skills-list">
                <p>Conhecimentos:</p>
                <ul>
                  {skill.skills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </SkillsBox>
          ))}
        </Container>
      </Wrapper>
    </>
  )
}

export default Skills

export const getStaticProps: GetStaticProps = async () => {
  const { skills } = await client.request<GetSkillsQuery>(GET_SKILLS)

  return {
    props: {
      skills
    },
    revalidate: 60 * 60 * 24
  }
}
