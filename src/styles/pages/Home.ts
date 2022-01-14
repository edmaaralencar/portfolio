import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${props => props.theme.container};
  width: 100%;
  padding: 0 2rem;
  /* height: calc(100vh - 108px); */

  margin: 0 auto;

  display: flex;

  position: relative;

  div {
    align-self: center;
    max-width: 600px;
    margin: 10rem 0;

    h2 {
      font-size: 3.2rem;
      color: #e9e9e9;
      font-weight: 400;
    }

    h1 {
      margin: 1rem 0;
      font-weight: bold;
      font-size: 7.2rem;
      color: #ffffff;
    }

    h3 {
      font-size: 2.8rem;
      font-weight: lighter;
      color: #949494;
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

  .img {
    position: absolute;
    top: -19rem;
    right: -58rem;
    z-index: -1;

    @media (max-width: 1180px) {
      /* display: none; */
      position: absolute;
      top: -24rem;
      right: -42rem;
      z-index: -1;
    }
  }
`
