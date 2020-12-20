import React from 'react';

import Routes from './routes';

import { GlobalStyle } from './styles/GlobaStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  );
}

export default App;
