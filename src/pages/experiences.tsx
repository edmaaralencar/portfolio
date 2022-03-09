/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Wrapper, Container } from '../styles/pages/Experiences'
import { GET_EXPERIENCES } from 'graphql/queries'
import { GetExperiencesQuery } from 'graphql/generated/graphql'
import client from 'graphql/client'

interface IExperience {
  slug: string
  title: string
  description: string
  date: string
  company: string
}

interface ExperiencesProps {
  experiences: IExperience[]
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <>
      <Head>
        <title>Experiência | Portfólio</title>
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
        {experiences.map(experience => (
          <Container key={experience?.slug}>
            <div className="left-part">
              <h5>{experience?.company}</h5>
              <span>{experience?.date}</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <h4>{experience?.title}</h4>
              <p>{experience?.description}</p>
            </div>
          </Container>
        ))}
      </Wrapper>
    </>
  )
}

export default Experiences

export const getStaticProps: GetStaticProps = async () => {
  const { experiences } = await client.request<GetExperiencesQuery>(
    GET_EXPERIENCES
  )

  return {
    props: {
      experiences
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
