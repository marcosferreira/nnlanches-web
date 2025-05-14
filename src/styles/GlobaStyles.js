import styled, { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import { colors, typography, shapes } from "./designSystem";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${Roboto}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: ${typography.fontFamily};
    scrollbar-width: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    display: none;
    cursor: pointer;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.background.default};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.text.secondary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.text.primary};
  }

  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */


  body {
    background-color: ${colors.background.default};
    color: ${colors.text.primary};
    font-size: 16px;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${colors.primary.main};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${colors.primary.dark};
    }
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1180px;
  height: 100%;
  min-height: calc(100vh - 140px);
  margin: 0 auto;
  padding: 16px;
  background-color: ${colors.background.paper};
  box-shadow: ${shapes.shadows.small};
  border-radius: 0 0 ${shapes.borderRadius.medium} ${shapes.borderRadius.medium};
`;
