import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      slug
      title
      image {
        url
      }
      description {
        html
      }
      website_link
      github_link
      technologies
      category
    }
  }
`

export const GET_PROJECT_BY_SLUG = gql`
  query getProjectBySlug($slug: String) {
    project(where: { slug: $slug }) {
      slug
      title
      image {
        url
      }
      description {
        html
      }
      website_link
      github_link
      technologies
      category
    }
  }
`

export const GET_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      title
      description
      slug
      date
      company
    }
  }
`

export const GET_SKILLS = gql`
  query getSkills {
    skills {
      id
      title
      category
      description
      skills
      image {
        url
      }
      color
    }
  }
`
