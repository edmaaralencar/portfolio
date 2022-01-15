import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: ${props => props.theme.container};
  width: 100%;
  padding: 0 2rem;
  margin: 5.6rem auto;
`

export const Container = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-bottom: 6rem;

  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .left-part {
    width: 30%;
    display: table-cell;
    padding-right: 25px;
    min-height: 100%;
    vertical-align: top;

    @media (max-width: 830px) {
      width: 38%;
    }

    @media (max-width: 610px) {
      padding-left: 2.5rem;
      width: 100%;
    }

    h5 {
      color: #e2e2e2;
      font-size: 4rem;
      font-weight: bold;
    }

    span {
      display: block;
      margin-top: 0.8rem;
      font-size: 1.6rem;
      color: #a1a1a1;
    }
  }

  .divider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #bbdfff;

    &::before {
      content: '';
      display: block;
      position: absolute;
      margin-top: 8px;
      width: 15px;
      height: 15px;
      margin-left: -6px;
      background-color: #2193fc;
      border-radius: 5px;
      z-index: 1;
    }
  }

  .right-part {
    width: 50%;
    display: table-cell;
    vertical-align: top;

    @media (max-width: 1400px) {
      width: 55%;
    }

    @media (max-width: 610px) {
      width: 100%;
      padding-left: 2.5rem;
    }

    h4 {
      font-size: 2.4rem;
      font-weight: bold;
      margin-bottom: 1.6rem;
      color: #e2e2e2;
    }

    p {
      color: #a1a1a1;
      font-size: 1.6rem;
    }
  }
`
