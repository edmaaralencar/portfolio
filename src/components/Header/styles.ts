import styled from 'styled-components'

export const Container = styled.header`
  max-width: ${props => props.theme.container};
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 2rem;

  .logo {
    display: flex;
    align-items: center;

    div {
      background-color: ${props => props.theme.colors.primary};
      width: 4px;
      height: 45px;
    }

    span {
      font-size: 4rem;
      font-weight: bold;
      margin-left: 1rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 4rem;

    a {
      text-decoration: none;
      color: #737380;
      list-style: none;
      font-size: 2rem;
      color: #737380;
      font-weight: 400;
      text-decoration: none;
    }

    .btn-contact {
      background: #ffffff;
      padding: 1rem 2rem;
      color: #171717;
      border-radius: 8px;
    }

    .active {
      font-weight: bold;
      color: #ffffff;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: ${props => props.theme.colors.primary};

        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        bottom: -10px;
      }
    }
  }
`
