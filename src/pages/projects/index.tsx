/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import {
  Wrapper,
  Container,
  ProjectBox,
  Categories,
  Category
} from '../../styles/pages/Projects'

import client from 'graphql/client'
import { GET_PROJECTS } from 'graphql/queries'
import { GetProjectsQuery } from 'graphql/generated/graphql'

interface IProject {
  slug: string
  title: string
  image: Array<{
    url: string
  }>
  technologies: Array<string>
  description: {
    html: string
  }
  github_link: string
  website_link: string
  category: string
}

interface ProjectsProps {
  projects: IProject[]
}

const Projects = ({ projects }: ProjectsProps) => {
  const [category, setCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilteredProjects = (category: string) => {
    setCategory(category)
    setFilteredProjects(
      category === 'all'
        ? projects
        : projects.filter(project => project.category === category)
    )
  }

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
        <Categories>
          <Category
            onClick={() => handleFilteredProjects('all')}
            isActive={category === 'all'}
          >
            Todos
          </Category>
          <Category
            onClick={() => handleFilteredProjects('front_end')}
            isActive={category === 'front_end'}
          >
            Front-end
          </Category>
          <Category
            onClick={() => handleFilteredProjects('back_end')}
            isActive={category === 'back_end'}
          >
            Back-end
          </Category>
          <Category
            onClick={() => handleFilteredProjects('full_stack')}
            isActive={category === 'full_stack'}
          >
            Full-stack
          </Category>
        </Categories>
        <Container>
          {filteredProjects?.map(project => (
            <ProjectBox key={project?.slug}>
              <img src={project?.image[0].url} alt={project?.title} />
              <h1>{project?.title}</h1>
              <div className="tech">
                <h2>Tecnologias utilizadas:</h2>
                <ul>
                  {project?.technologies.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/projects/${project?.slug}`} passHref>
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
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)

  return {
    props: {
      projects
    }
  }
}
