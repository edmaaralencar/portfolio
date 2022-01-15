import styled from 'styled-components'

export const Wrapper = styled.form`
  background-color: #202024;
  padding: 5rem;
  width: 100%;
  max-width: 60rem;
  margin: 3rem auto;
  border-radius: 0.8rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 3.2rem;
  }

  button {
    margin-top: 2.4rem;
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    border: 0;
    font-weight: bold;
    font-size: 2.4rem;
    color: #ffffff;
    padding: 1.6rem 0;
    border-radius: 0.8rem;
    cursor: pointer;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-bottom: 2rem;

  label {
    color: #e1e1e6;
    font-size: 2.4rem;
  }

  input {
    font-size: 2rem;
    color: #e1e1e6;
    padding: 2rem;
    background-color: #131313;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      color: #44444b;
    }
  }

  textarea {
    resize: none;
    font-size: 2rem;
    color: #e1e1e6;
    padding: 2rem;
    background-color: #131313;
    border: none;
    border-radius: 0.5rem;
    font-weight: 400;
    height: 15rem;

    &::placeholder {
      color: #44444b;
    }
  }
`
