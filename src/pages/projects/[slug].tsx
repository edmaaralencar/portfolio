/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Wrapper } from '../../styles/pages/Project'
import LoadingScreen from '../../components/LoadingScreen'

import GithubIcon from '../../assets/github.svg'
import { GET_PROJECTS, GET_PROJECT_BY_SLUG } from 'graphql/queries'
import {
  GetProjectBySlugQuery,
  GetProjectsQuery
} from 'graphql/generated/graphql'
import client from 'graphql/client'
import { GetStaticProps } from 'next'

interface ProjectProps {
  project: {
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
}

const Projects = ({ project }: ProjectProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingScreen />
  }

  return (
    <>
      <Head>
        <title>{project?.title} | Portfólio</title>
        <meta name="description" content={project?.title} />
        <meta property="og:image" content={project?.image[0].url} />
        <meta property="og:image:secure_url" content={project?.image[0].url} />
        <meta name="twitter:image" content={project?.image[0].url} />
        <meta name="twitter:image:src" content={project?.image[0].url} />
        <meta property="og:description" content={project?.title} />
      </Head>
      <Wrapper>
        <div className="img-wrapper">
          <img src={project.image[0].url} alt={project.title} />
        </div>

        <div className="content-wrapper">
          <h1>{project?.title}</h1>

          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: project?.description?.html || ''
            }}
          />

          <div className="techs">
            <h3>Tecnologias utilizadas:</h3>
            <ul>
              {project?.technologies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cta">
            {project?.github_link !== null && (
              <a target="_blank" rel="noreferrer" href={project?.github_link}>
                <GithubIcon /> Github
              </a>
            )}
            {project?.website_link !== null && (
              <a
                target="_blank"
                rel="noreferrer"
                className="outlined"
                href={project?.website_link}
              >
                Site
              </a>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Projects

export const getStaticPaths = async () => {
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)

  const paths = projects.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = await client.request<GetProjectBySlugQuery>(
    GET_PROJECT_BY_SLUG,
    {
      slug: `${params.slug}`
    }
  )

  return {
    props: {
      project
    },
    revalidate: 60 * 60 * 24
  }
}
