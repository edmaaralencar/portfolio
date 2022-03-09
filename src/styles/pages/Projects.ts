import styled from 'styled-components'
import { motion } from 'framer-motion'

interface CategoryProps {
  isActive: boolean
}

export const Wrapper = styled.section`
  max-width: ${props => props.theme.container};
  width: 100%;
  padding: 0 2rem;
  margin: 5.6rem auto;
`

export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-bottom: 3.2rem;
`

export const Category = styled.button<CategoryProps>`
  padding: 1.3rem 2rem;
  color: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  border: ${({ theme, isActive }) =>
    isActive
      ? `1px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.primary}`};
  border-radius: 0.5rem;
`

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5.6rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 710px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

export const ProjectBox = styled(motion.div)`
  background-color: #202024;
  border-radius: 0.8rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  .tech {
    color: #e1e1e6;

    h2 {
      margin-bottom: 1rem;
      font-size: 1.6rem;
      font-weight: 400;
    }

    ul {
      margin-left: 3.2rem;
      /* display: flex;
      flex-direction: column;
      gap: 0.8rem; */

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
    }
  }

  a {
    margin-top: 2.4rem;
    /* margin-top: auto; */
    display: block;
    width: 100%;
    text-align: center;
    background-color: ${props => props.theme.colors.primary};
    font-size: 1.6rem;
    color: #ffffff;
    padding: 1.3rem 0;
    text-decoration: none;
    border-radius: 0.5rem;
  }
`
