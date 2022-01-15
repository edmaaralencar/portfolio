import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;

  svg {
    position: absolute;
    top: -31rem;
    right: 0;
    z-index: -1;

    @media (max-width: 1400px) {
      width: 55rem;
      top: -40rem;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }
`

export const Container = styled.div`
  max-width: ${props => props.theme.container};
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  position: relative;

  div {
    align-self: center;
    max-width: 600px;
    margin: 14rem 0;

    @media (max-width: 1200px) {
      max-width: 50rem;
    }

    @media (max-width: 850px) {
      margin: 14rem auto;
    }

    h2 {
      font-size: 3.2rem;
      color: #e9e9e9;
      font-weight: 400;

      @media (max-width: 980px) {
        font-size: 2.4rem;
      }

      @media (max-width: 850px) {
        font-size: 3.2rem;
      }

      @media (max-width: 530px) {
        font-size: 2.4rem;
      }
    }

    h1 {
      margin: 1rem 0;
      font-weight: bold;
      font-size: 7.2rem;
      color: #ffffff;

      @media (max-width: 980px) {
        font-size: 5.6rem;
      }

      @media (max-width: 850px) {
        font-size: 7.2rem;
      }

      @media (max-width: 530px) {
        font-size: 5.6rem;
      }
    }

    h3 {
      font-size: 2.8rem;
      font-weight: lighter;
      color: #949494;

      @media (max-width: 980px) {
        font-size: 2rem;
        max-width: 35rem;
      }

      @media (max-width: 850px) {
        font-size: 2.8rem;
      }

      @media (max-width: 530px) {
        font-size: 2rem;
      }
    }

    .btn-projects {
      padding: 1.6rem 0;
      width: 100%;
      background-color: ${props => props.theme.colors.primary};
      font-size: 2.4rem;
      text-align: center;
      font-weight: 500;
      display: block;
      margin-top: 4rem;
      border-radius: 8px;
      text-decoration: none;
      color: #ffffff;
    }
  }
`
