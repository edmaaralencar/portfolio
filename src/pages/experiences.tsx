import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Wrapper, Container } from '../styles/pages/Experiences'

import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'

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
          <Container key={experience.slug}>
            <div className="left-part">
              <h5>{experience.company}</h5>
              <span>{experience.date}</span>
            </div>
            <div className="divider"></div>
            <div className="right-part">
              <h4>{experience.title}</h4>
              <p>{experience.description}</p>
            </div>
          </Container>
        ))}
      </Wrapper>
    </>
  )
}

export default Experiences

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const experiencesResponse: any = await prismic.query(
    [Prismic.Predicates.at('document.type', 'experience')],
    { orderings: '[document.first_publication_date]' }
  )

  const experiences = experiencesResponse.results.map(experience => ({
    slug: experience.uid,
    title: experience.data.title,
    description: experience.data.description,
    company: experience.data.company,
    date: experience.data.date
  }))

  console.log(experiences)

  return {
    props: {
      experiences
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
