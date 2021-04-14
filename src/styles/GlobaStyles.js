import styled, { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/Roboto/Roboto-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto ;
    src: url(${Roboto}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Segoe UI', 'Helvetica Neue', sans-serif;
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
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */


  body {
    background-color: #DDD;
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1180px;
  height: 100%;
  min-height: calc(100vh - 140px);

  margin: 0 auto;
  padding: 10px;

  background-color: #f4f4f4;
`;
