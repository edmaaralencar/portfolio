import styled from 'styled-components'

export const Container = styled.header`
  max-width: ${props => props.theme.container};
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 2rem;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  button {
    display: none;

    @media (max-width: 850px) {
      display: block;

      position: fixed;
      top: 3rem;
      right: 2rem;
      z-index: 2;
    }
  }

  .logo {
    display: flex;
    align-items: center;

    div {
      background-color: ${props => props.theme.colors.primary};
      width: 4px;
      height: 45px;

      @media (max-width: 980px) {
        height: 35px;
      }
    }

    span {
      font-size: 4rem;
      font-weight: bold;
      margin-left: 1rem;

      @media (max-width: 980px) {
        font-size: 2.5rem;
      }
    }
  }
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 850px) {
    display: none;
  }

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
`

export const ResponsiveNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  z-index: 1;

  &.active {
    visibility: visible;

    span {
      top: 0;
    }

    ul {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
      transition-delay: 0.75s;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateX(-100px);
    transition: 0.5s;
    font-size: 2rem;
    gap: 3.2rem;
    list-style: none;
    font-weight: bold;

    a {
      text-decoration: none;
      color: #ffffff;
      list-style: none;
      font-size: 2.4rem;
      font-weight: 400;
      text-decoration: none;
    }

    .btn-contact {
      background: #ffffff;
      padding: 1rem 2rem;
      color: #171717;
      border-radius: 8px;
    }
  }
`

type ResponsiveSpanProps = {
  value: number
}

export const ResponsiveSpan = styled.span<ResponsiveSpanProps>`
  position: absolute;
  top: -100%;
  left: calc(25% * ${props => props.value});
  width: 25%;
  height: 100%;
  background: #2193fc;
  transition: 0.25s;
  border: 1px solid rgba(0, 0, 0, 0.25);
  transition-delay: calc(0.25s * ${props => props.value});
`
