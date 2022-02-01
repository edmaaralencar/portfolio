/* eslint-disable camelcase */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Wrapper, Container, ProjectBox } from '../../styles/pages/Projects'

import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'

interface IProject {
  slug: string
  title: string
  image: {
    alt: string
    url: string
  }
  techs: Array<{
    tech: string
  }>
  description: Array<string>
  github_link: string
  website_link: string
}

interface ProjectsProps {
  projects: IProject[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>Projetos | Portfólio</title>
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
          {projects.map(project => (
            <ProjectBox key={project.slug}>
              <img src={project.image.url} alt={project.image.alt} />
              <h1>{project.title}</h1>
              <div className="tech">
                <h2>Tecnologias utilizadas:</h2>
                <ul>
                  {project.techs.map((item, index) => (
                    <li key={index}>{item.tech}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/projects/${project.slug}`}>
                <a href="">Ver mais</a>
              </Link>
            </ProjectBox>
          ))}
        </Container>
      </Wrapper>
    </>
  )
}

export default Projects

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const projectResponse: any = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date]' }
  )

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    image: {
      url: project.data.image.url,
      alt: project.data.image.alt
    },
    title: project.data.title,
    techs: project.data.techs,
    github_link: project.data.github_link.url,
    website_link: project.data.website_link.url,
    description: project.data.body
  }))

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24
  }
}
