/* eslint-disable camelcase */
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'

import { Wrapper } from '../../styles/pages/Project'
import LoadingScreen from '../../components/LoadingScreen'

import GithubIcon from '../../assets/github.svg'

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
  description: Array<unknown>
  github_link: string
  website_link: string
}

interface ProjectProps {
  project: IProject
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
        <meta property="og:image" content={project?.image.url} />
        <meta property="og:image:secure_url" content={project?.image.url} />
        <meta name="twitter:image" content={project?.image.url} />
        <meta name="twitter:image:src" content={project?.image.url} />
        <meta property="og:description" content={project?.title} />
      </Head>
      <Wrapper>
        <div className="img-wrapper">
          <img src={project?.image.url} alt={project?.image.alt} />
        </div>

        <div className="content-wrapper">
          <h1>{project?.title}</h1>

          {project?.description.map((desc, index) => (
            <p className="description" key={index}>
              {desc[0].text}
            </p>
          ))}

          <div className="techs">
            <h3>Tecnologias utilizadas:</h3>
            <ul>
              {project?.techs.map((item, index) => (
                <li key={index}>{item.tech}</li>
              ))}
            </ul>
          </div>

          <div className="cta">
            <a target="_blank" rel="noreferrer" href={project?.github_link}>
              <GithubIcon /> Github
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="outlined"
              href={project?.website_link}
            >
              Site
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Projects

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()

  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project')
  ])

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient()
  const { slug } = context.params

  const response = await prismic.getByUID('project', String(slug), {})

  const project = {
    slug: response.uid,
    title: response.data.title,
    image: {
      url: response.data.image.url,
      alt: response.data.image.alt
    },
    techs: response.data.techs,
    github_link: response.data.github_link.url,
    website_link: response.data.website_link.url,
    description: response.data.body.map(desc => desc.primary.text)
  }

  return {
    props: {
      project
    },
    revalidate: 60 * 60 * 24
  }
}
