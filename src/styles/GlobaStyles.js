import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    background-color: #FEC024;
  }
`;

export const Container = styled.main`
  height: 100%;
  min-height: calc(100vh - 140px);

  padding: 10px;

  background-color: #F4F4F4;
`;
