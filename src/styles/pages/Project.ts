import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 1180px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  color: #a8a8b3;

  .img-wrapper {
    padding: 2rem;
    background-color: #202024;
    border-radius: 0.8rem;

    img {
      width: 100%;
    }
  }

  h1 {
    font-size: 4rem;
    color: #e1e1e6;
    font-weight: 600;
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    color: #a8a8b3;
    margin-bottom: 1.6rem;
    line-height: 2.6rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-size: 1.8rem;

    li {
      font-size: 1.8rem;
    }
  }

  .cta {
    margin-top: 3.2rem;

    display: flex;
    gap: 1.6rem;

    a {
      display: block;
      padding: 1.3rem;
      width: 100%;
      max-width: 15rem;
      background-color: ${props => props.theme.colors.primary};
      color: #ffffff;
      font-size: 2rem;
      border-radius: 0.8rem;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      &.outlined {
        background-color: transparent;
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`
