import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: ${props => props.theme.container};
  width: 100%;
  padding: 0 2rem;
  margin: 5.6rem auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.6rem;

  @media (max-width: 1220px) {
    gap: 4rem;
  }

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
  }

  .img-wrapper {
    padding: 2.4rem;
    background-color: #202024;
    border-radius: 0.8rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (max-width: 1040px) {
        height: 55rem;
      }

      @media (max-width: 768px) {
        height: 100%;
      }
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1220px) {
    gap: 1.6rem;
  }

  @media (max-width: 1040px) {
    gap: 2.4rem;
  }

  h1 {
    color: #f6f6f6;
    font-size: 3.2rem;
    font-weight: 500;
  }

  .content-paragraphs {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: 1340px) {
      gap: 1.6rem;
    }

    @media (max-width: 1040px) {
      /* gap: 3.2rem; */
    }

    p {
      color: #a8a8b3;
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }

  .cta {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    a {
      display: block;
      padding: 1.2rem 0;
      text-decoration: none;
      color: #ffffff;
      font-size: 2rem;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 0.5rem;
      width: 24rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      &.outlined {
        color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
        background-color: transparent;
      }

      svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`
