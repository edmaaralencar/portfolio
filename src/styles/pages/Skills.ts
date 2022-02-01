import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: ${props => props.theme.container};
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 5.6rem;
  margin-bottom: 4rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 8rem;

  @media (max-width: 1350px) {
    gap: 6rem;
  }

  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

type SkillsBoxProps = {
  color: string
}

export const SkillsBox = styled.div<SkillsBoxProps>`
  background-color: #202024;
  border-radius: 0.8rem;
  padding: 2.4rem;
  color: #e1e1e6;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${props => `${props.color}`};
      font-weight: 800;
      font-size: 2.4rem;
    }

    h4 {
      color: ${props => `${props.color}`};
      font-weight: 600;
      font-size: 1.6rem;
    }
  }

  .desc {
    margin: 3rem 0;
    font-size: 1.6rem;
  }

  .skills-list {
    font-weight: normal;
    font-size: 1.6rem;

    ul {
      margin-top: 0.8rem;
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`
