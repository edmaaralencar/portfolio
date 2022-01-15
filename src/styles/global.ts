import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px Roboto, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  .Toastify__toast-body > div:last-child {
    font-size: 1.6rem;
  }
`
